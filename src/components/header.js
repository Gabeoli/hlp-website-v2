import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './Nav'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
     <Nav />
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
