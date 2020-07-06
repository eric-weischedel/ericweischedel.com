import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

const activeLinkStyles = {
  color: 'blue'
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li><Link to="/work" activeStyle={activeLinkStyles}>Work</Link></li>
        <li><Link to="/about" activeStyle={activeLinkStyles}>About</Link></li>
        <li><Link to="/contact" activeStyle={activeLinkStyles}>Contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
