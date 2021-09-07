import React from "react"
import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection"
import AboutSection from "../AboutSection/AboutSection"
import MyServices from "../MySecvices/MyServices"
import ContactMe from "../ContactMe/ContatMe"
import Footer from "../Footer/Footer"
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <MyServices />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
