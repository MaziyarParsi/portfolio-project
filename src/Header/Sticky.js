import React, { useEffect } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  if (scrolled) {
    let stickyHeader = document.getElementsByClassName("headerDiv")[0]
    stickyHeader.classList.add("scrolled")
  }
}
export default Navbar
