import React, { SetStateAction } from "react"

interface FreelancerProps{

    account : string | undefined
    currentEmployerDetails : any | undefined
    currentFreelancerDetails : any | undefined
    connectWallet : ()=>void
    freelancerForm : {
        name : string | undefined,
        country : string | undefined,
        skills : string  | undefined,
        gitDesc : string | undefined,
        gitTitle : string | undefined,
        price : number | undefined,
        
    }
    setFreelancerForm : React.Dispatch<SetStateAction<{
        name : string | undefined,
        country : string | undefined,
        skills : string  | undefined,
        gitDesc : string | undefined,
        gitTitle : string | undefined,
        price : number | undefined,
    }>>
    employerForm : {
        name : string | undefined,
        country : string | undefined,
        industry : string  | undefined,
        imageURL : string | undefined
    }
    setEmployerForm : React.Dispatch<SetStateAction<{
        name : string | undefined,
        country : string | undefined,
        industry : string  | undefined,
        imageURL : string | undefined
    }>>
    registerFreelancer : ()=> void
    registerEmployer : ()=> void
    jobCreationForm : {
        title : string | undefined,
        description : string | undefined,
        budget : string | undefined
    }
    setJobCreationForm : React.Dispatch<React.SetStateAction<{
        title : string | undefined,
        description : string | undefined,
        budget : string | undefined
    }>>

    createJob : ()=> void
    applyJob : (jobId : number)=> void
    hireFreelancer : (jobId : number, address: string)=> void
    depositFunds : (jobId : number, amound : string) => void
    completeJob : (jobId : number , address : string) => void
    releaseEscrow : (jobId : number, address : string) => void
    withdrawEarnings : ()=> void 
    retrieveJob : (jobId : number)=> void
    imageHandler : (e : any) => void
    freelancerDetails : (address : string) => void
    employerDetails : (address : string) => void

}

export default FreelancerProps