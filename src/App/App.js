import React from "react"
import Header from "../Header/Header"
import HeroSection from "../HeroSection/HeroSection"
import AboutSection from "../AboutSection/AboutSection"
import MyServices from "../MySecvices/MyServices"
import ContactMe from "../ContactMe/ContatMe"
import Footer from "../Footer/Footer"
import "./App.css"
import { BrowserRouter, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HeroSection />
        <AboutSection />
        <MyServices />
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
