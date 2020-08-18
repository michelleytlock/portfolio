import React from "react"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import mediaBoxPhoto from "../images/mediabox.jpg"

const Projects = () => {
  return (
    <>
      <section className="hero is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="element">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597663106/Frame_2_cs6a6q.png" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6 className="h6">UX/UI DESIGN</h6>
                      <h3 className="h3">Verbadisco</h3>
                    </div>
                  </div>
                </div>
                <div className="element">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597730261/Multi-Devices-Mockup-Scene-Vol01_fyfdii.png" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6 className="h6">UI DESIGN</h6>
                      <h3 className="h3">Fitted</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-two-thirds">
                <div className="element">
                  <img src={mediaBoxPhoto} />
                  <div className="overlay">
                    <div className="element-type">
                      <h6 className="h6">UX/UI DESIGN</h6>
                      <h3 className="h3">History Hunt</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section is-white">
        <div className="container">
          <h1>Selected Works</h1>
        </div>
      </section> */}

      <Footer />
    </>
  )
}

export default Projects
