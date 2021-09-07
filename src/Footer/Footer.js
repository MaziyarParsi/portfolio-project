import React from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span className="text">
          این سایت توسط مازیار پارسی با <FontAwesomeIcon icon={faHeart} className="icon" /> ساخته
          شده است
        </span>
      </div>
    </footer>
  )
}
export default Footer
