import React from "react"
import "../styles/Project.css"

//Components
import Project from "../components/Project"

const Gigzilla = () => {
  return (
    <Project
      title="🎵 Gigzilla"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597762172/portfolio/Gigzilla-mockup_xp60og.png"
      time="1 week"
      myRole="Sketches, Wireframes, Front-End Development, Back-End Development"
      category="Web Development"
      contentType="Responsive Web App"
      toolsUsed="Sketch, VS Code"
      summary="A booking platform for musicians to book gigs and venues to book musicians"
      link="https://gig-zilla.herokuapp.com/"
    >
      <div className="project__block">
        <h3>Description</h3>
        <p>
          We had around a week to build a full-stack responsive web app
          platform.
        </p>
        <p>
          Our project was for two types of users:{" "}
          <ol>
            <li>musicians to build tours and contact venues.</li>
            <li>venues to book musicians.</li>
          </ol>
          This was our first full-stack application we built, using a Node js
          server running with Express, MongoDB database, and dynamic rendering
          with Handlebars js.
        </p>
        <h5>Deployed with Heroku.</h5>
      </div>

      <div className="project__block">
        <h3>Main Features</h3>
        <h4>Musician users:</h4>
        <ul>
          <li>Build tours that go to many cities</li>
          <li>See venues available in each city</li>
          <li>Contact venues and confirm gigs</li>
        </ul>
        <h4>Venue users:</h4>
        <ul>
          <li>See tours that have planned tour stops in city</li>
          <li>Contact tours</li>
          <li>Book tours for venue</li>
        </ul>
      </div>

      <div className="project__block">
        <h3>Technologies Used</h3>
        <ul>
          <li>HTML, CSS, Javascript ES6</li>
          <li>Node js</li>
          <li>Express js</li>
          <li>MongoDB</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </Project>
  )
}

export default Gigzilla
