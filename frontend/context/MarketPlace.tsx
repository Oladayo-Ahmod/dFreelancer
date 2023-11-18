"use client"

import React, { createContext, useEffect, useState } from 'react';
import { ADDRESS, ABI } from '../constants/index';
import { ethers , BigNumber} from 'ethers';
import Router from 'next/router';
import Swal from 'sweetalert2';
import FreelancerProps from '@/app/interfaces/freelancerProps';

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
    const [freelancerForm, setFreelancerForm] = useState<FreelancerProps["freelancerForm"]>({
        name : '',
        country : '',
        skills : '',
        imageURL : ''

    })
    const [employerForm, setEmployerForm] = useState<FreelancerProps["employerForm"]>({
        name : '',
        country : '',
        industry : '',
        imageURL : ''

    })
    const [jobCreationForm, setJobCreationForm] = useState<FreelancerProps["jobCreationForm"]>({
        title : '',
        description : '',
        budget : ''
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
        const {name,country,skills,imageURL} = freelancerForm
       try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            const register = await contract.registerFreelancer(name,skills,country,imageURL)
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
        const {name,country,industry,imageURL} = employerForm
        try {
             const provider = new ethers.providers.Web3Provider(connect)
             const signer = provider.getSigner()
             const contract = new ethers.Contract(ADDRESS,ABI,signer)
             const register = await contract.registerFreelancer(name,industry,country,imageURL)
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

     const createJob : FreelancerProps["createJob"] =async ()=>{
        const {title,description,budget} = jobCreationForm
        try {

            const parsedBudget = ethers.utils.parseEther(budget as string)
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            await contract.createJob(title,description,parsedBudget)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully created a job`,
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

     const applyJob : FreelancerProps["applyJob"]=async (jobId)=>{
        try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            await contract.applyForJob(jobId)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully applied for this job`,
                showConfirmButton: true,
                timer: 4000
            })
        } catch (error : any) {
            if(error.message.includes('Job does not exist')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Job does not exist`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else if (error.message.includes('You have already applied for this job')) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `You have already applied for this job!`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `an error occured`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
    
        }
     }

     const hireFreelancer : FreelancerProps["hireFreelancer"]= async(jobId,address)=>{
        try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            await contract.hireFreelancer(jobId,address)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully hired ${address.slice(0,6)}...${address.slice(address.length -4)} for this job`,
                showConfirmButton: true,
                timer: 4000
            })
            
        } catch (error : any) {
            if(error.message.includes('Job does not exist')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Job does not exist`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else if(error.message.includes('Freelancer is already hired')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Freelancer is already hired for this job`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `an error occured`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
               
        }
     }

     const depositFunds : FreelancerProps["depositFunds"] = async(jobId,amount)=>{
        try {
            const provider = new ethers.providers.Web3Provider(connect)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(ADDRESS,ABI,signer)
            const parsedAmount = ethers.utils.parseEther(amount)
            await contract.depositFunds(jobId, {value : parsedAmount})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully applied for this job`,
                showConfirmButton: true,
                timer: 4000
            })
        } catch (error : any) {
            if(error.message.includes('Job does not exist')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Job does not exist`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else if(error.message.includes('Only the employer can deposit funds')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `You are not an employer!`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else if(error.message.includes('Insufficient amount')){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Insufficient amount!`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `an error occured!`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            
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
            registerEmployer,
            jobCreationForm,
            setJobCreationForm,
            createJob,
            applyJob,
            hireFreelancer,
            depositFunds
        }}
        >

        </FREELANCER_CONTEXT.Provider>
    )

}
