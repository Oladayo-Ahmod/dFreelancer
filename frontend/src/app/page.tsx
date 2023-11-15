import HomeBanner from "../../components/HomeBanner"
import MobileNavbar from "../../components/MobileNavbar"
import Navbar from "../../components/Navbar"
import TalentCategory from "../../components/TalentCategory"

export default function Home() {
  return (
      <main className="wrapper ovh">
        {/* <div className="preloader"></div> */}
        <Navbar />
        <MobileNavbar />
        <div className="body_content">
          <HomeBanner />
          <TalentCategory />
        </div>
      </main>
  )
}
