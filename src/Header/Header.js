import React, { useEffect, useState } from "react"
import "./Header.css"
import Logo from "../Logo/Logo"

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

  return (
    <div className={scroll ? "headerDiv scrolled" : "headerDiv"}>
      <div className="container">
        <Logo />
        <ul className="headerMenu">
          <li>خدمات</li>
          <li>مهارت ها</li>
          <li>درباره من</li>
          <li>خانه</li>
        </ul>
      </div>
    </div>
  )
}
export default Header
