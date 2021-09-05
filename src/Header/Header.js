import React from "react"
import "./Header.css"
import Logo from "../Logo/Logo"

const Header = () => (
  <div className="headerDiv">
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

export default Header
