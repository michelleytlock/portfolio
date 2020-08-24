import React from "react"
import { Link } from "gatsby"

export default function Next(props) {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="project">
          <h2 className="h2" style={{ marginBottom: "20px" }}>
            Next Up
          </h2>
          {props.next === "historyHunt" ? (
            <Link to="/history-hunt">
              <div className="project-img">
                <img
                  className="home-project-img"
                  src="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png"
                  alt="MediaBox Project"
                />
              </div>
              <h3 className="black-text h3">History Hunt</h3>
              <h5 className="black-text h5">
                A mobile application for the urban explorer, embarking on
                scavenger hunts for historical locations in their cities.
              </h5>
            </Link>
          ) : props.next === "mediaBox" ? (
            <Link to="/mediabox">
              <img
                className="home-project-img"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png"
                alt="MediaBox Project"
              />
              <h3 className="black-text h3">MediaBox</h3>
              <h5 className="black-text h5">
                A full-stack web application I created from scratch using MERN
                stack. It is an application that gives users recommendations on
                what to watch based on their movie/tv show preferences.
              </h5>
            </Link>
          ) : props.next === "verbadisco" ? (
            <Link to="/verbadisco">
              <img
                className="home-project-img"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597663107/Frame_1_rxpxen.png"
                alt="MediaBox Project"
              />
              <h3 className="black-text h3">Verbadisco</h3>
              <h5 className="black-text h5">
                A mobile application for the ultimate Harry Potter fan.
              </h5>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}
