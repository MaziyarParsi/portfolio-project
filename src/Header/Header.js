import React, { useState } from "react"
import "./Header.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

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
          <Link to="/ContactMe">
            <li>ارتباط با من</li>
          </Link>

          <Link to="/MyServices">
            <li>خدمات من</li>
          </Link>

          <Link to="/AboutSection">
            <li>درباره من</li>
          </Link>

          <Link to="/">
            <li>خانه</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
export default Header
