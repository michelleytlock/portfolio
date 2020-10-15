import React, { Component } from "react"
import Typed from "typed.js"
import { Link } from "gatsby"

import "../styles/home.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Head from "../components/Head"
import ProjectFeature from "../components/ProjectFeature"
import Alert from "../components/Alert"
import Emoji from "../components/Emoji"

class Index extends Component {
  // componentDidMount() {
  //   const options = {
  //     strings: [
  //       "Nice to meet you!",
  //       "I am a UX/UI designer.",
  //       "I am a visual designer.",
  //       "I am an art director.",
  //       "I am a full-stack developer.",
  //       "I am a visual storyteller.",
  //       "I am a problem solver.",
  //       "I am a team player."
  //     ],
  //     typeSpeed: 90,
  //     smartBackspace: true,
  //     startDelay: 0,
  //     backSpeed: 20,
  //     loop: true,
  //   }

  //   this.typed = new Typed(this.el, options)
  // }

  // componentWillUnmount() {
  //   this.typed.destroy()
  // }

  render() {
    return (
      // <>
      //   <Head title="Home" />
      //   <div className="index">

      //   </div>
      // </>
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
            <h1>
              Hi, I'm Michelle. <Emoji label="wave" symbol="👋" />{" "}
            </h1>
            {/* <span
              strings="Nice to meet you!, I am a UX/UI designer.,I am a visual designer., I am an art director., I am a full-stack developer., I am a visual storyteller., I am a problem solver., I am a team player."
              style={{ whiteSpace: "pre" }}
              ref={el => {
                this.el = el
              }}
            /> */}
            <h2>
              I am a <b>visual storyteller</b> passionate about combining <b>design</b>{" "}
              with <b>technology</b> to <b>create experiences</b>.
            </h2>

            <h2>I am constantly
              trying to improve my craft and to learn as much as I can.</h2>

            <div className="home__contact">
              <Link to="/contact">
                <button className="home__contactButton">Contact Me</button>
              </Link>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="home__projects">
            <h2>Selected Works</h2>
            <ProjectFeature
              url="/historyHunt"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png"
              title="History Hunt"
              description="A mobile app for the urban explorer, embarking on scavenger hunts for historical locations in their cities."
            />
            <ProjectFeature
              url="/verbadisco"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597663107/Frame_1_rxpxen.png"
              title="Verbadisco"
              description="A mobile app for the ultimate Harry Potter fan to conveniently re-learn HP trivia."
            />
            <ProjectFeature
              url="/mediaBox"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png"
              title="MediaBox"
              description="A mobile app that recommends movies and shows to based on their preferences."
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
}

export default Index
