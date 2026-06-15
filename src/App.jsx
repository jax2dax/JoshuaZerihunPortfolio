import React from 'react'
import Hero from "./sections/Hero"
//import './tt'
import  ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
     <ShowcaseSection />
     {/* <LogoSection /> */}
     <FeatureCards />
     <ExperienceSection />
     <TechStack />
     <Testimonial />
     <Contact />
     <Footer />
    </main>
  )
}

export default App
