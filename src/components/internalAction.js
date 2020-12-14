import React from "react"
import { Link } from "gatsby"

import { ArrowRight } from "react-feather";
import { link as linkColor } from "../styles/colors.js"

const InternalAction = ({ text, link }) => (
  <Link className="internalAction" to={link}>
    <span className="internalActionText">{text}&nbsp;</span>
    <ArrowRight size={22} strokeWidth={2} color={linkColor} />
  </Link>
)

export default InternalAction
