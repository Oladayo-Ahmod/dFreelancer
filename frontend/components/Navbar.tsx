"use client"

import Image from "next/image"
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"
import { usePathname } from "next/navigation"
import Link from "next/link"


function Navbar(){
    const pathname = usePathname()    
    const {
        account,employerDetails,currentEmployerDetails,
        connectWallet
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps

    useEffect(()=>{
        connectWallet()
        if (account) {
            employerDetails(account)
            // console.log(currentEmployerDetails);
        }
        
    })
    return (
        <>
             <header className="header-nav nav-homepage-style stricky main-menu"
              style={{'backgroundColor' : pathname !== '/' ? 'white' : 'transparent'}}>     
            <nav className="posr">
                <div className="container-fluid posr menu_bdrt1 px30">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto px-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logos br-white-light pr30 pr5-xl">
                                    <a className="header-logo logo1" href="index.html">
                                        <Image src="images/header-logo.svg" width={120} height={40} alt="Header Logo" />
                                    </a>
                                    <a className="header-logo logo2" href="index.html">
                                        <Image src="images/header-logo2.svg" width={120} height={40} alt="Header Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto px-0">
                            <div className="d-flex align-items-center">
                                <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                                    <li className="visible_list"> 
                                    <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/'}><span className="title">Home</span></Link>
                                    </li>
                                    <li className="visible_list">
                                         <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/job-listing'}><span className="title">Browse Jobs</span></Link>
                                    </li>
                                    <li className="visible_list"> 
                                    {!currentEmployerDetails?.registered?
                                    (
                                        <button className="btn btn-primary btn-sm text-white" 
                                        data-bs-toggle="modal" data-bs-target="#modalId">create job</button>
                                    ):(
                                        <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/become-an-employer'}><span className="title">Join as employer</span></Link>

                                    )
                                }
                                    </li>
                                    <li> 
                                        <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/become-a-freelancer'}>Join as freelancer</Link></li>
                                </ul>                              
                                <button style={{
                                 'color' : pathname !== '/'? '#14A800' : 'white',
                                 'backgroundColor' : pathname !== '/' ? 'rgb(224 255 224)' : 'green', 'border' : 'none'}}
                                className="ud-btn btn-white add-joining" type="button" onClick={connectWallet}>
                                {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

         {/* Job Modal  */}
       
       
        
         {/* Modal  */}
        <div className="modal fade" id="modalId" tabIndex={1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            Add rows here
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        

        <div className="hiddenbar-body-ovelay"></div>
        </>
    )
}

export default Navbar