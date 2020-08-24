import React from "react"

import Icon from "@mdi/react"
import { mdiStar } from "@mdi/js"
import { mdiMapMarker } from "@mdi/js"

export default function Experience() {

  let iconColor = "#c175f0"
  return (
    <div className="container">
      <div className="columns is-variable is-8">
        <div className="column">
          <h3 className="h3">Professional Experience</h3>
          <div className="position">
            <h5 className="h5">
              <b>Topix Media Lab</b>{" "}
              <span>
                <Icon path={mdiMapMarker} color={iconColor} size={0.85} />
              </span>{" "}
              New York, NY
            </h5>
            <div className="position-bullet">
              <h6 className="h6">
                <b>Assistant Art Director</b> March '18 - May '19
              </h6>
              <p className="p">
                Helped plan and create company's first book designs (including
                covers and interiors), leading to a slate of adult and
                children's books every season, every year
              </p>
            </div>
            <div className="position-bullet">
              <h6 className="h6">
                <b>Senior Graphic Designer</b> October '16 - March '18
              </h6>
              <p className="p">
                Improved company's book and magazine sales by researching cover
                trends in collaboration with business department, resulting in
                more profitable products
              </p>
            </div>
            <div className="position-bullet">
              <h6 className="h6">
                <b>Graphic Designer</b> June '15 - October '16
              </h6>
              <p className="p">
                Led the design of several magazine projects simultaneously by
                creating templates to guide overall typography, color and style,
                assisting the Creative Director
              </p>
            </div>
          </div>
          <div className="position">
            <h5 className="h5">
              <b>Ibis Yearbook</b>{" "}
              <span>
                <Icon path={mdiMapMarker} color={iconColor} size={0.85} />
              </span>{" "}
              Coral Gables, FL
            </h5>
            <div className="position-bullet">
              <h6 className="h6">
                <b>Design Director</b> August '13 - May '15
              </h6>
              <p className="p">
                Led the design of two 480-page yearbooks, resulting in awards
                for the university
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="h3">Education</h3>
          <div className="position">
            <h5 className="h5">
              <b>Ironhack</b>{" "}
              <span>
                <Icon path={mdiMapMarker} color={iconColor} size={0.85} />
              </span>{" "}
              Remote
            </h5>
            <h6 className="h6">
              <b>Full-Stack Web Developer Bootcamp</b> July '20
            </h6>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                This was a 9-week full-time web development bootcamp
              </p>
            </div>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                I designed and built full-stack Javascript web applications
              </p>
            </div>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                I learned the fundamentals of programming and best practices, as
                well as how to think like a programmer and how to deconstruct
                complex problems
              </p>
            </div>
          </div>

          <div className="position">
            <h5 className="h5">
              <b>CareerFoundry</b>{" "}
              <span>
                <Icon path={mdiMapMarker} color={iconColor} size={0.85} />
              </span>{" "}
              Remote
            </h5>
            <h6 className="h6">
              <b>UX/UI Design</b> January '20
            </h6>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                I cultivated my user-centered problem-solving design abilities
                and learned how to makes products and services more accessible
                and intuitive
              </p>
            </div>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                This intensive, project-based course focused on research,
                information architecture, wireframing, prototyping and usability
                testing
              </p>
            </div>
          </div>

          <div className="position">
            <h5 className="h5">
              <b>University of Miami</b>{" "}
              <span>
                <Icon path={mdiMapMarker} color={iconColor}size={0.85} />
              </span>{" "}
              Coral Gables, FL
            </h5>
            <h6 className="h6">
              <b>Bachelor of Science in Communications and Graphic Design</b>{" "}
              2011 - 2015
            </h6>
            <div className="bullet-item">
              <span>
                <Icon
                  path={mdiStar}
                  color={iconColor}
                  size={0.5}
                  className="bullet-icon"
                />
              </span>
              <p className="p">
                Learned design principles and fundamentals of visual graphic
                design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
