import Image from "next/image"

function Navbar(){
    
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
                                <div className="home1_style">
                                    <div id="mega-menu">
                                        <a className="btn-mega fw500" href="#"><span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu"></span>
                      Categories</a>
                                        <ul className="menu ps-0">
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-developer"></span> <span
                            className="menu-title">Development & IT</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-web-design-1"></span> <span
                            className="menu-title">Creative & Design </span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-digital-marketing"></span> <span
                            className="menu-title">Digital Marketing</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-translator"></span> <span
                            className="menu-title">Writing & Translation</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-microphone"></span> <span
                            className="menu-title">Music & Audio</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-video-file"></span> <span
                            className="menu-title">Video & Animation</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-ruler"></span> <span
                            className="menu-title">Engineering & Architecture</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-goal"></span> <span
                            className="menu-title">Finance & Accounting</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Web & Logo Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Website Design</a></li>
                                                            <li><a href="">App DesignUX Design</a></li>
                                                            <li><a href="">Landing Page Design</a></li>
                                                            <li><a href="">Icon Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Marketing Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Social Media Design</a></li>
                                                            <li><a href="">Email Design</a></li>
                                                            <li><a href="">Web Banners</a></li>
                                                            <li><a href="">Signage Design</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Art & Illustration</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Illustration</a></li>
                                                            <li><a href="">NFT Art</a></li>
                                                            <li><a href="">Pattern Design</a></li>
                                                            <li><a href="">Portraits & Caricatures</a></li>
                                                            <li><a href="">Cartoons & Comics</a></li>
                                                            <li><a href="">Tattoo Design</a></li>
                                                            <li><a href="">Storyboards</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Gaming</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">Game Art</a></li>
                                                            <li><a href="">Graphics for Streamers</a></li>
                                                            <li><a href="">Twitch Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="one-third">
                                                        <div className="h6 cat-title">Visual Design</div>
                                                        <ul className="ps-0 mb40">
                                                            <li><a href="">Image Editing</a></li>
                                                            <li><a href="">Presentation Design</a></li>
                                                            <li><a href="">Infographic Design</a></li>
                                                            <li><a href="">Vector Tracing</a></li>
                                                            <li><a href="">Resume Design</a></li>
                                                        </ul>
                                                        <div className="h6 cat-title">Print Design</div>
                                                        <ul className="ps-0 mb-0">
                                                            <li><a href="">T-Shirts & Merchandise</a></li>
                                                            <li><a href="">Flyer Design</a></li>
                                                            <li><a href="">Brochure Design</a></li>
                                                            <li><a href="">Poster Design</a></li>
                                                            <li><a href="">Catalog Design</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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
                                <a className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe"></span></a>
                                <a className="login-info mx15-lg mx30" href="page-become-seller.html"><span
                    className="d-none d-xl-inline-block">Become a</span> Seller</a>
                                <a className="login-info mr15-lg mr30" href="page-login.html">Sign in</a>
                                <a className="ud-btn btn-white add-joining" href="page-register.html">Join</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar