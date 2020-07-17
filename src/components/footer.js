import React from "react"
import { GitHub, Linkedin, Paperclip } from "react-feather"

const Footer = () => (
  <footer>
    <ul>
      <li><a href="https:/github.com/eric-weischedel"><GitHub color="#fff" size={22} /><span>GitHub</span></a></li>
      <li><a href="https:/linkedin.com/in/eric-weischedel"><Linkedin color="#fff" size={22} /><span>LinkedIn</span></a></li>
      <li><a href="mailto:yshuttle@gmail.com"><Paperclip color="#fff" size={22} /><span>Resume</span></a></li>
    </ul>
  </footer>
)
export default Footer
