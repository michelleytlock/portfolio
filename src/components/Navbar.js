import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import homeButton from "../images/Michelle.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <img className="navbar__home"
          src={homeButton}
          alt="Home Button"
        />
      </Link>
      <div className="navbar__menu">
        <Link className="navbar__menuItem" to="/home" activeClassName="is-active">
          Home
        </Link>
        <Link
          className="navbar__menuItem"
          to="/projects"
          activeClassName="is-active"
        >
          Projects
        </Link>
        <Link className="navbar__menuItem" to="/about" activeClassName="is-active">
          About
        </Link>
        <Link className="navbar__menuItem" to="/contact" activeClassName="is-active">
          Contact
        </Link>
        <a
          className="navbar__menuItem"
          href="https://www.linkedin.com/in/michelleytlock/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="navbar__menuItem"
          href="https://github.com/michelleytlock"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}
