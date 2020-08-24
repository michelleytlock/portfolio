import React from "react"
import { Link } from "gatsby"
import Icon from "@mdi/react"
import { mdiLinkedin } from "@mdi/js"
import { mdiGithub } from "@mdi/js"

import homeButton from "../images/Michelle.png"

export default function Navbar(props) {
  const [isActive, setisActive] = React.useState(false)

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
          <div
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenuHeroA"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div
          id="navbarMenuHeroA"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link
              className="navbar-item"
              to="/home"
              activeClassName="is-active"
            >
              Home
            </Link>
            <Link
              className="navbar-item"
              to="/projects"
              activeClassName="is-active"
            >
              Projects
            </Link>
            <Link
              className="navbar-item"
              to="/about"
              activeClassName="is-active"
            >
              About
            </Link>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/michelleytlock/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon path={mdiLinkedin} color={props.color} size={1} />
            </a>
            <a
              className="navbar-item"
              href="https://github.com/michelleytlock"
              target="_blank"
              rel="noreferrer"
            >
              <Icon path={mdiGithub} color={props.color} size={1} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
