import React from "react"

import { ExternalLink } from "react-feather";
import { link as linkColor } from "../styles/colors.js"

const SecondaryAction = ({ text, link }) => (
  <a className="secondaryAction" href={link} target="_blank">
    <span className="secondaryActionText">{text}&nbsp;&nbsp;</span>
    <ExternalLink size={22} strokeWidth={2} color={linkColor} />
  </a>
)

export default SecondaryAction
