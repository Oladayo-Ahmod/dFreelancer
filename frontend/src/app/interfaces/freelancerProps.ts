import React, { SetStateAction } from "react"

interface FreelancerProps{

    account : string | undefined
    connectWallet : ()=>void
    freelancerForm : {
        name : string | undefined,
        country : string | undefined,
        skills : string  | undefined,
        imageURL : string | undefined
    }
    setFreelancerForm : React.Dispatch<SetStateAction<{
        name : string | undefined,
        country : string | undefined,
        skills : string  | undefined,
        imageURL : string | undefined
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
}

export default FreelancerProps