import React from "react"
import '../styles/ExperiencePosition.css'
import LocationOnIcon from "@material-ui/icons/LocationOn"
import ExperienceBullet from "./ExperienceBullet"

function ExperiencePosition({ name, location, position, date, details }) {
  return (
    <div className="experiencePosition">
      <h5>
        <b>{name}</b>
        <LocationOnIcon style={{ marginLeft: "5px", marginRight: "5px", fontSize: 16 }} />
        {location}
      </h5>
      <h6>
        <b>{position}</b> {date}
      </h6>
      {details.map(detail => {
        return <ExperienceBullet content={detail} />
      })}
    </div>
  )
}

export default ExperiencePosition
