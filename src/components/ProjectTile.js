import React from "react"
import { Link } from "gatsby"
import "../styles/ProjectTile.css"

function Project({ url, img, title, tag }) {
  return (
    <Link to={url} target="_blank">
      <div className="projectTile">
        <img className="projectTile__image" src={img} alt={title} />
        <div className="projectTile__overlay">
          <div className="projectTile__text">
            <h3>{title}</h3>
            <h5>{tag}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project
