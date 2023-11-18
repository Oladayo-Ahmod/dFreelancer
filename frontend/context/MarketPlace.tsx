"use client"

import React, { createContext, useEffect, useState } from 'react';
import { ADDRESS, ABI } from '../constants/index';
import { ethers , BigNumber} from 'ethers';
import Router from 'next/router';
import Swal from 'sweetalert2';
import FreelancerProps from '@/app/interfaces/freelancerProps';
import FreelancerForm from '@/app/interfaces/freelancerForm';
import EmployerForm from '@/app/interfaces/employerForm';

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
    const [employerForm, setEmployerForm] = useState<EmployerForm>({
        name : '',
        country : '',
        industry : '',
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

    const registerFreelancer : FreelancerProps["registerFreelancer"] = async function(){
       try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            const register = await contract.registerFreelancer()
            await register.wait()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully registered as a freelancer`,
                showConfirmButton: true,
                timer: 4000
            })    

       } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: `an error occured, try again.`,
                showConfirmButton: true,
                timer: 4000
            })  
            console.log(error);
        
       }

    }

    const registerEmployer : FreelancerProps["registerFreelancer"] = async function(){
        try {
             const provider = new ethers.providers.Web3Provider(connect)
             const signer = provider.getSigner()
             const contract = new ethers.Contract(ADDRESS,ABI,signer)
             const register = await contract.registerFreelancer()
             await register.wait()
             Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully registered as an employer`,
                showConfirmButton: true,
                timer: 4000
            })    
 
        } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                text: `an error occured, try again.`,
                showConfirmButton: true,
                timer: 4000
            })    
             console.log(error);
         
        }
 
     }

     


    return(
        <FREELANCER_CONTEXT.Provider
        value={{
            account,
            connectWallet,
            freelancerForm,
            setFreelancerForm,
            registerFreelancer,
            employerForm,
            setEmployerForm,
            registerEmployer
        }}
        >

        </FREELANCER_CONTEXT.Provider>
    )

}
