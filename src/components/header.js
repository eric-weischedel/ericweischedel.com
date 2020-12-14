import { Link } from "gatsby"
import React from "react"

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : {};
};

const Header = ({ siteTitle }) => (
  <header>
    <div>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
        <ul>
          <li><Link to="/work" getProps={isActive}>Work</Link></li>
          <li><Link to="/about" getProps={isActive}>About</Link></li>
          <li><Link to="/contact" getProps={isActive}>Contact</Link></li>
        </ul>
    </div>
  </header>
)

export default Header
