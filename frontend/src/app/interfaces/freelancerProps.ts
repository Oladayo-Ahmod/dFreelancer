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
}

export default FreelancerProps