import React from "react"
import "../styles/Project.css"
import "../styles/historyHunt.css"

//Components
import Project from "../components/Project"

const HistoryHunt = () => {
  return (
    <Project
      title="🕵️‍♀️ History Hunt"
      mainImage="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png"
      time="6 months"
      myRole="User Research, Personas, Journey Maps, Information Architecture, Wireframes, Prototyping, Usability Testing"
      category="UX/UI Design"
      contentType="Mobile App"
      toolsUsed="Pen and paper, Adobe XD, Balsamiq, Google Forms, Adobe Photoshop"
      summary="A mobile application for the urban explorer, embarking on scavenger hunts for historical locations in their cities."
      link="https://xd.adobe.com/view/7e1d84ce-1ed1-4995-614a-477f13069f03-082c/"
    >
      <div className="project__row">
        <div className="project__block">
          <h3>Context</h3>
          <p>
            Have you ever walked around a city and wondered something like, "I
            wonder what it was like to walk on this street 50 years ago."
            Or heard things like, "did you know there's a secret train station
            underneath the Waldorf Astoria?"
          </p>
          <p>
            History Hunt is a mobile scavenger hunt app for curious, nostalgic
            adventurers. Users can learn about their city's history and
            explore what it used to look like through fun, interactive,
            augmented reality experiences. This is an educational gaming app
            that can be tailored to each user while involving friends through
            competition and social sharing.
          </p>
          <h5>
            This project was created as part of CareerFoundry's UX Immersion
            course.
          </h5>
        </div>
        <div className="project__block">
          <img
            src="https://images.ctfassets.net/diknewcrlewn/2qqPXLxxs48rdFwvzj7pDk/2905c327a1eb5a27008fcbaa8428a5f6/american-flag-architecture-blur-bright-414530-sized.png"
            alt="History Hunt mocked up on a phone, showing AR functionality in Grand Central, New York"
          />
        </div>
      </div>

      <div className="project__row">
        <div className="project__block">
          <h3>Project Brief</h3>
          <p>
            Enable players to enjoy social scavenger hunts for real objects and
            locations in their own cities.
          </p>
        </div>

        <div className="project__block">
          <h3>Problem Statement</h3>
          <p>
            Users need a fun way to learn about their cities through adventure
            and exploration because they want to be knowledgable about history
            and share with their friends.
          </p>
        </div>
      </div>

      <div className="project__block">
        <h3>Competitive Analysis</h3>
        <p>
          First, I identified and researched other scavenger hunt apps to look
          at their strengths, weaknesses, opportunities and threats. This is an
          important step to me because I can get an idea of what user needs need
          to be fulfilled or what user problems are being solved (or not
          solved). I also looked into apps using augmented reality technology.
        </p>
        <p>
          Key findings were that all of these apps lacked a purpose beyond just
          endlessly searching for random objects. They could also just be
          replaced with a free, in-person walking tour guide.
        </p>
        <p>
          Pokemon Go showed me that AR features could be integrated with
          navigation to enhance the user experience, bringing the screen's
          content even closer to the user's reality.
        </p>
        <img
          src="https://images.ctfassets.net/diknewcrlewn/78amwhDMq8zfvUV3kFWEMB/f720570f5e9a950e3f0edbcc6751fa4f/Screen_Shot_2020-08-25_at_9.51.34_PM.png"
          alt="Competitor logos"
        />
      </div>

      <div className="project__block">
        <h3>User Research & Analysis</h3>
        <p>
          I conducted user surveys and user interviews with the main goal of
          looking at general attitudes towards scavenger hunts, geolocation,
          augmented reality and learning history. Using insights from these
          research methods, I was able to pinpoint common trends and themes.
        </p>
        <img src="" alt="Research findings" />
      </div>

      <div className="project__block">
        <h3>User Personas</h3>
        <p>
          Using the trends and themes informed by research, I created user
          personas. Focusing on user motivations, behavior and challenges, I
          created 3 design personas:
        </p>
        <div className="project__personas">
          <div>
            <h5>The Friend Who's Always Out and About (Adventurer)</h5>
            <img src="" alt="" />
          </div>
          <div>
            <h5>The Friend You Should Always Bring to Trivia (Intellectual)</h5>
            <img src="" alt="" />
          </div>
          <div>
            <h5>
              The Friend Who's Always First with Anything New (Trendsetter)
            </h5>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="project__block">
        <h3>User Journey Maps</h3>
        <p>
          The next step in the user-centered design process to gain a deeper
          understanding of users is creating user journey maps to visualize what
          processes users go through in order to accomplish their goals.
        </p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>User Flows</h3>
        <p>
          I mapped out task flows created in the context of the personas. It is
          important to know the types of actions users will take and why. By
          having an entry point, success criteria, and a process flow, I can
          determine what users need to do in order to complete their goal.
        </p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Site Map</h3>
        <p>
          To outline the hierarchy of the app, I created a preliminary site map.
          I decided to do a card sort with participants to see how users would
          organize the information. Based on patterns I found in the results,
          this helped me evaluate my site map and gave me ideas on how to better
          the architecture of the app.
        </p>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Sketches & Wireframes</h3>
        <p>
          There's a couple reasons why I like to quickly sketch and annotate
          what I think the design should look like.
        </p>
        <ol>
          <li>
            I'm less likely to get stuck on something, being able to sketch
            multiple things out in the matter of minutes.
          </li>
          <li>
            Even fleeting ideas won't be forgotten, serving as good reference
            later.
          </li>
          <li>
            Sketching encourages more creativity, because it doesn't allow for
            time to get bogged down by details.
          </li>
        </ol>
        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Prototyping</h3>
        <p>
          If needed, I will hand sketch more low-fidelity wireframes to figure
          out functionality. then move on to mid-fidelity digital wireframes.
          These wireframes can be used to create a very basic prototype, but
          before moving to usability testing its best to have high-fidelity
          wireframes.
        </p>

        <img src="" alt="" />
      </div>

      <div className="project__block">
        <h3>Usability Tests</h3>
        <p>
          I did usability tests with a mid-fidelity, black and white prototype
          on an iPhone XS. The objectives were:
        </p>
        <ul>
          <li>see if participants understood what the app is</li>
          <li>the value it provides</li>
          <li>the value it provides</li>
        </ul>
        <p>
          These tests showed me many problems, including needing more
          onboarding, confusion on how to find out the progress, difficulty
          customizing scavenger hunts and uncertainty about how to
          access augmented reality.
        </p>
        <p>
          Based on the results, I made changes to the prototype before creating
          a high-fidelity color version. This usability testing was an important
          step for me because I discovered a lot of issues users had that I did
          not see that were important to fix.{" "}
        </p>
        <p>
          During these tests, participants expressed positive sentiments of
          wanting to use the app for real once they understood what the app was.
        </p>
      </div>

      <div className="project__block">
        <h3>Retrospective</h3>
        <h4>Challenges</h4>
        <ul>
          <li>
            This was the first project where I used Adobe XD. I need to become
            more familiar with the Adobe XD interface and its tools in order to
            more efficiently design with the software.
          </li>
          <li>
            I worked independently on this project and sometimes was too focused
            on details or spent a lot of time on little things. I need to become
            better at time management when I work solo.
          </li>
        </ul>
        <h4>Improvements</h4>
        <ul>
          <li>
            I would go through another round of usability tests using a
            high-fidelity prototype to see what users thought of functionality
            and experience.
          </li>
          <li>
            Then I would do another iteration of the app, where I would also
            spend more time on interactivity.
          </li>
        </ul>

        <h4>What's Next</h4>
        <ul>
          <li>
            I would like to research UI best practices and fine-tune the UI of
            this project.
          </li>
          <li>Add and finish more features in the prototype.</li>
        </ul>
      </div>

      <div className="project__block">
        <h3>UI Kit</h3>
        <img src="" alt="" />
      </div>
    </Project>
  )
}

export default HistoryHunt
