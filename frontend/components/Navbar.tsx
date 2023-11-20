"use client"

import Image from "next/image"
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../context/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"


function Navbar(){
    
    const {
        account,
        connectWallet
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps
    return (
        <>
             <header className="header-nav nav-homepage-style stricky main-menu">
            
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
                                    <li className="visible_list"> <a className="list-item" href="#"><span className="title">Home</span></a>
                                    </li>
                                    <li className="visible_list"> <a className="list-item" href="#"><span className="title">Browse Jobs</span></a>
                                    </li>
                                    <li className="visible_list"> <a className="list-item" href="#"><span className="title">Users</span></a>
                                    </li>
                                    <li> <a className="list-item" href="page-contact.html">Contact</a></li>
                                </ul>                              
                                <a className="login-info mr15-lg mr30" href="page-login.html">Join</a>
                                <button className="ud-btn btn-white add-joining" type="button" onClick={connectWallet}>
                                {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

         {/* Search Modal  */}
        <div className="search-modal">
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                  className="fal fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            <div className="popup-search-field search_area">
                                <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
                                <label><span className="far fa-magnifying-glass"></span></label>
                                <button className="ud-btn btn-thm" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="hiddenbar-body-ovelay"></div>
        </>
    )
}

export default Navbar