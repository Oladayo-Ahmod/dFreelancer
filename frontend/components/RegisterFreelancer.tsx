function RegisterFreelancer(){
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
                        <h2 className="title">Create a new account</h2>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus illo.</p>
                    </div>
                </div>
            </div>
            <div className="row wow fadeInRight" data-wow-delay="300ms">
                <div className="col-xl-6 mx-auto">
                    <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                        <div className="mb30">
                            <h4>Let's create your account!</h4>
                            <p className="text mt20">Already have an account? <a href="page-login.html" className="text-thm">Log In!</a>
                            </p>
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Display Name</label>
                            <input type="text" className="form-control" placeholder="Jone" />
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Username</label>
                            <input type="text" className="form-control" placeholder="jonedoe" />
                        </div>
                        <div className="mb25">
                            <label className="form-label fw500 dark-color">Email</label>
                            <input type="email" className="form-control" placeholder="example@gmail.com" />
                        </div>
                        <div className="mb15">
                            <label className="form-label fw500 dark-color">Password</label>
                            <input type="password" className="form-control" placeholder="*******" />
                        </div>
                        <div className="d-grid mb20">
                            <button className="ud-btn btn-thm default-box-shadow2" type="button">Creat Account <i
              className="fal fa-arrow-right-long"></i></button>
                        </div>
                        <div className="hr_content mb20 ">
                            <hr /><span className="hr_top_text">OR</span>
                        </div>
                        <div className="d-md-flex justify-content-between social-media-mobile-size">
                            <button className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0" type="button"><i
              className="fab fa-facebook-f pr10"></i> Continue Facebook</button>
                            <button className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0" type="button"><i className="fab fa-google"></i>
            Continue Google</button>
                            <button className="ud-btn btn-apple fz14 fw400" type="button"><i className="fab fa-apple"></i> Continue
            Apple</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RegisterFreelancer