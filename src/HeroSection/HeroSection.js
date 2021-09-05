import React from "react"
import "./HeroSection.css"
import HeroSectionImage from "../HeroSectionBG/HeroSectionImage"
import HeroSectionText from "../HeroSectionText/HeroSectionText"

const HeroSection = () => (
  <section className="heroSection">
    <div className="container">
      <div className="homeContent">
        <HeroSectionImage />
        <HeroSectionText />
      </div>
    </div>
  </section>
)

export default HeroSection
