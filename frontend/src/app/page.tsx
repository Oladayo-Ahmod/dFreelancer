import MobileNavbar from "../../components/MobileNavbar"
import Navbar from "../../components/Navbar"

export default function Home() {
  return (
      <main className="wrapper ovh">
        {/* <div className="preloader"></div> */}
        <Navbar />
        <MobileNavbar />
        <div className="body_content">
      
        </div>
      </main>
  )
}
