import React from "react"
import "../styles/Experience.css"
import "../styles/ExperiencePosition.css"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import ExperienceBullet from "./ExperienceBullet"
import ExperiencePosition from "./ExperiencePosition"

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience__professional">
        <h3>Professional Experience</h3>
        <div className="experiencePosition">
          <h5>
            <b>Topix Media Lab</b>
            <LocationOnIcon
              style={{ marginLeft: "5px", marginRight: "5px", fontSize: 16 }}
            />
            New York, NY
          </h5>
          <h6>
            <b>Assistant Art Director</b> March ’18 - May ’19
          </h6>
          <ExperienceBullet content="Planned and created company's first book designs (including covers and interiors), leading to a slate of adult and children's books every season, every year" />
          <h6>
            <b>Senior Graphic Designer</b> October ’16 - March ’18
          </h6>
          <ExperienceBullet content="Improved company's book and magazine sales by researching cover trends in collaboration with business department" />
          <ExperienceBullet content="Enhanced storytelling in publications with designs that contributed to content" />
          <h6>
            <b>Graphic Designer</b> June ’15 - October ’16
          </h6>
          <ExperienceBullet content="Led the design of several magazines simultaneously by creating templates to guide overall typography, color and style" />
        </div>

        <ExperiencePosition
          name="Ibis Yearbook"
          location="Coral Gables, FL"
          position="Design Director"
          date="August ’13 - May ’15"
          details={[
            "Art directed and led design of two 480-page yearbooks, resulting in awards for the university",
          ]}
        />
      </div>

      <div className="experience__education">
        <h3>Educational Experience</h3>
        <ExperiencePosition
          name="Ironhack"
          location="Remote"
          position="Full-Stack Web Developer Bootcamp"
          date="July ’20"
          details={[
            "9-week full-time web development bootcamp",
            "Designed and coded full-stack Javascript web applications",
            "Learned how to think like a programmer and how to deconstruct complex problems",
          ]}
        />

        <ExperiencePosition
          name="CareerFoundry"
          location="Remote"
          position="UX/UI Design"
          date="January ’20"
          details={[
            "Cultivated user-centered problem-solving design abilities and learned how to makes products and services more accessible and intuitive",
            "Focused on research, information architecture, wireframing, prototyping and usability testing",
          ]}
        />

        <ExperiencePosition
          name="University of Miami"
          location="Coral Gables, FL"
          position="Bachelor of Science in Communications and Graphic Design"
          date="2011 - 2015"
          details={[
            "Learned design principles and fundamentals of visual graphic design",
          ]}
        />
      </div>
    </div>
  )
}
