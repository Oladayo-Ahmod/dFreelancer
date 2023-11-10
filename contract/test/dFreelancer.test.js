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
      await dfreelancer.connect(owner).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
      const job = await dfreelancer.getJobByID('1');
      expect(job.employer).to.equal(owner.address);
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
    await dfreelancer.connect(owner).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    const apply = await dfreelancer.connect(freelancer).applyForJob('1');
    const receipt = await apply.wait()
    const events = receipt.events.find(event => event.event === 'AppliedForJob');
    assert.equal(events.args[2],freelancer.address) //
  });

  it("Should hire a freelancer", async function () {
    await dfreelancer.connect(owner).createJob(jobTitle, jobDescription, ethers.utils.parseEther('100'));
    await dfreelancer.connect(freelancer).applyForJob('1');
    await dfreelancer.hireFreelancer('1', freelancer.address);
    const job = await dfreelancer.getJobByID('1');
    expect(job.hiredFreelancer).to.equal(freelancer.address)
  });

  // it("Should complete a job and release funds", async function () {
  //   const jobId = 1;
  //   await dfreelancer.completeJob(jobId, freelancer.address);
  //   const job = await dfreelancer.jobs(jobId);
  //   const freelancerBalance = (await dfreelancer.freelancers(freelancer.address)).balance;
  //   expect(job.completed).to.be.true;
  //   expect(job.completedByFreelancers[freelancer.address]).to.be.true;
  //   expect(freelancerBalance).to.equal(jobBudget);
  // });

  // it("Should deposit funds to a job", async function () {
  //   const jobId = 2;
  //   const depositAmount = 50;
  //   await dfreelancer.connect(employer).depositFunds(jobId, { value: depositAmount });
  //   const job = await dfreelancer.jobs(jobId);
  //   expect(job.escrowFunds[employer.address]).to.equal(depositAmount);
  // });

  // it("Should release escrow funds to a freelancer", async function () {
  //   const jobId = 2;
  //   const initialBalance = (await dfreelancer.freelancers(freelancer.address)).balance;
  //   await dfreelancer.releaseEscrow(jobId, freelancer.address);
  //   const job = await dfreelancer.jobs(jobId);
  //   const updatedBalance = (await dfreelancer.freelancers(freelancer.address)).balance;
  //   expect(job.escrowFunds[employer.address]).to.equal(0);
  //   expect(updatedBalance).to.equal(initialBalance + 50);
  // });

  // it("Should withdraw earnings", async function () {
  //   const initialBalance = await ethers.provider.getBalance(freelancer.address);
  //   await dfreelancer.connect(freelancer).withdrawEarnings();
  //   const updatedBalance = await ethers.provider.getBalance(freelancer.address);
  //   expect(updatedBalance.gt(initialBalance)).to.be.true;
  // });

  // Add more test cases as needed...

});
