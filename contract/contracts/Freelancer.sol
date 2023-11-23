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
        string country;
        string image;
        string gigTitle;
        string gitDescription;
        string profileTitle;
        uint jobsCompleted;
        bool registered;
        string registration_date;
        string starting_price;
    }

    
    struct Employer {
        address employerAddress;
        string name;
        string industry;
        uint balance;
        string country;
        string image;
        bool registered;
        string registration_date;

    }

    // Job[] public jobs;
    mapping(uint256 => Job) jobs;

    mapping(address => Freelancer) public freelancers;
    mapping(address => Employer) public employers;
    // mapping(address => bool) completedByFreelancers;
    mapping(address => mapping(uint256 => uint)) escrowFunds;


    event JobCreated(uint jobId, string title);
    event FreelancerRegistered(address freelancerAddress, string name);
    event EmployerRegistered(address EmployerAddress, string name);
    event JobCompleted(uint jobId, address freelancerAddress, uint payment);
    event FundsDeposited(uint jobId, address sender, uint amount);
    event FundsReleased(uint jobId, address freelancerAddress, uint amount);
    event AppliedForJob(uint jobId, address employerAddress, address freelancerAddress);
    event WithdrawFund(address freelancer, uint amount);


    constructor() {
        owner = msg.sender;
    }

    
    modifier onlyEmployer(address _employerAddress){
        require(employers[msg.sender].employerAddress == _employerAddress, "Only employer can call this function");

        _;
    }

     modifier onlyFreelancer(address _freelancerAddress){
        require(freelancers[msg.sender].freelancerAddress == _freelancerAddress, "Only freelancer can call this function");
        _;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    /// @notice job creation and increment job count,
    /// @param _title, @param _description, @param _budget
    function createJob(string memory _title, string memory _description, uint256 _budget) public onlyEmployer(msg.sender){
        totalJobs++;
        uint8 jobId = totalJobs;
        jobs[jobId] = Job(jobId,payable(msg.sender),_title,_description,_budget,false,new address[](0),address(0));    
        emit JobCreated(jobId, _title);
    }

    /// @notice retrieves job by ID
    /// @param jobId, jobId
    /// @return props
     function getJobByID(uint256 jobId) external view returns(Job memory props) {
        require(jobId > 0 && jobId <= totalJobs, "Invalid job ID");
        props = jobs[jobId];
    }

    /// @notice retrieves all jobs
    /// @return props
    
    function allJobs() external view returns(Job[] memory props){
        props = new Job[](totalJobs);
        for (uint i = 0; i < totalJobs; i++) {
            props[i] = jobs[i];
        }

    }

    /// @notice retrieves employer by address
    /// @param _employer, address
    /// @return props
    function getEmployerByAddress(address _employer) external view returns(Employer memory props){
        props = employers[_employer];
    }

     /// @notice retrieves freelancer by address
    /// @param _freelancer, address
    /// @return props
    function getFreelancerByAddress(address _freelancer) external view returns(Freelancer memory props){
        props = freelancers[_freelancer];
    }

     /// @notice retrieves employer escrow balance
    /// @param _employer, @param _job_id
    /// @return uint
    function getEmployerEscrow(address _employer, uint256 _job_id) external view returns(uint){
        return escrowFunds[_employer][_job_id];

    }

     /// @notice job application
    /// @param jobId, job id
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

    /// @notice hiring freelancer and check if freelancer is not already hired for the job
    /// @param jobId, @param freelancerAddress
    function hireFreelancer(uint jobId, address freelancerAddress) public onlyEmployer(msg.sender) {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(job.employer != address(0), "Job not found.");
        require(!isFreelancerHired(job, freelancerAddress), "Freelancer is already hired.");

        job.hiredFreelancer = freelancerAddress;
    
    }

    /// @notice process job completion
    /// @param jobId, @param freelancerAddress
    function completeJob(uint jobId, address freelancerAddress) public onlyEmployer(msg.sender) {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(job.employer != address(0), "Job not found.");
        require(isFreelancerHired(job, freelancerAddress), "Freelancer is not hired for this job.");
        // mark the job as completed
        uint payment = job.budget;
        job.completed = true;
        totalCompletedJobs++;
        freelancers[freelancerAddress].jobsCompleted++;
        emit JobCompleted(jobId, freelancerAddress, payment);
    }

    /// @notice process freelancer registration
    /// @param _name , @param _skills
    function registerFreelancer
    (string memory _name, string memory _skills, string memory _country,string memory _imageURI,
    string memory _gigTitle, string memory _gigDesc, string memory _profileTitle,string memory _date, string memory _starting_price) public {
        require(freelancers[msg.sender].registered == false, 'already registered');
        require(bytes(_name).length > 0, "Name cannot be empty.");
        require(bytes(_skills).length > 0, "Skills cannot be empty.");
        totalFreelancers++;
        freelancers[msg.sender] = Freelancer(msg.sender, _name, _skills, 0,_country, 
        _imageURI,_gigTitle,_gigDesc,_profileTitle,0,true,_date,_starting_price);

        emit FreelancerRegistered(msg.sender, _name);
    }

        // function updateFreelancer() external onlyFreelancer(msg.sender){
        //     address _freelancer = freelancers[msg.sender];

        // }

        /// @notice process employer registration
        /// @param _name , @param _industry
      function registerEmployer
      (string memory _name, string memory _industry,string memory _country, string memory _imageURI, string memory _date) public {
        require(employers[msg.sender].registered == false, 'already registered');
        require(bytes(_name).length > 0, "Name cannot be empty.");
        require(bytes(_industry).length > 0, "Skills cannot be empty.");
        totalEmployers++;
        employers[msg.sender] = Employer(msg.sender, _name, _industry, 0,_country, _imageURI,true,_date);
        emit EmployerRegistered(msg.sender, _name);
    }

        /// @notice process employer funds deposit for a specific job
        /// @param jobId , job id
    function depositFunds(uint jobId) public payable {
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        Employer storage employer = employers[msg.sender];
        require(job.employer == msg.sender, "Only the employer can deposit funds.");
        require(!job.completed, "Job is already completed.");
        require(msg.value >= job.budget, "Insufficient amount");
        
        employer.balance += msg.value;
        escrowFunds[msg.sender][jobId] += msg.value;
        emit FundsDeposited(jobId, msg.sender, msg.value);
    }

        /// @notice release escrow fund after successful completion of the job
        /// @param jobId , @param freelancerAddress
    function releaseEscrow(uint jobId, address freelancerAddress) public onlyEmployer(msg.sender){
        require(jobId <= totalJobs && jobId > 0, "Job does not exist.");
        Job storage job = jobs[jobId];
        require(msg.sender == job.employer, "Only the employer can release escrow.");
        require(job.completed = true, "Job is not completed by freelancer");

        uint escrowAmount = escrowFunds[msg.sender][jobId];

        require(escrowAmount > 0, "No funds in escrow.");
        require(escrowAmount >= job.budget, "insufficient funds");
        escrowFunds[msg.sender][jobId] = 0;        
        // Implement logic to release funds from escrow to the freelancer's address
        Freelancer storage freelancer = freelancers[freelancerAddress];
        freelancer.balance += escrowAmount;
        emit FundsReleased(jobId, freelancerAddress, escrowAmount);
    }

        /// @notice check if freelancer is hired
        /// @param job , @param freelancerAddress
        /// @return bool
    function isFreelancerHired(Job storage job, address freelancerAddress) internal view returns (bool) {
        if (job.hiredFreelancer == freelancerAddress) {
            return true;
        }
        return false;
    }

    /// @notice process funds withdrawal to the freelancer after successful completion of a job
    function withdrawEarnings() public onlyFreelancer(msg.sender) {
        Freelancer storage freelancer = freelancers[msg.sender];
        require(freelancer.balance > 0, "No balance to withdraw.");

        uint balance = freelancer.balance;
        freelancer.balance = 0;

        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Transfer failed.");

        emit WithdrawFund(msg.sender,balance);
    }
}
