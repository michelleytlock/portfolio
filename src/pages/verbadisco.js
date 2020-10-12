import React from "react"
import "../styles/Project.css"
import "../styles/verbadisco.css"

//Components
import Project from "../components/Project"

const Verbadisco = () => {
  return (
    <Project
      title="🧙‍♀️ Verbadisco"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597663107/Frame_1_rxpxen.png"
      time="2 months"
      myRole="User Research, Information Architecture, Wireframes, Prototyping, Usability Testing"
      category="UX/UI Design"
      contentType="Mobile App"
      toolsUsed="Pen and paper, Figma"
      summary="A mobile application for the ultimate Harry Potter fan"
      link="https://www.figma.com/proto/dIgn5GyApyD9Ho1CoCM6WC/Verbadisco-Hi-Fi?node-id=2%3A0&scaling=min-zoom"
    >
      <div className="project__block">
        <h3>Context</h3>
        <p>
          When I lived in New York, I was going to a lot of Harry Potter trivia
          pub nights. Unfortunately I hadn't read the books in a long time so it
          was difficult answering all the questions! So I thought, "how can I
          re-learn all the details that I've forgotten, without rereading every
          single book?"
        </p>
        <p>
          Verbadisco is a mobile vocabulary learning app for Harry Potter
          fans. Users can learn vocabulary and trivia with digital flashcards
          and take quizzes. Users can also earn points for their Houses as they
          progress through levels while competing with their friends.
        </p>
        <h5>
          This app was created as a student project as part of CareerFoundry's
          UX Fundamentals course. This project uses content from the Harry
          Potter world, which is trademarked by J. K. Rowling. All content was
          created and is owned by J.K. Rowling and I do not claim ownership any
          of it or the world of Harry Potter.
        </h5>
      </div>

      <div className="project__row">
        <div className="project__block">
          <h3>Project Brief</h3>
          <p>Empower people to learn new vocabulary.</p>
        </div>

        <div className="project__block">
          <h3>Problem Statement</h3>
          <p>
            Users need to learn vocabulary and trivia from the Harry Potter
            universe in an organized, efficient manner in order to win trivia
            nights.
          </p>
        </div>
      </div>

      <div className="project__block">
        <h3>Competitive Analysis</h3>
        <p>
          First, I looked at the pros/cons of 3 other vocabulary learning apps
          that are on the market. I examined:
        </p>
        <ul>
          <li>what made these apps great</li>
          <li>how they met the goals of users</li>
          <li>thought about how I would make these apps better</li>
        </ul>
        <p>
          I found that all of these apps are intuitive and easy to use while
          accomplishing their goal of being a useful tool for users who want to
          learn vocabulary.
        </p>
        <p>
          Some problems I found were that Quizlet has no clear onboarding
          process and Word of the Day has no testing so I wasn't sure how users
          retained the information.
        </p>
        <img src="" alt="Competitor logos" />
      </div>

      <div className="project__block">
        <h3>User Research & Analysis</h3>
        <p>
          I conducted user interviews to better understand how people approach
          learning about new subjects and new vocabulary. Using insights from
          these research methods, I was able to pinpoint common trends and
          themes.
        </p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>User Personas</h3>
        <p>
          Focusing on user behaviors, needs and challenges and user research
          commonalities, I created a user persona.
        </p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>User Flows</h3>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Wireframing</h3>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Usability Testing</h3>
        <p>
          I tested participants with a low-fidelity prototype. The main goals
          were to evaluate how well users could register, review a category of
          words, do a test, and view their profile.
        </p>
        <p>
          The biggest problems I found were that users were confused about how
          to move on to the next word in the lesson deck and they had trouble
          recognizing the icons in the navigation.
        </p>
        <p>
          In the mid and high fidelity prototypes, I fixed these by adding
          buttons underneath each word and used clearer iconography in the
          navigation.
        </p>
      </div>

      <div className="project__block">
        <h3>Retrospective</h3>
        <h4>Challenges</h4>
        <ul>
          <li>
            I tested participants with a low-fidelity prototype. The main goals
            wehe mid and high fidelity prototypes, I fixed these by adding
            buttons underneath each word and used clearer iconography in the
            navigation.
          </li>
        </ul>
        <h4>Improvements</h4>
        <ul>
          <li>
            I would go through another round of usability tests using the
            high-fidelity prototype to see what users thought of functionality
            and experience.
          </li>
          <li>
            Then I would do another iteration of the app, where I would also
            spend more time on interactivity and other features.
          </li>
        </ul>
        <h4>What's Next</h4>
        <ul>
          <li>
            Conduct another round of usability testing with the new prototype.
          </li>
        </ul>
      </div>
    </Project>
  )
}

export default Verbadisco
