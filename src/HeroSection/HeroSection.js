import React from "react"
import "./HeroSection.css"
import heroSectionImage from "../images/hero-section.png"

const HeroSection = () => (
  <section className="heroSection">
    <div className="container">
      <div>
        <img src={heroSectionImage} alt="heroSectionImage" className="heroSectionImage"></img>{" "}
      </div>
      <div className="homeContent">
        <div className="text1">سلام، به وبسایت شخصی خوش اومدید. اسم من</div>
        <div className="text2">مازیار پارسی</div>
        <div className="text3">
          و کار من <span>طراحی سایت</span>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
