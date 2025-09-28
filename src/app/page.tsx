import AboutSection from "@/section/AboutSection"
import HeroSection from "@/section/HeroSection"
import LuxeSection from "@/section/LuxeSection"
import Offerings from "@/section/Offerings"
import PortfolioSection from "@/section/PortfolioSection"
import MarqueeText from "@/section/MarqueeText"
import Events from "@/section/Events"


const page = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <Offerings/>
      <LuxeSection/>
      <MarqueeText/>
      <Events/>
      {/* <ImageMarquee/> */}
      <PortfolioSection/>
    </main>
  )
}

export default page