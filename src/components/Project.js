import React from "react"

import "../styles/Project.css"

//Components
import Navbar from "./Navbar"
import Footer from "./Footer"
import Next from "./Next"
import Head from "./Head"
import Alert from "./Alert"

const Project = ({
  title,
  summary,
  mainImage,
  link,
  time,
  myRole,
  category,
  contentType,
  toolsUsed,
  children,
}) => {
  // let randomNum = Math.floor(Math.random() * 3)
  // let randomNext = ""

  // if (
  //   randomNum === 0 &&
  //   props.data.contentfulProject.title !== "History Hunt"
  // ) {
  //   randomNext = "historyHunt"
  // } else if (
  //   randomNum === 1 &&
  //   props.data.contentfulProject.title !== "MediaBox"
  // ) {
  //   randomNext = "mediaBox"
  // } else if (
  //   randomNum === 2 &&
  //   props.data.contentfulProject.title !== "Verbadisco"
  // ) {
  //   randomNext = "verbadisco"
  // } else {
  //   randomNext = "historyHunt"
  // }

  return (
    <div className="project">
      <Head title={title} />
      <Alert />
      <Navbar />

      <img className="project__mainImage" src={mainImage} alt={title} />

      <div className="project__content">
        <div className="project__intro">
          <div className="project__left">
            <h2>{title}</h2>
            <h4>{summary}</h4>
          </div>
          <div className="project__right">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <button className="project__prototypeButton">See Prototype</button>
            </a>
          </div>
        </div>

        <div className="project__details">
          <div className="project__detail">
            <h5>Timeline</h5>
            <h6>{time}</h6>
          </div>

          <div className="project__detail">
            <h5>Category</h5>
            <h6>{category}</h6>
          </div>

          <div className="project__detail">
            <h5>Type</h5>
            <h6>{contentType}</h6>
          </div>

          <div className="project__detail">
            <h5>My Role</h5>
            <h6>{myRole}</h6>
          </div>

          <div className="project__detail project__last">
            <h5>Tools Used</h5>
            <h6>{toolsUsed}</h6>
          </div>
        </div>

        {children}

        {/* <Next next={randomNext} /> */}
      </div>

      <Footer />
    </div>
  )
}

export default Project
