import React, { Component } from "react"
import { Link } from "gatsby"
import Clipboard from "clipboard"
import Typed from "typed.js"
import Icon from "@mdi/react"
import { mdiStar } from "@mdi/js"
import { mdiMapMarker } from "@mdi/js"

//Images
import homeButton from "../images/Michelle.png"
import photo from "../images/murakami.jpg"
import mediaBoxPhoto from "../images/mediabox.jpg"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

class Home extends Component {
  state = {
    done: undefined,
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
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
    const clip = new Clipboard(".button")

    clip.on("success", () => {
      document.querySelector(".contact-alert").innerHTML =
        "My email has been copied to your clipboard!"
    })
    clip.on("error", () => {
      document.querySelector(".contact-alert").innerHTML =
        "That didn't work, sorry! :("
    })
  }

  render() {
    return (
      <>
        <section className="hero is-primary is-fullheight">
          {/* <!-- Hero head: will stick at the top --> */}
          <div className="hero-head">
            <nav
              className="navbar is-fixed-top is-dark"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="container">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img
                      className="navbar-brand-image"
                      src={homeButton}
                      alt="Home Button"
                    />
                  </Link>
                  <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <Link className="navbar-item" to="/">
                      Home
                    </Link>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
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

        <section className="section">
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

        <section
          className="section"
          data-sal-duration="800"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-out-bounce"
        >
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="intro column">
                <h3 className="h3">Professional Experience</h3>
                <div className="position">
                  <h5 className="h5">
                    <b>Topix Media Lab</b>{" "}
                    <span>
                      <Icon path={mdiMapMarker} color="#760ab9" size={0.85} />
                    </span>{" "}
                    New York, NY
                  </h5>
                  <div className="position-bullet">
                    <h6 className="h6">
                      <b>Assistant Art Director</b> March '18 - May '19
                    </h6>
                    <p className="p">
                      Helped plan and create company's first book designs
                      (including covers and interiors), leading to a slate of
                      adult and children's books every season, every year
                    </p>
                  </div>
                  <div className="position-bullet">
                    <h6 className="h6">
                      <b>Senior Graphic Designer</b> October '16 - March '18
                    </h6>
                    <p className="p">
                      Improved company's book and magazine sales by researching
                      cover trends in collaboration with business department,
                      resulting in more profitable products
                    </p>
                  </div>
                  <div className="position-bullet">
                    <h6 className="h6">
                      <b>Graphic Designer</b> June '15 - October '16
                    </h6>
                    <p className="p">
                      Led the design of several magazine projects simultaneously
                      by creating templates to guide overall typography, color
                      and style, assisting the Creative Director
                    </p>
                  </div>
                </div>
                <div className="position">
                  <h5 className="h5">
                    <b>Ibis Yearbook</b>{" "}
                    <span>
                      <Icon path={mdiMapMarker} color="#760ab9" size={0.85} />
                    </span>{" "}
                    Coral Gables, FL
                  </h5>
                  <div className="position-bullet">
                    <h6 className="h6">
                      <b>Design Director</b> August '13 - May '15
                    </h6>
                    <p className="p">
                      Led the design of two 480-page yearbooks, resulting in
                      awards for the university
                    </p>
                  </div>
                </div>
              </div>
              <div className="intro column">
                <h3 className="h3">Education</h3>
                <div className="position">
                  <h5 className="h5">
                    <b>Ironhack</b>{" "}
                    <span>
                      <Icon path={mdiMapMarker} color="#760ab9" size={0.85} />
                    </span>{" "}
                    Remote
                  </h5>
                  <h6 className="h6">
                    <b>Full-Stack Web Developer Bootcamp</b> July '20
                  </h6>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      This was a 9-week full-time web development bootcamp
                    </p>
                  </div>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      I designed and built full-stack Javascript web
                      applications
                    </p>
                  </div>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      I learned the fundamentals of programming and best
                      practices, as well as how to think like a programmer and
                      how to deconstruct complex problems
                    </p>
                  </div>
                </div>

                <div className="position">
                  <h5 className="h5">
                    <b>CareerFoundry</b>{" "}
                    <span>
                      <Icon path={mdiMapMarker} color="#760ab9" size={0.85} />
                    </span>{" "}
                    Remote
                  </h5>
                  <h6 className="h6">
                    <b>UX/UI Design</b> January '20
                  </h6>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      I cultivated my user-centered problem-solving design
                      abilities and learned how to makes products and services
                      more accessible and intuitive
                    </p>
                  </div>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      This intensive, project-based course focused on research,
                      information architecture, wireframing, prototyping and
                      usability testing
                    </p>
                  </div>
                </div>

                <div className="position">
                  <h5 className="h5">
                    <b>University of Miami</b>{" "}
                    <span>
                      <Icon path={mdiMapMarker} color="#760ab9" size={0.85} />
                    </span>{" "}
                    Coral Gables, FL
                  </h5>
                  <h6 className="h6">
                    <b>
                      Bachelor of Science in Communications and Graphic Design
                    </b>{" "}
                    2011 - 2015
                  </h6>
                  <div className="bullet-item">
                    <span>
                      <Icon
                        path={mdiStar}
                        color="#760ab9"
                        size={0.5}
                        className="bullet-icon"
                      />
                    </span>
                    <p className="p">
                      Learned design principles and fundamentals of visual
                      graphic design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <h4 className="h4">Designed & Coded by Michelle Lock, ©2020</h4>
            <p>
              I'd love to grab coffee to talk about anything - from design and
              tech to food and travel. Message me so we can plan something!
            </p>
            <div className="contact-button">
              <button
                className="button button-footer is-primary is-rounded"
                onClick={this.handleCopy}
                data-clipboard-text="michelleytlock@gmail.com"
              >
                Contact Me
              </button>
              <p className="contact-alert"> </p>
            </div>
          </div>
        </footer>
        {/* </> */}
        {/* )} */}
      </>
    )
  }
}

export default Home
