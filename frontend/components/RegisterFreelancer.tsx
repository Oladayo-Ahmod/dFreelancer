"use client"

import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"


function RegisterFreelancer(){
    const {
        account,registerFreelancer,setFreelancerForm,freelancerForm,imageHandler,freelancerDetails,currentFreelancerDetails,connectWallet
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps

    useEffect(()=>{
        connectWallet()
        if (account) {
            freelancerDetails(account)
            // console.log(currentFreelancerDetails?.registered);
        }
        
    })
    return (
        <section className="our-register" style={{'backgroundColor' : '#EAFBEF'}}>

            <style jsx>
                {
                    `
                    .visible-list a{
                        color : #116E04;
                    }
                    `
                }
            </style>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
                    <div className="main-title text-center">
                        <h2 className="title">Register as a Freelancer</h2>
                        {/* <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus illo.</p> */}
                    </div>
                </div>
            </div>
            <div className="row wow fadeInRight" data-wow-delay="300ms">
                <div className="col-xl-6 mx-auto">
                    <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                        <div className="mb30">
                            <h4> {currentFreelancerDetails?.registered? "Your Profile Information" : "Let's create your account!"}</h4>
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Username</label>
                            <input type="text" readOnly={currentFreelancerDetails?.registered} 
                            onChange={(e)=>setFreelancerForm({...freelancerForm, name : e.target.value})} 
                            value={currentFreelancerDetails?.registered? currentFreelancerDetails.name : ''}
                            className="form-control" placeholder="jonedoe"  />
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Country</label>
                            <input type="text" readOnly={currentFreelancerDetails?.registered} 
                            onChange={(e)=>setFreelancerForm({...freelancerForm, country : e.target.value})} 
                            value={currentFreelancerDetails?.registered? currentFreelancerDetails.country : ''}
                            className="form-control" placeholder="Nigeria" />
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Skills</label>
                            <input type="text" readOnly={currentFreelancerDetails?.registered}
                              onChange={(e)=>setFreelancerForm({...freelancerForm, skills : e.target.value})} 
                              value={currentFreelancerDetails?.registered? currentFreelancerDetails.skills : ''}
                              className="form-control" placeholder="Solidity, Javascript, Python" />
                        </div>
                        <div className="mb25" style={{'display' : currentFreelancerDetails?.registered ? 'none' : 'block'}}>
                            <label className="form-label fw500 dark-color">Profile Picture</label>
                            <input type="file" onChange={(e)=>imageHandler(e)} className="form-control" />
                        </div>
                        <div className="d-grid mb20">
                            <button style={{'display' : currentFreelancerDetails?.registered ? 'none' : 'block'}}
                             className="ud-btn btn-thm default-box-shadow2" disabled={currentFreelancerDetails?.registered}
                              onClick={()=>registerFreelancer()} type="button">Create Account <i
              className="fal fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RegisterFreelancer