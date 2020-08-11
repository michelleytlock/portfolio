import React from "react"
import { Link } from "gatsby"

//Images
import homeButton from "../images/Michelle.png"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

const About = () => {
  return (
    <div>
      <nav
        className="navbar is-fixed-top is-white"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
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
              <Link className="navbar-item is-active" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default About
