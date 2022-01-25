import React from "react"
import { GitHub, Linkedin, Mail } from "react-feather"

const Footer = () => (
  <footer>
    <ul>
      <li><a href="https://github.com/eric-weischedel" target="_blank" rel="noreferrer"><GitHub color="#fff" size={22} strokeWidth={2} /><span>GitHub</span></a></li>
      <li><a href="https://linkedin.com/in/eric-weischedel" target="_blank" rel="noreferrer"><Linkedin color="#fff" size={22} strokeWidth={2} /><span>LinkedIn</span></a></li>
      <li><a href="mailto:yshuttle@gmail.com"><Mail color="#fff" size={22} strokeWidth={2} /><span>Email</span></a></li>
    </ul>
    <p className="paragraph">
      © Eric Weischedel {(new Date()).getFullYear()}.
    </p>
  </footer>
)
export default Footer
