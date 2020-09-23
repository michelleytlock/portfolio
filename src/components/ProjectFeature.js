import React from "react"
import { Link } from "gatsby"
import "../styles/ProjectFeature.css"

function ProjectFeature({ url, img, title, description }) {
  return (
    <div
      className="projectFeature"
      data-sal-duration="800"
      data-sal="fade"
      data-sal-easing="ease-out-bounce"
    >
      <Link to={url}>
        <img className="projectFeature__image" src={img} alt={title} />
      </Link>
      <div className="projectFeature__text">
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  )
}

export default ProjectFeature
