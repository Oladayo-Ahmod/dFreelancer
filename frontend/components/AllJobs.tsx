function AllJobs(){
    return(
        // all jobs
        <section className="pt30 pb90">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="list-sidebar-style1 d-none d-lg-block">
                        <div className="accordion" id="accordionExample">
                            <div className="card mb20 pb10 mt-0">
                                <div className="card-header active" id="heading0">
                                    <h4>
                                        <button className="btn btn-link ps-0 pt-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="true" aria-controls="collapse0">Category</button>
                                    </h4>
                                </div>
                                <div id="collapse0" className="collapse show" aria-labelledby="heading0" data-parent="#accordionExample">
                                    <div className="card-body card-body px-0 pt-0">
                                        <div className="checkbox-style1 mb15">
                                            <label className="custom_checkbox">UI/UX Designer
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(1,945)</span>
                  </label>
                                            <label className="custom_checkbox">Web Developers
                    <input type="checkbox" checked={true} />
                    <span className="checkmark"></span>
                    <span className="right-tags">(8,136)</span>
                  </label>
                                            <label className="custom_checkbox">Wordpress
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(917)</span>
                  </label>
                                            <label className="custom_checkbox">Node.js
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(240)</span>
                  </label>
                                            <label className="custom_checkbox">Project Managers
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">((2,460)</span>
                  </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb20 pb0">
                                <div className="card-header active" id="heading1">
                                    <h4>
                                        <button className="btn btn-link ps-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Salary</button>
                                    </h4>
                                </div>
                                <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
                                    <div className="card-body card-body px-0 pt-0">
                                        {/* Range Slider Desktop Version  */}
                                        <div className="range-slider-style1">
                                            <div className="range-wrapper">
                                                <div className="slider-range mb10 mt15"></div>
                                                <div className="text-center">
                                                    <input type="text" className="amount" placeholder="$20" /><span className="fa-sharp fa-solid fa-minus mx-2 dark-color"></span>
                                                    <input type="text" className="amount2" placeholder="$61839" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb20 pb5">
                                <div className="card-header active" id="heading2">
                                    <h4>
                                        <button className="btn btn-link ps-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">Job Type</button>
                                    </h4>
                                </div>
                                <div id="collapse2" className="collapse show" aria-labelledby="heading2" data-parent="#accordionExample">
                                    <div className="card-body card-body px-0 pt-0">
                                        <div className="widget-wrapper pr20">
                                            <div className="switch-style1">
                                                <div className="form-check form-switch mb20">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" />
                                                    <label className="form-check-label">Freelance</label>
                                                    <span className="right-tags">(1,945)</span>
                                                </div>
                                            </div>
                                            <div className="switch-style1">
                                                <div className="form-check form-switch mb20">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" checked={true} />
                                                    <label className="form-check-label" >Full Time</label>
                                                    <span className="right-tags">(8,136)</span>
                                                </div>
                                            </div>
                                            <div className="switch-style1">
                                                <div className="form-check form-switch mb20">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault3" />
                                                    <label className="form-check-label">Part Time</label>
                                                    <span className="right-tags">(917)</span>
                                                </div>
                                            </div>
                                            <div className="switch-style1">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault4" />
                                                    <label className="form-check-label">Internship</label>
                                                    <span className="right-tags">(240)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="text-thm" href="#">+20 more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb20 pb5">
                                <div className="card-header active" id="heading3">
                                    <h4>
                                        <button className="btn btn-link ps-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">Level</button>
                                    </h4>
                                </div>
                                <div id="collapse3" className="collapse show" aria-labelledby="heading3" data-parent="#accordionExample">
                                    <div className="card-body card-body px-0 pt-0">
                                        <div className="checkbox-style1">
                                            <label className="custom_checkbox">All
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(1,945)</span>
                  </label>
                                            <label className="custom_checkbox">Internship
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(8,136)</span>
                  </label>
                                            <label className="custom_checkbox">Entery Level
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(917)</span>
                  </label>
                                            <label className="custom_checkbox">Mid-Senior
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="right-tags">(240)</span>
                  </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row align-items-center mb20">
                        <div className="col-md-6">
                            <div className="text-center text-md-start">
                                <p className="text mb-0 mb10-sm"><span className="fw500">7,512</span> available services </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
                                <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
                                    <ul className="p-0 mb-0 text-center text-md-start">
                                        <li>
                                             {/* Advance Features modal trigger  */}
                                            <button type="button" className="open-btn filter-btn-left"> <img className="me-2"
                      src="/images/icon/all-filter-icon.svg" alt="" /> All Filter</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pcs_dropdown dark-color pr10 text-center text-md-end"><span>Sort by</span>
                                    <select className="selectpicker show-tick">
                <option>Best Selling</option>
                <option>Recommended</option>
                <option>New Arrivals</option>
              </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="/images/team/client-1.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Marketing and Communications Manager Position: Exciting</h5>
                                    <h6 className="mb-3 text-thm">Mailchimp</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-3.png" alt="" />
                                    <span className="fav-icon flaticon-star" ></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Senior backend PHP/Laravel developer</h5>
                                    <h6 className="mb-3 text-thm">Invision</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-4.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Senior product manager</h5>
                                    <h6 className="mb-3 text-thm">Mailchimp</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-5.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Administrative Business Partner</h5>
                                    <h6 className="mb-3 text-thm">Mailchimp</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="/images/team/client-1.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Experienced Senior B2B Sales Consultant Opportunity</h5>
                                    <h6 className="mb-3 text-thm">Mailchimp</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-6.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Office assistant/Social media assistant</h5>
                                    <h6 className="mb-3 text-thm">Medium</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-8.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Marketing and Communications Manager Position: Exciting</h5>
                                    <h6 className="mb-3 text-thm">Figma</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-12">
                            <div className="job-list-style1 bdr1 d-xl-flex align-items-start">
                                <div className="icon d-flex align-items-center mb20">
                                    <img className="wa" src="images/team/client-7.png" alt="" />
                                    <span className="fav-icon flaticon-star"></span>
                                </div>
                                <div className="details ml20 ml0-xl">
                                    <h5>Talented Website Designer Needed for Custom Directory </h5>
                                    <h6 className="mb-3 text-thm">Udemy</h6>
                                    <p className="list-inline-item mb-0">$120k-$145k Hourly</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">2-7 Days</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Expensive</p>
                                    <p className="list-inline-item mb-0 bdrl1 pl15">Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mbp_pagination mt30 text-center">
                            <ul className="page_navigation">
                                <li className="page-item">
                                    <a className="page-link" href=""> <span className="fas fa-angle-left"></span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="">3</a></li>
                                <li className="page-item"><a className="page-link" href="">4</a></li>
                                <li className="page-item d-inline-block d-sm-none"><a className="page-link" href="">...</a></li>
                                <li className="page-item"><a className="page-link" href="">5</a></li>
                                <li className="page-item d-none d-sm-inline-block"><a className="page-link" href="">...</a></li>
                                <li className="page-item d-none d-sm-inline-block"><a className="page-link" href="">20</a></li>
                                <li className="page-item">
                                    <a className="page-link" href=""><span className="fas fa-angle-right"></span></a>
                                </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">1 – 20 of 200+ property available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}
export default AllJobs