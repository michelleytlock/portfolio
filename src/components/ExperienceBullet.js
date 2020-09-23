import React from "react"
import '../styles/ExperiencePosition.css'
import StarIcon from "@material-ui/icons/Star";

function ExperienceBullet({ content }) {
  return (
    <div className="experiencePosition__bullet">
      <StarIcon style={{ color: "rebeccapurple", marginTop: "5px", marginRight: "10px", fontSize: 16 }} />
      <p>{content}</p>
    </div>
  )
}

export default ExperienceBullet
