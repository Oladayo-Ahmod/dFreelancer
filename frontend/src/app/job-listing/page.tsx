import Footer from "../../../components/Footer"
import MobileNavbar from "../../../components/MobileNavbar"
import Navbar from "../../../components/Navbar"

function JobListing(){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <MobileNavbar />
            <div className="body_content">
               <JobListing />
                <Footer />
            </div>
        </main>
    )
}

export default JobListing