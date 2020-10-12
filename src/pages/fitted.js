import React from "react"
import "../styles/Project.css"

//Components
import Project from "../components/Project"

const Fitted = () => {
  return (
    <Project
      title="🏋️‍♀️ Fitted"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597730261/Multi-Devices-Mockup-Scene-Vol01_fyfdii.png"
      time="2 months"
      myRole="Information Architecture, Sketches, Wireframes, Prototyping"
      category="UI Design"
      contentType="Responsive Web App"
      toolsUsed="Pen and paper, Balsamiq, Adobe XD"
      summary="A responsive web app with fitness routines for busy people."
      link="https://xd.adobe.com/view/2485f9d8-386f-4ca3-4a28-54e9171a9213-52b4/"
    >
      <div className="project__block">
        <h3>Context</h3>
        <p>
          It's always difficult getting into new routines. Fitness and exercise
          can be a particularly challenging hurdle to overcome. Popular excuses
          are: not having enough time, busy with work, not being able to keep up
          physically, or this is boring.
        </p>
        <p>
          Fitted is something any user can pick up, find an exercise they love,
          and fit into their daily schedule. This web app encourages users to
          pick exercises of any level, fitting in as little as a 5-minute
          routine into their schedules. It is welcoming, motivating, and will
          hold users accountable to their own fitness goals.
        </p>
        <h5>
          This project was created as part of the UI specialization in
          CareerFoundry's UX Immersion course.
        </h5>
      </div>

      <div className="project__row">
        <div className="project__block">
          <h3>Project Brief</h3>
          <p>
            Motivate people into an exercise routine that suits their level,
            schedule, and interests.
          </p>
        </div>

        <div className="project__block">
          <h3>Problem Statement</h3>
          <p>
            Users need a tool that teaches them enjoyable exercise routines
            integrated into their busy schedules because they want to be in
            shape and lead healthier lifestyles.
          </p>
        </div>
      </div>

      <div className="project__block">
        <h3>User Flows</h3>
        <p>
          Based on a user persona, user stories, and some design requirements, I
          focused on features the app would have. By identifying the key
          features of the app, I was able to create user flows that satisfied
          user needs and goals.
        </p>
      </div>

      <div className="project__block">
           <h3>Sketches & Wireframing</h3>
           <p>Next, I sketched each screen in the user flow to get a sense of what it could look like and make sure all the necessary features were there. After finalizing the sketches, I started working on a low-fidelity digital wireframes.</p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Moodboards</h3>
        <p>
        Two moodboards were created to explore different visual styles that could possibly work for the branding an app of Fitted. One design requirement in the brief was that the colors orange and black be used.
        </p>
        <img />
        <p>
        The moodboard on the left was chosen because it conveys feelings of being at ease, informative, fun. It is more friendly and welcoming, making it more motivating for people who are new or returning to fitness. This board is inspired by the sun. Incorporating oranges, yellows, and white, it evokes brightness and energy. Black will still be used, but for text only.
        </p>
        </div>
        
        <div className="project__block">
        <h3>Style Guide</h3>
        <p>
        To ensure consistency across all breakpoints, all visual and UI elements must be documented in a style guide.
        </p>
        <img />
        </div>
        
        <div className="project__block">
        <h3>Final Design</h3>
        <img />
      </div>

      <div className="project__block">
        <h3>Retrospective</h3>
        <h4>Challenges</h4>
        <ul>
          <li>
            tk
          </li>
        </ul>
        <h4>Improvements</h4>
        <ul>
          <li>
            tk
          </li>
        </ul>
        <h4>What's Next</h4>
        <ul>
          <li>
            tk
          </li>
        </ul>
      </div>
    </Project>
  )
}

export default Fitted
