"use client"

import Image from "next/image"
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"
import { usePathname } from "next/navigation"
import Link from "next/link"

function MobileNavbar(){
    const pathname = usePathname()  
    const modalRef = useRef(null) // boostrap modal  
    const {
        account,employerDetails,currentEmployerDetails,withdrawEarnings,setJobCreationForm,
        connectWallet,jobCreationForm,createJob,currentFreelancerDetails,freelancerDetails
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps

    useEffect(()=>{
        connectWallet()
        if (account) {
            employerDetails(account)
            freelancerDetails(account)
            // console.log(currentEmployerDetails);
        }
        
    })

        // bootstrap
        useEffect(()=>{
            require('bootstrap/dist/js/bootstrap.bundle')
        })
    return(

        <div id="page" className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
            <div className="header bb-white-light">
                <div className="menu_and_widgets">
                    <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                        <a className="mobile_logo" href="#">
                            <Image src="/images/header-logo.svg" width={120} height={40}  alt="" />
                       </a>
                        <div className="right-side text-end">
                            <a className="text-white" href="page-login.html">join</a>
                            <a className="menubar ml30" href="#menu">
                                <Image src="/images/white-nav-icon.svg" width={120} height={40}  alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="posr">
                    <div className="mobile_menu_close_btn"><span className="far fa-times"></span></div>
                </div>
            </div>
        </div>
        {/* mobile-menu  */}
        <nav id="menu" className="">
            <ul>
                <li > 
                        <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/'}><span className="title">Home</span></Link>
                        </li>
                        <li >
                                <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/job-listing'}><span className="title">Browse Jobs</span></Link>
                        </li>
                        <li > 
                        {currentEmployerDetails?.registered?
                        (
                            <button className="btn btn-primary btn-sm text-white" 
                            data-bs-toggle="modal" data-bs-target="#modalId">create job</button>
                        ):(
                            <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/become-an-employer'}><span className="title">Join as employer</span></Link>

                        )
                    }
                        </li>
                        <li > 
                        {currentEmployerDetails?.registered?
                        (
                            
                            <button className="btn btn-warning" >
                                    <span className="badge bg-primary">{currentEmployerDetails.balance.toString()} klay</span>
                        </button>
                        ): ''
                    }
                        </li>
                        <li > 
                        {currentFreelancerDetails?.registered?
                        (
                            
                            <button className="btn btn-warning" >
                                    <span className="badge bg-primary">{currentFreelancerDetails.balance.toString()} klay</span>
                        </button>
                        ): ''
                    }
                        </li>
                        <li> 
                            {currentFreelancerDetails?.registered? (
                                <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} 
                                className="list-item" href={'/hired-jobs'}>Hired jobs</Link>

                                ):
                                (
                                    <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} 
                                    className="list-item" href={'/become-a-freelancer'}>Join as freelancer</Link>
                                )
                            }
                        </li>
                        <li> 
                                    {currentFreelancerDetails?.registered == true && currentFreelancerDetails.balance.toString() > 0 ?
                                    (
                                        
                                        <button className="btn btn-warning" type="button" onClick={()=>withdrawEarnings()}>
                                            Withdraw
                                    </button>
                                    ): ''
                                }
                                    </li>
                        <li>
                            <button style={{
                                'color' : pathname !== '/'? '#14A800' : 'white',
                                'backgroundColor' : pathname !== '/' ? 'rgb(224 255 224)' : 'green', 'border' : 'none'}}
                            className="ud-btn btn-white add-joining" type="button" onClick={connectWallet}>
                            {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                            </button>
                        </li>                             
            </ul>
        </nav>

          {/* Modal  */}
          <div className="modal fade"  ref={modalRef} id="modalId" tabIndex={1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">Create Job</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                           <div className="mb-3">
                             <label  className="form-label">Company Name</label>
                             <input type="text" className="form-control" placeholder="company name" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, title : e.target.value})}  />                      
                           </div>
                           <div className="mb-3">
                             <label  className="form-label">Description</label>
                             <input type="text" className="form-control" placeholder="job description" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, description : e.target.value})}  />                      
                           </div>
                           <div className="mb-3">
                             <label  className="form-label">Budget</label>
                             <input type="number" className="form-control" placeholder="job budget" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, budget : Number(e.target.value)})}  />                      
                           </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={()=>createJob(modalRef)} className="btn btn-primary text-white">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    )
}

export default MobileNavbar