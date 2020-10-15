import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"

import homeButton from "../images/Michelle.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar__home"
          src={homeButton}
          alt="Home Button"
        />
      </Link>
      <div className="navbar__menu">
        <Link className="navbar__menuItem" to="/" activeClassName="navbar__menuItemActive">
          Home
        </Link>
        <Link
          className="navbar__menuItem"
          to="/projects"
          activeClassName="navbar__menuItemActive"
        >
          Projects
        </Link>
        <Link className="navbar__menuItem" to="/about" activeClassName="navbar__menuItemActive">
          About
        </Link>
        <Link className="navbar__menuItem" to="/contact" activeClassName="navbar__menuItemActive">
          Contact
        </Link>
      </div>
    </div>
  )
}
