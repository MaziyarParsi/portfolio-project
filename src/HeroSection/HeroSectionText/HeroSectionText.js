import React from "react"
import "./HeroSectionText.css"
import Typical from "react-typical"

const HeroSectionText = () => {
  return (
    <div className="textArea">
      <div className="text1">سلام، به وبسایت شخصی خوش اومدید. اسم من</div>
      <div className="text2">مازیار پارسی</div>
      <div className="text3">
        <p>
          و کار من{" "}
          <Typical
            className="typical"
            wrapper="p"
            loop={Infinity}
            steps={["طراح سایت", 1000, "برنامه نویس وب", 1000, "طراح وردپرس", 1000]}
          />
        </p>
      </div>
    </div>
  )
}
export default HeroSectionText
