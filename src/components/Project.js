import React from "react"
import { Link } from "gatsby"
import "../styles/Project.css"

function Project({ url, img, title, tag }) {
  return (
    <Link to={url} target="_blank">
      <div className="project">
        <img className="project__image" src={img} alt={title} />
        <div className="project__overlay">
          <div className="project__text">
            <h3>{title}</h3>
            <h5>{tag}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project
