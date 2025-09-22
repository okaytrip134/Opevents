import AboutSection from "@/section/AboutSection"
import HeroSection from "@/section/HeroSection"
import LuxeSection from "@/section/LuxeSection"
import Offerings from "@/section/Offerings"
import PortfolioSection from "@/section/PortfolioSection"
import MarqueeText from "@/component/MarqueeText"


const page = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <Offerings/>
      <LuxeSection/>
      <MarqueeText/>
      {/* <ImageMarquee/> */}
      <PortfolioSection/>
    </main>
  )
}

export default page