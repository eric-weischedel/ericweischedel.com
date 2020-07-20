import React from "react"
import { Link } from "gatsby"
import { Briefcase, Smile, MessageCircle } from "react-feather"
import { primary } from "../styles/colors.js"

const NavItem = ({ label, path }) => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "navItem active" } : {};
  };
  const color = "#666666";
  var icon;
  if (label === "Work") {
    icon = <Briefcase color={color} size={22} strokeWidth={2} />;
  } else if (label === "About") {
    icon = <Smile color={color} size={22} strokeWidth={2} />;
  } else if (label === "Contact") {
    icon = <MessageCircle color={color} size={22} strokeWidth={2} />;
  }
  return (
    <Link getProps={isActive} className="navItem" to={path}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};
export default NavItem
