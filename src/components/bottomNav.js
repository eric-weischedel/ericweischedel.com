import React from "react"
import { Link } from "gatsby"
import "../styles/BottomNav.css"
import { Briefcase, Smile, Send } from "react-feather"

const activeLinkStyles = {
  color: "blue",
  fontFamily: "Roboto-Black",
}

const BottomNav = () => (
  <div className="bottomNav hidden">
    <Link className="navItem" to="/work">
      <span>
        <Briefcase color="#666" size={22} />
      </span>
      <span>Work</span>
    </Link>
    <Link className="navItem" to="/about">
      <span>
        <Smile color="#666" size={22} />
      </span>
      <span>About</span>
    </Link>
    <Link className="navItem" to="/contact">
      <span>
        <Send color="#666" size={22} />
      </span>
      <span>Contact</span>
    </Link>
  </div>
)
export default BottomNav
