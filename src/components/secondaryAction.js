import React from "react"
import { Link } from "gatsby"

import { ArrowRightCircle } from "react-feather";
import { primary } from "../styles/colors.js"

const SecondaryAction = ({ text, link }) => (
  <Link className="secondaryAction" to={link}>
      <ArrowRightCircle size={22} strokeWidth={2} color={primary} />
      <span className="secondaryActionText">&nbsp;&nbsp;{text}</span>
  </Link>
)

export default SecondaryAction
