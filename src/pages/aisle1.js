import React from "react"
import "../styles/Project.css"

//Components
import Project from "../components/Project"

const AisleOne = () => {
  return (
    <Project
      title="🍎 Aisle 1"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597760104/portfolio/iMac_h5hjxi.png"
      time="1 week"
      myRole="Front-End Development"
      category="Web Development"
      contentType="Online Browser Game"
      toolsUsed="VS Code"
      summary="A supermarket shopping game"
      link="https://michelleytlock.github.io/aisle-1/"
    >
      <div className="project__block">
        <h3>Description</h3>
        <p>We had a week to create a game with Canvas and Javascript.</p>
        <p>
          Aisle 1 is a game where the player is at a supermarket and has to
          click on items from the shelves that correspond with their grocery
          list.
        </p>
        <h5>Deployed with GitHub.</h5>
      </div>

      <div className="project__block">
        <h3>Main Features</h3>
        <ul>
          <li>Items randomizing at different rates, different shelves</li>
          <li>
            Player can click on items only when they are above shopping cart
          </li>
          <li>
            Grocery list has new items pushed into it once player clicks on
            something that is already on the list
          </li>
          <li>Time limit</li>
          <li>Local storage high scores</li>
        </ul>
      </div>

      <div className="project__block">
        <h3>Technologies Used</h3>
        <ul>
          <li>HTML, CSS, Javascript ES6</li>
          <li>Photoshop</li>
          <li>Canvas</li>
        </ul>
      </div>
    </Project>
  )
}

export default AisleOne
