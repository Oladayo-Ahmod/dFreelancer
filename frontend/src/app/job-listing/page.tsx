import Footer from "../../../components/Footer"
import JobListing from "../../../components/JobListing"
import MobileNavbar from "../../../components/MobileNavbar"
import Navbar from "../../../components/Navbar"

function ListingPage(){
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

export default ListingPage