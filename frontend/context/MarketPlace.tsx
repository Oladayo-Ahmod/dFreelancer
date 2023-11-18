"use client"

import React, { createContext, useEffect, useState } from 'react';
import { ADDRESS, ABI } from '../constants/index';
import { ethers , BigNumber} from 'ethers';
import Router from 'next/router';
import Swal from 'sweetalert2';
import FreelancerProps from '@/app/interfaces/freelancerProps';
import FreelancerForm from '@/app/interfaces/freelancerForm';

export const FREELANCER_CONTEXT = createContext<FreelancerProps | undefined>(
    undefined
  );

let connect : any
if(typeof window !=='undefined'){
    connect = (window as any).ethereum
}

const FreelancerProvider:React.FC<{children : React.ReactNode}>=({children,})=>{

    // states variables
    const [account, setAccount] = useState<string>()
    const [deployer, setDeployer] = useState<string>();
    const [freelancerForm, setFreelancerForm] = useState<FreelancerForm>({
        name : '',
        country : '',
        skills : '',
        imageURL : ''

    })

      // wallet connection
      const connectWallet : FreelancerProps["connectWallet"] =async function(){
        try {
            if(connect){
                const connector = await connect.request({method : 'eth_requestAccounts'})
                setAccount(connector[0])
                Router.push('/')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const registerFreelancer = async function(){
       try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            const register = await contract.registerFreelancer()

       } catch (error) {
            console.log(error);
        
       }

    }



    return(
        <FREELANCER_CONTEXT.Provider
        value={{
            account,
            connectWallet,
            freelancerForm,
            setFreelancerForm
        }}
        >

        </FREELANCER_CONTEXT.Provider>
    )

}
