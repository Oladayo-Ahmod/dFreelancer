import Footer from "../../../components/Footer"
import JobListing from "../../../components/JobListing"
import MobileNavbar from "../../../components/MobileNavbar"
import MyJobs from "../../../components/MyJobs"
import Navbar from "../../../components/Navbar"


function SingleJob(){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <MobileNavbar />
            <div className="body_content">
               <JobListing />
               <MyJobs />
                <Footer />
            </div>
        </main>
    )
}

export default SingleJob