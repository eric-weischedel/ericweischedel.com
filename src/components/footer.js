import React from "react"
import "../styles/footer.css"
import { GitHub, Linkedin, Paperclip } from "react-feather"


const Footer = () => (
  <footer>
    <ul>
      <li><a href="https:/github.com/eric-weischedel"><GitHub color="#000" size={22} /><span>GitHub</span></a></li>
      <li><a href="https:/linkedin.com/in/eric-weischedel"><Linkedin color="#000" size={22} /><span>LinkedIn</span></a></li>
      <li><a href="mailto:yshuttle@gmail.com"><Paperclip color="#000" size={22} /><span>Resume</span></a></li>
    </ul>
    <p>Eric Weischedel</p>
    <p>yshuttle@gmail.com</p>
    <p>+1 717-380-2757</p>
  </footer>
)
export default Footer
