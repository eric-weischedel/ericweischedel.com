import React from "react"
import NavItem from "./navItem.js"
import "../styles/bottomNav.scss"

const BottomNav = () => {
  return (
    <div className="bottomNav hidden">
      <NavItem label="Work" path="/work"/>
      <NavItem label="About" path="/about"/>
      <NavItem label="Contact" path="/contact"/>
    </div>
  );
};
export default BottomNav
