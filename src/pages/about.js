import React from "react"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Tool from "../components/Tool"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

const About = () => {
  return (
    <>
      <section className="hero is-primary is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container">
            <div className="intro">
              <h2 className="h2">
                I am a UX designer currently based in Hong Kong.
              </h2>
              <h4 className="h4">
                <button
                  className="button is-rounded"
                  href="https://drive.google.com/file/d/1BwhxBcIfDLWb89ZqIxUvPxjwrzEMVWK6/view?usp=sharing"
                >
                  Download Resume
                </button>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-white">
        <Experience />
      </section>

      <section className="section is-white">
        <div className="container">
          <h3 className="h3">Tools I Use</h3>
          <div className="columns">
            <div className="column">
              <Tool
                name="Sketch"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597407309/sketch_logo_ge2cvx.png"
              />
              <Tool
                name="Adobe XD"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597408251/xd_logo_z8w1r4.jpg"
              />
              <Tool
                name="Figma"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597409868/figma_logo_sa6ng0.png"
              />
              <Tool
                name="InVision"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597410553/invision_logo_pjmmud.png"
              />
              <Tool
                name="Balsamiq"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/balsamiq_logo_lgygl1.png"
              />
              <Tool
                name="Whimsical"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/whimsical_logo_a5ibs4.png"
              />
            </div>

            <div className="column">
              <Tool
                name="Adobe Photoshop"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/photoshop_logo_i462fz.png"
              />
              <Tool
                name="Adobe InDesign"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/indesign_logo_z39rvf.jpg"
              />
              <Tool
                name="Adobe Illustrator"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/illustrator_logo_l9lhdw.jpg"
              />
            </div>

            <div className="column">
              <Tool name="HTML & CSS" />
              <Tool name="Javascript ES6" />
              <Tool
                name="MongoDB"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/mongodb_logo_kqfggl.png"
              />
              <Tool name="Express.js" />
              <Tool
                name="React.js"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/react_logo_bwgxjz.png"
              />
              <Tool name="Node.js" />
              <Tool
                name="Bootstrap"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/bootstrap_logo_usctpr.png"
              />
              <Tool
                name="Bulma"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/bulma_logo_ik9uig.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section is-white">
        <div className="container">
          <h3 className="h3">More About Me</h3>
          <p className="p">
            I currently live in Hong Kong. Other cities I've lived in are
            Shanghai 🥟 , Miami 🌴, and New York 🗽.
          </p>
          <p className="p">
            I grew up as a TCK (third culture kid born in Hong Kong 🇭🇰 , raised
            in Shanghai 🇨🇳 , attended American international school 🇺🇸 ). I was
            lucky enough to experience many different cultures.{" "}
          </p>
          <p className="p">
            As a result, I love to travel. I have been to 18 countries, and I'm
            always on Google Flights looking for cheap airfare! (obviously all
            my travel plans have been put on hold because of COVID19 but as soon
            as it's okay, I'm planning!)
          </p>
          <p className="p">
            I love exploring new places, learning about cultures and eating
            different cuisines. I can speak English, Cantonese and Mandarin. I
            am currently learning French (I learned in high school but it's been
            a while) and Korean.{" "}
          </p>
          <p className="p">
            I love eating everything and anything, except olives, eggplants, and
            some animal internal organs.
          </p>
          <p className="p">
            I am usually the office snack lady. When I lived in New York, I
            bought Costco-sized goldfish only, never regular-size. As a result,
            I had a lot of goldfish to share.
          </p>
          <p className="p">
            I am the go-to restaurant recommender in all of my friend groups. I
            am known to obsessively (meticulously) "star" ⭐ restaurants on my
            Google Maps.
          </p>
          <p className="p">
            I'm trying to read 100 books this year. I already know I'm not going
            to make it, but it's fun seeing how close I get! I love reading
            fiction, biographies and the occasional mystery.
          </p>
          <p className="p">
            I watch too much TV but my all-time favorite television show is The
            West Wing. I also love watching cooking shows like The Great British
            Bake Off and Guy's Grocery Games.
          </p>
          <p className="p">I love going to concerts and listening to music.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
