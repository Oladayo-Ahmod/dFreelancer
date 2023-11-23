import Footer from "../../../../components/Footer"
import FreelancerPage from "../../../../components/FreelancerPage"
import MobileNavbar from "../../../../components/MobileNavbar"
import Navbar from "../../../../components/Navbar"

function Freelancer({params} : {
    params : {
        address : string
    }
}){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <MobileNavbar />
            <div className="body_content">
                <FreelancerPage />
                <Footer />
            </div>
        </main>
    )
}

export default Freelancer