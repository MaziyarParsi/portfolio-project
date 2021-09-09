import React, { useState } from "react"
import "./Header.css"
import Logo from "../Logo/Logo"
import { HashLink } from "react-router-hash-link"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", scrollHeader)

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -70
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
  }

  return (
    <div className={scroll ? "headerDiv scrolled" : "headerDiv"}>
      <div className="container">
        <Logo />
        <ul className="headerMenu">
          <HashLink to="/#contactMeSection" scroll={(el) => scrollWithOffset(el)}>
            <li>ارتباط با من</li>
          </HashLink>
          <HashLink to="/#myServicesSection" scroll={(el) => scrollWithOffset(el)}>
            <li>خدمات من</li>
          </HashLink>
          <HashLink to="/#aboutSection" scroll={(el) => scrollWithOffset(el)}>
            <li>درباره من</li>
          </HashLink>
          <HashLink to="/#heroSection" scroll={(el) => scrollWithOffset(el)}>
            <li>خانه</li>
          </HashLink>
        </ul>
      </div>
    </div>
  )
}
export default Header
