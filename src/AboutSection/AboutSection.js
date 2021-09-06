import React from "react"
import "./AboutSection.css"
import aboutSectionPicture from "../images/me.jpg"

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <h2 className="title">درباره من</h2>
        <div className="aboutContent">
          <div className="pictureColumn">
            <img src={aboutSectionPicture}></img>
          </div>
          <div className="textColumn"></div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
