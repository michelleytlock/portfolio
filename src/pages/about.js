import React from "react"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Tool from "../components/Tool"
import Emoji from "../components/Emoji"
import Head from '../components/Head'

//Styles
import "../styles/index.scss"
import "../styles/home.css"

const About = () => {
  return (
    <><Head title="About" />
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
          <h3 className="h3" style={{ marginBottom: "20px" }}>
            More About Me
          </h3>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child notification is-success">
                <p className="title">
                  <Emoji label="hong kong flag" symbol="🇭🇰" /> Currently:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I live in Hong Kong. Other cities I've lived in are Shanghai{" "}
                    <Emoji label="dumpling" symbol="🥟" />, Miami{" "}
                    <Emoji label="palm tree" symbol="🌴" />, and New York{" "}
                    <Emoji label="statue of liberty" symbol="🗽" />.
                  </p>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-8">
              <div className="tile is-child notification is-warning">
                <p className="title">
                  <Emoji label="globe" symbol="🌏" /> Origins:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I grew up as a TCK (third culture kid born in Hong Kong{" "}
                    <Emoji label="hong kong flag" symbol="🇭🇰" />, raised in
                    Shanghai <Emoji label="china flag" symbol="🇨🇳" />, attended
                    American international school{" "}
                    <Emoji label="us flag" symbol="🇺🇸" />
                    ). I was lucky enough to experience many different cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-8 is-vertical">
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child notification is-info">
                    <p className="title">
                      <Emoji label="plane" symbol="✈️" /> Travel:
                    </p>
                    <p className="subtitle"></p>
                    <div className="content">
                      <p>
                        I love to travel. I have been to 18 countries, and I'm
                        always on Google Flights looking for cheap airfare! I
                        love exploring new places, learning about cultures and
                        eating different cuisines.
                      </p><img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597827584/portfolio/Screen_Shot_2020-08-19_at_4.59.20_PM_eyuncg.png" alt="Me at Joshua Tree Dec 2019" />
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child notification is-primary">
                    <p className="title">
                      <Emoji label="speaking head" symbol="🗣️" /> Languages:
                    </p>
                    <p className="subtitle"></p>
                    <div className="content">
                      <p>
                        I can speak English, Cantonese and Mandarin. I am
                        currently learning French (I learned in high school but
                        it's been a while) and Korean.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child notification is-danger">
                    <p className="title">
                      <Emoji label="noodles" symbol="🍜" /> Food:
                    </p>
                    <p className="subtitle"></p>
                    <div className="content">
                      <p>
                        I love eating everything and anything, except olives and eggplant. Check out my food Instagram <a href="https://www.instagram.com/never_drop_your_fries/" target="_blank" rel="noreferrer">here</a>.
                      </p><img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597827766/portfolio/Screen_Shot_2020-08-19_at_5.02.04_PM_ltldbc.png" alt="Berry Waffle Instagram" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child notification is-link">
                <p className="title">
                  <Emoji label="books" symbol="📚" /> Reading:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I'm trying to read 100 books this year. I already know I'm
                    not going to make it, but it's fun seeing how close I get! I
                    love reading fiction, biographies and the occasional
                    mystery. This is what I'm reading now:
                  </p><img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Educated_%28Tara_Westover%29.png/220px-Educated_%28Tara_Westover%29.png" alt="Educated by Tara Westover" />
                </div>
              </div>
              <div className="tile is-child notification is-success">
                <p className="title">
                  <Emoji label="musical note" symbol="🎵" /> Music
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I love going to concerts and listening to music. I mainly
                    listen to pop, indie pop and R&B.
                  </p><iframe src="https://open.spotify.com/embed/playlist/0aFuEhx18Wv4lTlOKWkdqv" style={{border: "0", width: "100%", height: "380px"}} allowfullscreen allow="encrypted-media" title="Spotify Playlist"></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child notification is-warning">
                <p className="title">
                  <Emoji label="fish" symbol="🐟" /> Office:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I am usually the office snack lady. When I lived in New
                    York, I bought Costco-sized goldfish only, never
                    regular-size. As a result, I had a lot of goldfish to share.
                  </p>
                  <img
                    src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=339054-894&recipeName=680&viewId=1"
                    alt="Costco Goldfish"
                  />
                </div>
              </div>
            </div>
            <div className="tile is-parent is-8 is-vertical">
              <div className="tile is-child notification is-primary">
                <p className="title">
                  <Emoji label="fork and knife and plate" symbol="🍽️" />{" "}
                  Restaurants:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I am the go-to restaurant recommender in all of my friend
                    groups. I am known to obsessively (meticulously) "star" <Emoji label="star" symbol="⭐" /> restaurants on my Google
                    Maps. I'm still working on my Hong Kong Google Map but if you want to see my New York one: <a href="https://drive.google.com/file/d/1Qx4bQ0eprtITnBM24EGe-kpFUjfR5Ujd/view?usp=sharing" target="_blank" rel="noreferrer">here</a>.
                  </p>
                </div>
              </div>
              <div className="tile is-child notification is-info">
                <p className="title">
                  <Emoji label="laptop" symbol="💻" /> TV Shows:
                </p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    I watch too much TV but my all-time favorite television show
                    is <a href="https://www.imdb.com/title/tt0200276/" target="_blank" rel="noreferrer">The West Wing</a>. I also love watching cooking shows like
                    <a href="https://en.wikipedia.org/wiki/The_Great_British_Bake_Off" target="_blank" rel="noreferrer">The Great British Bake Off</a> and <a href="https://en.wikipedia.org/wiki/Guy%27s_Grocery_Games" target="_blank" rel="noreferrer">Guy's Grocery Games</a>.
                  </p><div class='embed-container'><iframe src='https://www.youtube.com/embed/VEaxho5kG04' frameborder='0' allowfullscreen title="Youtube"></iframe></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
