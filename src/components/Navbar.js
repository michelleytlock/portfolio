import React from "react"
import { Link } from "gatsby"

import homeButton from "../images/Michelle.png"

export default function Navbar() {

  return (
    <nav
      className="navbar is-fixed-top is-dark is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/home">
            <img
              className="navbar-brand-image"
              src={homeButton}
              alt="Home Button"
            />
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/home" activeClassName="is-active">
              Home
            </Link>
            <Link className="navbar-item" to="/about" activeClassName="is-active">
              About
            </Link>
            <a className="navbar-item" href="https://www.linkedin.com/in/michelleytlock/">LinkedIn</a>
            <span className="nav-indicator"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
