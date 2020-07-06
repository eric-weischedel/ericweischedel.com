import React from "react"
import "../styles/footer.css"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Eric Weischedel<br />
    <ul>
      <li><a href="https:/github.com/eric-weischedel">GitHub</a></li>
      <li><a href="https:/linkedin.com/in/eric-weischedel">LinkedIn</a></li>
    </ul>
  </footer>
)
export default Footer
