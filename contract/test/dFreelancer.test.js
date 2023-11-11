const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Dfreelancer", function () {
  let dfreelancer;
  let owner;
  let freelancer;
  let employer;
  let jobTitle = "Sample Job";
  let jobDescription = "This is a test job";
  let jobBudget = '100';

  beforeEach(async function () {
    [owner, freelancer, employer] = await ethers.getSigners();

    const Dfreelancer = await ethers.getContractFactory("Dfreelancer");
    dfreelancer = await Dfreelancer.deploy();
    await dfreelancer.deployed();
  });

  it("Should create a job", async function () {
      await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
      await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
      const job = await dfreelancer.getJobByID('1');
      expect(job.employer).to.equal(employer.address);
      expect(job.title).to.equal(jobTitle);
      expect(job.description).to.equal(jobDescription);
      expect(job.budget.toString()).to.equal(ethers.utils.parseEther(jobBudget));
      expect(job.completed).to.be.false;
  });

  it("Should register a freelancer", async function () {
    const freelancerName = "Test Freelancer";
    const freelancerSkills = "Solidity, JavaScript";
    await dfreelancer.connect(freelancer).registerFreelancer(freelancerName, freelancerSkills);
    const registeredFreelancer = await dfreelancer.freelancers(freelancer.address);
    expect(registeredFreelancer.freelancerAddress).to.equal(freelancer.address);
    expect(registeredFreelancer.name).to.equal(freelancerName);
    expect(registeredFreelancer.skills).to.equal(freelancerSkills);
    expect(registeredFreelancer.balance).to.equal(0);
  });

  it("Should apply for a job", async function () {
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
    await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    const apply = await dfreelancer.connect(freelancer).applyForJob('1');
    const receipt = await apply.wait()
    const events = receipt.events.find(event => event.event === 'AppliedForJob');
    assert.equal(events.args[2],freelancer.address) //
  });

  it("Should hire a freelancer", async function () {
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
    await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    await dfreelancer.connect(freelancer).applyForJob('1');
    await dfreelancer.connect(employer).hireFreelancer('1', freelancer.address);
    const job = await dfreelancer.getJobByID('1');
    expect(job.hiredFreelancer).to.equal(freelancer.address)
  });

  it("Should complete a job", async function () {
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
    await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    await dfreelancer.connect(freelancer).applyForJob('1');
    await dfreelancer.connect(employer).hireFreelancer('1', freelancer.address);
    await dfreelancer.connect(employer).completeJob('1', freelancer.address);
    const job = await dfreelancer.getJobByID('1');
    expect(job.completed).to.be.true;
    expect(job.hiredFreelancer).to.equal(freelancer.address)
  });

  it("Should deposit funds to a job", async function () {
    const fund = '100' 
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
    await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology')
    await dfreelancer.connect(employer).depositFunds('1', { value: ethers.utils.parseEther(fund)});
    const escrowFund = await dfreelancer.getEmployerEscrow(employer.address,'1')
    const _employer = await dfreelancer.getEmployerByAddress(employer.address);
    expect(_employer.balance).to.equal(ethers.utils.parseEther(fund))
    expect(escrowFund).to.equal(ethers.utils.parseEther(fund))

  });

  it("Should release escrow funds to a freelancer", async function () {
    const fund = '200'
    const initialBalance = (await dfreelancer.freelancers(freelancer.address)).balance; // previous balance
    await dfreelancer.connect(employer).registerEmployer('Ahmod','technology') 
    await dfreelancer.connect(employer).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    await dfreelancer.connect(freelancer).applyForJob('1');

    await dfreelancer.connect(employer).hireFreelancer('1', freelancer.address);
    await dfreelancer.connect(employer).depositFunds('1', { value: ethers.utils.parseEther(fund)});
    await dfreelancer.connect(employer).completeJob('1', freelancer.address);

    await dfreelancer.connect(employer).releaseEscrow('1', freelancer.address);
    
    const updatedBalance = (await dfreelancer.freelancers(freelancer.address)).balance;
    assert.equal(updatedBalance,ethers.utils.parseEther(fund))
  });

  // it("Should withdraw earnings", async function () {
  //   const initialBalance = await ethers.provider.getBalance(freelancer.address);
  //   await dfreelancer.connect(freelancer).withdrawEarnings();
  //   const updatedBalance = await ethers.provider.getBalance(freelancer.address);
  //   expect(updatedBalance.gt(initialBalance)).to.be.true;
  // });

  // Add more test cases as needed...

});
