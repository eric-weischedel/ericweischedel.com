import React from "react"
import { Link } from "gatsby"
import "../styles/BottomNav.css"

const BottomNav = () => (
  <div className="bottomNav hidden">
    <Link className="navItem" to="/work">
      <p>🎨</p>
      <p>Work</p>
    </Link>
    <Link className="navItem" to="/about">
      <p>😊</p>
      <p>About Me</p>
    </Link>
    <Link className="navItem" to="/contact">
      <p>📞</p>
      <p>Contact</p>
    </Link>
  </div>
)
export default BottomNav
