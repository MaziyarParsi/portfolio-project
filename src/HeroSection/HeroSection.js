import React from "react"
import "./HeroSection.css"
import HeroSectionImage from "./HeroSectionBG/HeroSectionImage"
import HeroSectionText from "./HeroSectionText/HeroSectionText"

const HeroSection = () => (
  <section className="heroSection" id="heroSection">
    <div className="container">
      <HeroSectionImage />
      <HeroSectionText />
    </div>
  </section>
)

export default HeroSection
