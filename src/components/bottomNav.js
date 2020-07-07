import React from "react"
import { Link } from "gatsby"
import "../styles/BottomNav.css"

const BottomNav = () => (
  <div className="bottomNav hidden">
    <h1>
      <Link to="/work">Work</Link>
    </h1>
    <h1>
      <Link to="/about">About</Link>
    </h1>
    <h1>
      <Link to="/contact">Contact</Link>
    </h1>
  </div>
)
export default BottomNav
