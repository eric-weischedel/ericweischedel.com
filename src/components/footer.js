import React from "react"
import { GitHub, Linkedin, Paperclip } from "react-feather"

const Footer = () => (
  <footer>
    <ul>
      <li><a href="https:/github.com/eric-weischedel"><GitHub color="#fff" size={22} strokeWidth={2} /><span>GitHub</span></a></li>
      <li><a href="https:/linkedin.com/in/eric-weischedel"><Linkedin color="#fff" size={22} strokeWidth={2} /><span>LinkedIn</span></a></li>
      <li><a href="mailto:yshuttle@gmail.com"><Paperclip color="#fff" size={22} strokeWidth={2} /><span>Resume</span></a></li>
    </ul>
    <p className="paragraph">
      Site developed by Eric Weischedel using GatsbyJS.
      <br />
      You can view the source code <a href="https://github.com/eric-weischedel/ericweischedel.com">here</a>.
      <br />
      © Eric Weischedel {(new Date()).getFullYear()}.
    </p>
  </footer>
)
export default Footer
