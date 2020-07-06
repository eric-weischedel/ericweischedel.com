import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

const activeLinkStyles = {
  color: 'blue',
  fontFamily: 'Roboto-Black'
}

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <ul>
      <li><Link to="/work" activeStyle={activeLinkStyles}>Work</Link></li>
      <li><Link to="/about" activeStyle={activeLinkStyles}>About</Link></li>
      <li><Link to="/contact" activeStyle={activeLinkStyles}>Contact</Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
