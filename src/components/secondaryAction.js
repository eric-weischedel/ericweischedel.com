import React from "react"

import { ArrowRightCircle } from "react-feather";
import { primary } from "../styles/colors.js"

const SecondaryAction = ({ text, link }) => (
  <a className="secondaryAction" href={link}>
      <ArrowRightCircle size={22} strokeWidth={2} color={primary} />
      <span className="secondaryActionText">&nbsp;&nbsp;{text}</span>
  </a>
)

export default SecondaryAction
