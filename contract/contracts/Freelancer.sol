// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Dfreelancer {
    address public owner;
    uint8 public totalJobs;
    uint public totalFreelancers;
    uint public totalEmployers;
    uint public totalCompletedJobs;

    struct Job {
        uint8 id;
        address employer;
        string title;
        string description;
        uint256 budget;
        bool completed;
        address[] applicants;
        address hiredFreelancer;        
        
    }

    struct Freelancer {
        address freelancerAddress;
        string name;
        string skills;
        uint balance;
    }

    
    struct Employer {
        address employerAddress;
        string name;
        string industry;
        uint balance;
    }

    // Job[] public jobs;
    mapping(uint256 => Job) jobs;

    mapping(address => Freelancer) public freelancers;
    mapping(address => Employer) public employers;
    // mapping(address => bool) completedByFreelancers;
    mapping(address => uint) escrowFunds;


    event JobCreated(uint jobId, string title);
    event FreelancerRegistered(address freelancerAddress, string name);
    event EmployerRegistered(address EmployerAddress, string name);
    event JobCompleted(uint jobId, address freelancerAddress, uint payment);
    event FundsDeposited(uint jobId, address sender, uint amount);
    event FundsReleased(uint jobId, address freelancerAddress, uint amount);
    event AppliedForJob(uint jobId, address employerAddress, address freelancerAddress);


    constructor() {
        owner = msg.sender;
    }

    modifier onlyEmployer(address _employerAddress){
        require(employers[msg.sender].employerAddress == _employerAddress, "Only employer can create job");

        _;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    function createJob(string memory _title, string memory _description, uint256 _budget) public onlyEmployer(msg.sender){
        totalJobs++;
        uint8 jobId = totalJobs;
        jobs[jobId] = Job(jobId,payable(msg.sender),_title,_description,_budget,false,new address[](0),address(0));    
        emit JobCreated(jobId, _title);
    }

     function getJobByID(uint256 jobId) external view returns(Job memory props) {
        require(jobId > 0 && jobId <= totalJobs, "Invalid job ID");
        props = jobs[jobId];
    }

    function getEmployerByAddress() external view returns(Employer memory props){
        props = employers[msg.sender];
    }

    function applyForJob(uint jobId) public {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(job.employer != address(0), "Job not found.");
        require(msg.sender != address(0), "Invalid applicant.");

        for (uint i = 0; i < job.applicants.length; i++) {
            if (job.applicants[i] == msg.sender) {
                revert("You have already applied for this job.");
            }
        }

        job.applicants.push(msg.sender);

        emit AppliedForJob(jobId,job.employer,msg.sender);
    }

    function hireFreelancer(uint jobId, address freelancerAddress) public onlyEmployer(msg.sender) {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(job.employer != address(0), "Job not found.");
        require(!isFreelancerHired(job, freelancerAddress), "Freelancer is already hired.");

        job.hiredFreelancer = freelancerAddress;
    
    }

    function completeJob(uint jobId, address freelancerAddress) public onlyEmployer(msg.sender) {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(job.employer != address(0), "Job not found.");
        require(isFreelancerHired(job, freelancerAddress), "Freelancer is not hired for this job.");
        // require(job.completed = false, "Job is already completed.");

        // Pay the freelancer and mark the job as completed
        uint payment = job.budget;
        job.completed = true;

        Freelancer storage freelancer = freelancers[freelancerAddress];
        freelancer.balance += payment;

        totalCompletedJobs++;
        emit JobCompleted(jobId, freelancerAddress, payment);
    }

    function registerFreelancer(string memory _name, string memory _skills) public {
        require(bytes(_name).length > 0, "Name cannot be empty.");
        require(bytes(_skills).length > 0, "Skills cannot be empty.");
        totalFreelancers++;
        freelancers[msg.sender] = Freelancer(msg.sender, _name, _skills, 0);
        emit FreelancerRegistered(msg.sender, _name);
    }

      function registerEmployer(string memory _name, string memory _industry) public {
        require(bytes(_name).length > 0, "Name cannot be empty.");
        require(bytes(_industry).length > 0, "Skills cannot be empty.");
        totalEmployers++;
        employers[msg.sender] = Employer(msg.sender, _name, _industry, 0);
        emit EmployerRegistered(msg.sender, _name);
    }

    function depositFunds(uint jobId) public payable {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        Employer memory employer = employers[msg.sender];
        require(job.employer == msg.sender, "Only the employer can deposit funds.");
        require(!job.completed, "Job is already completed.");
        require(msg.value >= job.budget, "Insufficient amount");
        
        employer.balance += msg.value;
        escrowFunds[msg.sender] += msg.value;
        emit FundsDeposited(jobId, msg.sender, msg.value);
    }

    function releaseEscrow(uint jobId, address freelancerAddress) public {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only the employer can release escrow.");
        require(job.completed = true, "Job is not completed by freelancer");

        uint escrowAmount = escrowFunds[msg.sender];

        require(escrowAmount > 0, "No funds in escrow.");
        require(escrowAmount >= job.budget, "insufficient funds");
        escrowFunds[msg.sender] = 0;        
        // Implement logic to release funds from escrow to the freelancer's address
        Freelancer storage freelancer = freelancers[freelancerAddress];
        freelancer.balance += escrowAmount;
        emit FundsReleased(jobId, freelancerAddress, escrowAmount);
    }

    function isFreelancerHired(Job storage job, address freelancerAddress) internal view returns (bool) {
        if (job.hiredFreelancer == freelancerAddress) {
            return true;
        }
        return false;
    }


    function withdrawEarnings() public {
        Freelancer storage freelancer = freelancers[msg.sender];
        require(freelancer.balance > 0, "No balance to withdraw.");

        uint balance = freelancer.balance;
        freelancer.balance = 0;

        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Transfer failed.");
    }
}
