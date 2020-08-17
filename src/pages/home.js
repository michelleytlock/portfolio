import React, { Component } from "react"
import { Link } from "gatsby"
import Clipboard from "clipboard"
import scrollTo from "gatsby-plugin-smoothscroll"
import Icon from "@mdi/react"
import { mdiStar } from "@mdi/js"

//Images
import photo from "../images/murakami.jpg"
import mediaBoxPhoto from "../images/mediabox.jpg"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"

class Home extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        easing: "easeInOutCubic",
      })
    }

    // var scroll = new SmoothScroll('a[href*="#"]', {
    //   speed: 300,
    //   speedAsDuration: true,
    //   easing: "easeInOutCubic",
    // })
  }

  handleScroll = e => {
    let navbar = document.querySelector(".navbar")
    let navbarItem = document.querySelectorAll(".navbar-item")
    let heroHeight = document.querySelector(".hero").offsetHeight

    if (window.scrollY > heroHeight) {
      navbar.setAttribute(
        "style",
        "background-color: white; box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, .1);"
      )
      for (let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].setAttribute("style", "color: black")
      }
    } else {
      navbar.setAttribute("style", "background-color: #760ab9")
      for (let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].setAttribute("style", "color: white")
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  handleCopy = () => {
    console.log("copied!")
    const clip = new Clipboard(".button")

    clip.on("success", () => {
      document.querySelectorAll(".contact-alert").innerHTML =
        "My email has been copied to your clipboard!"
    })
    clip.on("error", () => {
      document.querySelectorAll(".contact-alert").innerHTML =
        "That didn't work, sorry! :("
    })
  }

  render() {
    return (
      <>
        <nav className="scroll-nav">
          <ul>
            <li>
              <button onClick={() => scrollTo("#top")}>Back to Top</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#projects")}>
                Selected Works
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("#about")}>Experience</button>
            </li>
          </ul>
        </nav>

        <section id="top" className="hero is-primary is-fullheight">
          {/* <!-- Hero head: will stick at the top --> */}
          <div className="hero-head">
            <Navbar />
          </div>

          {/* <!-- Hero content: will be in the middle --> */}
          <div className="hero-body">
            <div className="container">
              <div
                className="intro"
                data-sal-duration="800"
                data-sal="flip-down"
                data-sal-delay="100"
                data-sal-easing="ease-out-bounce"
              >
                <h1 className="h1">Michelle Lock</h1>
                <h4 className="h4">
                  A UX designer and full-stack developer passionate about using
                  design and technology to transform our lives and solve
                  problems.
                </h4>
                <div className="contact-button">
                  <button
                    className="button is-white is-rounded"
                    onClick={this.handleCopy}
                    data-clipboard-text="michelleytlock@gmail.com"
                  >
                    Contact Me
                  </button>
                  <p className="contact-alert"> </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium">
          <div className="container">
            <div className="columns">
              <div
                className="intro column"
                data-sal-duration="800"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease-out-bounce"
              >
                <h2 className="h2">Hi I'm Michelle.</h2>
                <h4 className="h4 bullet-list">My dreams are:</h4>
                <div className="bullet-item">
                  <span>
                    <Icon
                      path={mdiStar}
                      color="#760ab9"
                      className="bullet-icon"
                      size={1}
                    />
                  </span>
                  <h5 className="h5">
                    To be a designer in an agency-like environment where I can
                    work on challenging projects that involve creativity and
                    problem solving.
                  </h5>
                </div>
                <div className="bullet-item">
                  <span>
                    <Icon
                      path={mdiStar}
                      color="#760ab9"
                      className="bullet-icon"
                      size={1}
                    />
                  </span>
                  <h5 className="h5">
                    To achieve goals every day working in a team that respects
                    and inspires each other while also learning from each other.
                  </h5>
                </div>
                <div className="bullet-item">
                  <span>
                    <Icon
                      path={mdiStar}
                      color="#760ab9"
                      className="bullet-icon"
                      size={1}
                    />
                  </span>
                  <h5 className="h5">To be friends with Béyonce.</h5>
                </div>
              </div>
              <div className="column photo-column">
                <img
                  src={photo}
                  alt="Michelle Lock"
                  className="main-photo"
                  data-sal-duration="800"
                  data-sal="slide-left"
                  data-sal-delay="100"
                  data-sal-easing="ease-out-bounce"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="projects">
              <div
                className="project"
                data-sal-duration="800"
                data-sal="zoom-in"
                data-sal-delay="100"
                data-sal-easing="ease-out-bounce"
              >
                <h2 className="h2">Selected Works</h2>
                <img src={mediaBoxPhoto} alt="MediaBox Project" />
                <h3 className="h3">History Hunt</h3>
                <h5 className="h5">
                  A mobile application for the urban explorer, embarking on
                  scavenger hunts for historical locations in their cities.
                </h5>
              </div>
              <div
                className="project"
                data-sal-duration="800"
                data-sal="zoom-in"
                data-sal-delay="100"
                data-sal-easing="ease-out-bounce"
              >
                <img src={mediaBoxPhoto} alt="MediaBox Project" />
                <h3 className="h3">Verbadisco</h3>
                <h5 className="h5">
                  A mobile application for the ultimate Harry Potter fan.
                </h5>
              </div>
              <div
                className="project"
                data-sal-duration="800"
                data-sal="zoom-in"
                data-sal-delay="100"
                data-sal-easing="ease-out-bounce"
              >
                <img src={mediaBoxPhoto} alt="MediaBox Project Photo" />
                <h3 className="h3">MediaBox</h3>
                <h5 className="h5">
                  A full-stack web application I created from scratch using MERN
                  stack. It is an application that gives users recommendations
                  on what to watch based on their movie/tv show preferences.
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="hero is-dark is-medium is-bold">
          <div
            className="hero-body"
            data-sal-duration="800"
            data-sal="fade"
            data-sal-easing="ease-out-bounce"
          >
            <Experience />
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Home
