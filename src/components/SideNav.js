import React from "react"
import { Link } from "gatsby"
import "../styles/sideNav.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

export default function SideNav() {
  return (
    <div className="sideNav">
      <Link to="/projects">
        <ArrowBackIcon />
        <h6>Back to All Projects</h6>
      </Link>
    </div>
  )
}
