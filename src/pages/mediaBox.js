import React from "react"
import "../styles/Project.css"

//Components
import Project from "../components/Project"

const MediaBox = () => {
  return (
    <Project
      title="📺 MediaBox"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png"
      time="2 weeks"
      myRole="Sketches, Wireframes, Front-End Development, Back-End Development"
      category="Web Development"
      contentType="Mobile App"
      toolsUsed="Sketch, VS Code"
      summary="An app that gives users recommendations on what to watch based on their movie and tv show preferences"
      link="https://media-box.herokuapp.com/"
    >
      <div className="project__block">
        <h3>Description</h3>
        <p>
          A full-stack web application I created from scratch using MERN stack.
          It is an application that gives users recommendations on what to watch
          based on their movie/tv show preferences.
        </p>
        <p>
          This was my final project during my time as a student at Ironhack,
          where I worked on it from front to back solo in 1.5 weeks.
        </p>
        <h5>Deployed with Heroku.</h5>
      </div>

      <div className="project__block">
        <h3>Main Features</h3>
        <ul>
          <li>Rate movies/tv shows</li>
          <li>Save movies/tv shows to a list to remember to watch later</li>
          <li>
            Search for movies, tv shows or people (actors, directors, etc) and
            see results
          </li>
          <li>
            Receive recommendations on movies/tv shows to watch based on past
            ratings
          </li>
          <li>
            View all rated movies/tv shows, view ratings history, view top
            genres
          </li>
        </ul>
      </div>

      <div className="project__block">
        <h3>Technologies Used</h3>
        <ul>
          <li>HTML, CSS, Javascript ES6</li>
          <li>MongoDB, Express js, React js, Node js</li>
          <li>Axios</li>
          <li>TMBD (The Movie Database)</li>
          <li>LottieFiles</li>
          <li>Chart js</li>
          <li>Cloudinary</li>
          <li>Bulma</li>
        </ul>
      </div>

    </Project>
  )
}

export default MediaBox
