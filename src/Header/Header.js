import React from "react"
import "./Header.css"
import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"

const Header = () => (
  <div className="headerDiv">
    <div className="container">
      <Logo />
      <Navbar />
    </div>
  </div>
)

export default Header
