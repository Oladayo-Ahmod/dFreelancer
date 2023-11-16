import Image from "next/image"

function CTABanner(){
    return (
        <section className="p-0">
        <div className="cta-banner3 bgc-light-yellow mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                        <div className="mb30">
                            <div className="main-title">
                                <h2 className="title">Unlock a universe of freelance <br className="d-none d-xl-block" /> expertise right at your fingertips.</h2>
                            </div>
                        </div>
                        <div className="why-chose-list">
                            <div className="list-one d-flex align-items-start mb30">
                                <span className="list-icon flex-shrink-0 flaticon-badge"></span>
                                <div className="list-content flex-grow-1 ml20">
                                    <h4 className="mb-1">Get quality work done quickly</h4>
                                    <p className="text mb-0 fz15">Verify a pro's portfolio, client approval, and identity <br className="d-none d-lg-block" /> verification.</p>
                                </div>
                            </div>
                            <div className="list-one d-flex align-items-start mb30">
                                <span className="list-icon flex-shrink-0 flaticon-money"></span>
                                <div className="list-content flex-grow-1 ml20">
                                    <h4 className="mb-1">Zero charges until you hire</h4>
                                    <p className="text mb-0 fz15">Conduct interviews, discuss rates, and make payments solely <br className="d-none d-lg-block" /> for work you endorse.</p>
                                </div>
                            </div>
                            <div className="list-one d-flex align-items-start mb30">
                                <span className="list-icon flex-shrink-0 flaticon-security"></span>
                                <div className="list-content flex-grow-1 ml20">
                                    <h4 className="mb-1">Protected and well-secured</h4>
                                    <p className="text mb-0 fz15">Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 customer support if you need it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image className="cta-banner3-img wow fadeInLeft"
             width={50} height={100} layout="responsive" style={{'width' : '50%', 'height' : '100%'}}
            src="/images/about/about-5.jpg" alt="" data-wow-delay="300ms" />
        </div>
    </section>   
    )
}

export default CTABanner