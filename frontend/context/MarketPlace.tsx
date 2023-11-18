"use client"

import React, { createContext, useEffect, useState } from 'react';
import { ADDRESS, ABI } from '../constants/index';
import { ethers , BigNumber} from 'ethers';
import Router from 'next/router';
import Swal from 'sweetalert2';
import Freelancer from '@/app/interfaces/freelancerProps';

export const FREELANCER_CONTEXT = createContext<Freelancer | undefined>(
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


    return(
        <FREELANCER_CONTEXT.Provider
        value={{
            connect
        }}
        >

        </FREELANCER_CONTEXT.Provider>
    )

}
