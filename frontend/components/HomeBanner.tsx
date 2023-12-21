function HomeBanner(){
    return(
        <section className="home-one p-0 space-maintain-1 bg-overlay">
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-banner-wrapper home1_style">
                        <div className="banner-style-one dots_none nav_none owl-theme owl-carousel">
                            <div className="slide slide-one" style={{'backgroundImage' :' url(images/home/home-1.jpg)'}}></div>
                            {/* <div className="slide slide-one" style={{'backgroundImage' :' url(images/home/home-1.jpg)'}}></div> */}
                        </div>
                        <div className="carousel-btn-block banner-carousel-btn">
                            <span className="carousel-btn left-btn"><i className="fas fa-chevron-left left"></i></span>
                            <span className="carousel-btn right-btn"><i className="fas fa-chevron-right right"></i></span>
                        </div>
                         {/* /.carousel-btn-block banner-carousel-btn  */}
                    </div>
                     {/* /.main-banner-wrapper  */}
                </div>
            </div>
        </div>
        <div className="home1-banner-content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-xxl-7">
                        <div className="position-relative">
                            <h3 className="banner-title">Decentralized Talent Exchange: Empowering Freelancers and Clients in a Borderless Marketplace
                            </h3>
                            <p className="banner-text text-white ff-heading mb25">Explore boundless possibilities beneath your fingertips.</p>
                            {/* <div className="advance-search-tab bgc-white bgct-sm p10 p0-md bdrs4 banner-btn position-relative zi9">
                                <div className="row">
                                    <div className="col-md-5 col-lg-6 col-xl-6">
                                        <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                                            <form className="form-search position-relative">
                                                <div className="box-search">
                                                    <span className="icon far fa-magnifying-glass"></span>
                                                    <input className="form-control" type="text" name="search" placeholder="What are you looking for?" />
                                                    <div className="search-suggestions">
                                                        <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
                                                        <div className="box-suggestions">
                                                            <ul className="px-0 m-0 pb-4">
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile app development</div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile app builder</div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile legends</div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile app ui ux design</div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile game app development</div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="info-product">
                                                                        <div className="item_title">mobile app design</div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-4 d-none d-md-block">
                                        <div className="bselect-style1">
                                            <select className="selectpicker" data-width="100%">
                    <option>Select Role</option>
                    <option data-tokens="Graphics&Design">Graphics & Design</option>
                    <option data-tokens="DigitlMarketing">Digital Marketing</option>
                    <option data-tokens="Writing&Translation">Writing & Translation</option>
                    <option data-tokens="Video&Animation">Video & Animation</option>
                    <option data-tokens="Music&Audio">Music & Audio</option>
                    <option data-tokens="Programming&Tech">Programming & Tech</option>
                  </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 ps-md-0">
                                        <div className="text-center text-xl-end">
                                            <button className="ud-btn btn-thm w-100 px-4" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="d-none d-md-flex mt30 banner-text">
                                <p className="hero-text fz15 me-2 text-white mb-0">Popular Searches:</p>
                                <a className="text-white" href="#"> Website Design, </a>
                                <a className="text-white" href="#"> WordPress, </a>
                                <a className="text-white" href="#"> Logo Design, </a>
                                <a className="text-white" href="#"> AI Services, </a>
                                <a className="text-white" href="#"> Digital Marketing </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeBanner