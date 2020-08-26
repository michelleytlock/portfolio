import React from "react"
import { Link } from "gatsby"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from '../components/Head'

const Projects = () => {
  return (
    <><Head title="Projects" />
      <section className="hero is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-parent">
              <div className="tile is-child element">
                <Link to="/projects/verbadisco">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597663106/Frame_2_cs6a6q.png" alt="Verbadisco Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>UX/UI DESIGN</h6>
                      <h3>Verbadisco</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="tile is-child element">
                <Link to="/projects/fitted">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597730261/Multi-Devices-Mockup-Scene-Vol01_fyfdii.png" alt="Fitted Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>UI DESIGN</h6>
                      <h3>Fitted</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="tile is-8 is-parent">
              <div className="tile is-child element">
                <Link to="/projects/history-hunt">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png" alt="History Hunt Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>UX/UI DESIGN</h6>
                      <h3>History Hunt</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-8 is-parent">
              <div className="tile is-child element">
                <Link to="/projects/mediabox">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png" alt="MediaBox Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>WEB DEVELOPMENT</h6>
                      <h3>MediaBox</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="tile is-vertical is-parent">
              <div className="tile is-child element">
                <Link to="/projects/aisle1">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597760104/portfolio/iMac_h5hjxi.png" alt="Aisle 1 Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>WEB DEVELOPMENT</h6>
                      <h3>Aisle 1</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="tile is-child element">
                <Link to="/projects/gigzilla">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597762172/portfolio/Gigzilla-mockup_xp60og.png" alt="Gigzilla Project" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>WEB DEVELOPMENT</h6>
                      <h3>Gigzilla</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child element">
                <Link to="/projects/topixmedialab">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597840455/portfolio/001_cov1_us_beuuhg.png" alt="Topix Media Lab" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>EDITORIAL</h6>
                      <h3>Topix Media Lab</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child element">
                <Link to="/projects/edipresse">
                  <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597831011/portfolio/IMG_7835color_rzucdp.png" alt="Hong Kong Tatler Weddings" />
                  <div className="overlay">
                    <div className="element-type">
                      <h6>EDITORIAL</h6>
                      <h3>Hong Kong Tatler Weddings</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Projects
