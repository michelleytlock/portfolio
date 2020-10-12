import React from "react"
import { Link } from "gatsby"
import "../styles/home.css"
import ClipboardJS from "clipboard"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Head from "../components/Head"
import ProjectFeature from "../components/ProjectFeature"
import Alert from "../components/Alert"

const Home = () => {
  // const clip = new ClipboardJS(".home__contactButton")

  // clip.on("success", e => {
  //   console.log("success!", e)
  //   // document.querySelectorAll(".home__contactButtonAlert").innerHTML =
  //   //   "My email has been copied to your clipboard!"
  //   e.clearSelection()
  // })

  // clip.on("error", e => {
  //   // console.log('error!', e)
  //   // document.querySelectorAll(".home__contactButtonAlert").innerHTML =
  //   //   "That didn't work, sorry! :("
  //   e.clearSelection()
  // })

  // const handleCopy = () => {

  // }

  return (
    <div className="home">
      <Head title="✨ Home" />
      <Alert />
      <Navbar />

      <div className="home__content">
        {/* INTRO */}
        <div
          className="home__intro"
          data-sal-duration="800"
          data-sal="flip-down"
          data-sal-delay="100"
          data-sal-easing="ease-out-bounce"
        >
          <h1>Michelle Lock </h1>
          <h4>
            A UX designer and full-stack developer passionate about using design
            and technology to transform our lives and solve problems.
          </h4>
          <div className="home__contact">
            <button
              className="home__contactButton"
              data-clipboard-text="michelleytlock@gmail.com"
            >
              Contact Me
            </button>
            <p className="home__contactButtonAlert"> </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="home__projects">
          <h2>Selected Works</h2>
          <ProjectFeature
            url="/historyHunt"
            img="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png"
            title="History Hunt"
            description="A mobile application for the urban explorer, embarking on scavenger hunts for historical locations in their cities."
          />
          <ProjectFeature
            url="/verbadisco"
            img="https://res.cloudinary.com/michelleytlock/image/upload/v1597663107/Frame_1_rxpxen.png"
            title="Verbadisco"
            description="A mobile application for the ultimate Harry Potter fan to easily re-learn HP trivia."
          />
          <ProjectFeature
            url="/mediabox"
            img="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png"
            title="MediaBox"
            description="An application that gives users recommendations on what to watch based on their movie/tv show preferences."
          />
          <Link className="home__projectsButton" to="/projects">
            View All Projects
          </Link>
        </div>

        {/* EXPERIENCE */}
        <div
          data-sal-duration="800"
          data-sal="fade"
          data-sal-easing="ease-out-bounce"
        >
          <Experience />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
