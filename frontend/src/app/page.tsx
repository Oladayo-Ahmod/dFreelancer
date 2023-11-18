import CTABanner from "../../components/CTABanner"
import HomeBanner from "../../components/HomeBanner"
import HowItWorks from "../../components/HowItWorks"
import MobileNavbar from "../../components/MobileNavbar"
import Navbar from "../../components/Navbar"
import PopularService from "../../components/PopularService"
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
          <PopularService />
          <HowItWorks />
          <CTABanner />
        </div>
      </main>
  )
}
