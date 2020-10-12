import React from "react"
import "../styles/projects.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "../components/Head"
import ProjectTile from "../components/ProjectTile"
import Alert from "../components/Alert"

const Projects = () => {
  return (
    <div className="projects">
      <Head title="🔥 Projects" />
      <Alert />
      <Navbar />
      <div className="projects__content">
        <div className="projects__row">
          <div className="projects__columnNarrow">
            <ProjectTile
              url="/verbadisco"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597663106/Frame_2_cs6a6q.png"
              title="Verbadisco"
              tag="UX/UI DESIGN"
            />

            <ProjectTile
              url="/fitted"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597730261/Multi-Devices-Mockup-Scene-Vol01_fyfdii.png"
              title="Fitted"
              tag="UI DESIGN"
            />
          </div>

          <div className="projects__columnWide">
            <ProjectTile
              url="/historyHunt"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597742964/portfolio/Mockup_hh_vj6bkp.png"
              title="History Hunt"
              tag="UX/UI DESIGN"
            />
          </div>
        </div>

        <div className="projects__row">
          <div className="projects__column">
            <ProjectTile
              url="https://github.com/michelleytlock/amazon-clone"
              img="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
              title="Amazon Clone (Work in Progress)"
              tag="WEB DEVELOPMENT"
            />
          </div>

          <div className="projects__column">
            <ProjectTile
              url="https://github.com/michelleytlock/spotify-clone"
              img="https://b8g9x2x5.rocketcdn.me/wp-content/uploads/2018/08/spotify-logo-1920x1080_fouoik.jpg"
              title="Spotify Clone (Work in Progress)"
              tag="WEB DEVELOPMENT"
            />
          </div>
        </div>

        <div className="projects__row">
          <div className="projects__columnWide">
            <ProjectTile
              url="/mediabox"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597761723/portfolio/Mediabox-mockup_dm576p.png"
              title="MediaBox"
              tag="WEB DEVELOPMENT"
            />
          </div>
          <div className="projects__columnNarrow">
            <ProjectTile
              url="/topixmedialab"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597840455/portfolio/001_cov1_us_beuuhg.png"
              title="Topix Media Lab"
              tag="EDITORIAL"
            />

            <ProjectTile
              url="/gigzilla"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597762172/portfolio/Gigzilla-mockup_xp60og.png"
              title="Gigzilla"
              tag="WEB DEVELOPMENT"
            />
          </div>
        </div>

        <div className="projects__row">
          <div className="projects__column">
            <ProjectTile
              url="/projects/aisle1"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597760104/portfolio/iMac_h5hjxi.png"
              title="Aisle 1"
              tag="WEB DEVELOPMENT"
            />
          </div>

          <div className="projects__column">
            <ProjectTile
              url="/projects/edipresse"
              img="https://res.cloudinary.com/michelleytlock/image/upload/v1597831011/portfolio/IMG_7835color_rzucdp.png"
              title="Hong Kong Tatler Weddings"
              tag="EDITORIAL"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
