import React from "react"
import { Link } from "gatsby"
import { Briefcase, Smile, MessageCircle } from "react-feather"
import { primary } from "../styles/colors.js"

const NavItem = ({ label, path }) => {
  var color = "#666666";
  var active = false;
  if (window) {
    active = window.location.pathname === path;
    color = active ? primary : "#666666";
  }
  var icon;
  if (label === "Work") {
    icon = <Briefcase color={color} size={22} strokeWidth={2} />;
  } else if (label === "About") {
    icon = <Smile color={color} size={22} strokeWidth={2} />;
  } else if (label === "Contact") {
    icon = <MessageCircle color={color} size={22} strokeWidth={2} />;
  }
  return (
    <Link className="navItem" to={path}>
      <span>
        {icon}
      </span>
      <span className={active ? "active" : "inactive"}>{label}</span>
    </Link>
  );
};
export default NavItem
