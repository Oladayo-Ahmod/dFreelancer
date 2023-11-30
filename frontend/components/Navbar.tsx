"use client"

import Image from "next/image"
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"
import { usePathname } from "next/navigation"
import Link from "next/link"


function Navbar(){
    const pathname = usePathname()  
    const modalRef = useRef(null) // boostrap modal  
    const {
        account,employerDetails,currentEmployerDetails,setJobCreationForm,withdrawEarnings,
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
                                    {currentEmployerDetails?.registered?
                                    (
                                        <button className="btn btn-primary btn-sm text-white" 
                                        data-bs-toggle="modal" data-bs-target="#modalId">create job</button>
                                    ):(
                                        <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="list-item" href={'/become-an-employer'}><span className="title">Join as employer</span></Link>

                                    )
                                }
                                    </li>

                                    <li className="visible_list">
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
                                    <li className="visible_list"> 
                                    {currentEmployerDetails?.registered?
                                    (
                                        
                                        <button className="btn btn-warning" >
                                             <span className="badge bg-primary">{currentEmployerDetails.balance.toString()} klay</span>
                                    </button>
                                    ): ''
                                }
                                    </li>
                                    <li className="visible_list"> 
                                    {currentFreelancerDetails?.registered?
                                    (
                                        
                                        <button className="btn btn-warning" >
                                             <span className="badge bg-primary">{currentFreelancerDetails.balance.toString()} klay</span>
                                    </button>
                                    ): ''
                                }
                                    </li>
                                    <li className="visible_list"> 
                                    {currentFreelancerDetails?.registered == true && currentFreelancerDetails.balance.toString() > 0 ?
                                    (
                                        
                                        <button className="btn btn-warning" type="button" onClick={()=>withdrawEarnings()}>
                                            Withdraw
                                    </button>
                                    ): ''
                                }
                                    </li>
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
        
        
        

        <div className="hiddenbar-body-ovelay"></div>
        </>
    )
}

export default Navbar