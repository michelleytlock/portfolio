import React from "react"
import "../styles/about.css"
import StarIcon from "@material-ui/icons/Star"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Tool from "../components/Tool"
import Emoji from "../components/Emoji"
import Head from "../components/Head"
import Alert from "../components/Alert"

const About = () => {
  return (
    <div className="about">
      <Head title="🍕 About" />
      <Alert />
      <Navbar />
      <div className="about__content">
        <div
          className="about__intro"
          data-sal-duration="800"
          data-sal="flip-down"
          data-sal-delay="100"
          data-sal-easing="ease-out-bounce"
        >
          <h1>
            I am a UX/UI designer currently based in Hong Kong{" "}
            <Emoji label="hong kong flag" symbol="🇭🇰" />
          </h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1BwhxBcIfDLWb89ZqIxUvPxjwrzEMVWK6/view?usp=sharing"
            className="about__resume"
          >
            Download Resume
          </a>
        </div>

        <div className="about__michelle">
          <div className="about__michelleText">
            <h2>Hi I'm Michelle!</h2>
            <h4>My goals are:</h4>
            <div className="about__michelleBullet">
              <StarIcon
                style={{
                  color: "rebeccapurple",
                  marginTop: "5px",
                  marginRight: "10px",
                  fontSize: 16,
                }}
              />
              <h6>To design experiences that tell stories.</h6>
            </div>

            <div className="about__michelleBullet">
              <StarIcon
                style={{
                  color: "rebeccapurple",
                  marginTop: "5px",
                  marginRight: "10px",
                  fontSize: 16,
                }}
              />
              <h6>
                To always be creative and encourage creativity around me.
              </h6>
            </div>

            <div className="about__michelleBullet">
              <StarIcon
                style={{
                  color: "rebeccapurple",
                  marginTop: "5px",
                  marginRight: "10px",
                  fontSize: 16,
                }}
              />
              <h6>
                To be part of a team and culture that inspire each other while learning from each other.
              </h6>
            </div>

          </div>

          <img
            className="about__michelleImage"
            src="https://res.cloudinary.com/michelleytlock/image/upload/v1597828566/portfolio/murakami-sized-down_q9dqvp.png"
            alt="Michelle Lock"
          />
        </div>

        <Experience />

        {/* Tools I use */}
        {/* <div className="about__tools">
          <h3>Tools I Use</h3>
          <div className="about__toolsColumns">
            <div className="about__toolsColumn">
              <Tool
                name="Figma"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597409868/figma_logo_sa6ng0.png"
              />
              <Tool
                name="Sketch"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597407309/sketch_logo_ge2cvx.png"
              />
              <Tool
                name="Adobe XD"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597408251/xd_logo_z8w1r4.jpg"
              />
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
              <Tool
                name="InVision"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597410553/invision_logo_pjmmud.png"
              />
              <Tool
                name="Balsamiq"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597411049/balsamiq_logo_lgygl1.png"
              />
            </div>

            <div className="about__toolsColumn">
              <Tool
                name="Mural"
                src="https://assets.website-files.com/5ddd9c3f2186308353fe682d/5e9f2221257b5c8f93714dac_mural-glyph.png"
              />
              <Tool
                name="Airtable"
                src="https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png"
              />
              <Tool
                name="Calendly"
                src="https://cdn.worldvectorlogo.com/logos/calendly.svg"
              />
              <Tool
                name="Google Suite"
                src="https://p7.hiclipart.com/preview/344/344/59/google-logo-g-suite-google.jpg"
              />
            </div>

            <div className="about__toolsColumn">
              <Tool
                name="HTML"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <Tool
                name="CSS"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              />
              <Tool
                name="Javascript ES6"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"
              />
              <Tool
                name="MongoDB"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/mongodb_logo_kqfggl.png"
              />
              <Tool
                name="Express.js"
                src="https://expressjs.com/images/express-facebook-share.png"
              />
              <Tool
                name="React.js"
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597412300/react_logo_bwgxjz.png"
              />
              <Tool
                name="Node.js"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS82DpbCWJ-vtN6lctMfpyOBSz7TyZSbEwdMw&usqp=CAU"
              />
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
        </div> */}

        {/* More About Me */}
        <div className="about__more">
          <h3>More About Me</h3>
          <div className="about__moreItems">
            <div className="about__moreItem">
              <h5>
                <Emoji label="hong kong flag" symbol="🇭🇰" /> Current Location:
              </h5>
              <p>
                I live in Hong Kong. Other cities I've lived in are Shanghai
                <Emoji label="dumpling" symbol="🥟" /> , Miami
                <Emoji label="palm tree" symbol="🌴" /> , and New York
                <Emoji label="statue of liberty" symbol="🗽" /> .
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="globe" symbol="🌏" /> Origins:
              </h5>
              <p>
                I grew up as a TCK (third culture kid born in Hong Kong
                <Emoji label="hong kong flag" symbol="🇭🇰" /> , raised in
                Shanghai
                <Emoji label="china flag" symbol="🇨🇳" /> , attended American
                international school
                <Emoji label="us flag" symbol="🇺🇸" />
                ). I was lucky enough to experience many different cultures.
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="plane" symbol="✈️" /> Travel:
              </h5>
              <p>
                I've been to 18 countries. I love learning about different cultures and experiencing new cuisines.
              </p>
              <img
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597827584/portfolio/Screen_Shot_2020-08-19_at_4.59.20_PM_eyuncg.png"
                alt="Me at Joshua Tree Dec 2019"
              />
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="noodles" symbol="🍜" /> Food:
              </h5>
              <p>
                I love eating everything and anything, except olives and
                eggplant. Check out my food Instagram{" "}
                <a
                  href="https://www.instagram.com/never_drop_your_fries/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
              <img
                src="https://res.cloudinary.com/michelleytlock/image/upload/v1597827766/portfolio/Screen_Shot_2020-08-19_at_5.02.04_PM_ltldbc.png"
                alt="Berry Waffle Instagram"
              />
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="speaking head" symbol="🗣️" /> Languages:
              </h5>

              <p>
                I can speak English, Cantonese and Mandarin. I am currently
                learning French and Korean.
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="books" symbol="📚" /> Reading:
              </h5>
              <p>
                I'm trying to read 100 books this year. I love
                reading fiction, biographies and the occasional mystery.{" "}
                <a
                  href="https://images-na.ssl-images-amazon.com/images/I/819JSdLa3OL.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  This is what I'm reading right now.
                </a>
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="fish" symbol="🐟" /> Office Rep:
              </h5>
              <p>
                I am usually the office snack lady. I
                bought{" "}
                <a
                  href="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=339054-894&recipeName=680&viewId=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Costco-sized goldfish only
                </a>
                , never regular-size. So I had a lot of goldfish to
                share.
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="fork and knife and plate" symbol="🍽️" />{" "}
                Restaurants:
              </h5>
              <p>
                I am the go-to restaurant recommender among my friends. I am known to obsessively <i>(meticulously)</i> star{" "}
                <Emoji label="star" symbol="⭐" /> {" "}restaurants on my Google
                Maps. I'm still working on my HK Google Map but if you
                want to see my NY one:{" "}
                <a
                  href="https://drive.google.com/file/d/1Qx4bQ0eprtITnBM24EGe-kpFUjfR5Ujd/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="laptop" symbol="💻" /> TV Shows:
              </h5>
              <p>
                I watch a lot of TV but my all-time favorite television show is{" "}
                <a
                  href="https://www.imdb.com/title/tt0200276/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The West Wing
                </a>
                . I also love watching cooking shows like{" "}
                <a
                  href="https://en.wikipedia.org/wiki/The_Great_British_Bake_Off"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Great British Bake Off
                </a>.
              </p>
              <iframe
                src="https://www.youtube.com/embed/VEaxho5kG04"
                frameborder="0"
                allowfullscreen
                title="Youtube"
              ></iframe>
            </div>

            <div className="about__moreItem">
              <h5>
                <Emoji label="musical note" symbol="🎵" /> Music
              </h5>

              <p>
                I love going to concerts and listening to music. My favorite artists are BTS and Beyoncé.
              </p>
              <iframe
                src="https://open.spotify.com/embed/playlist/0aFuEhx18Wv4lTlOKWkdqv"
                style={{ border: "0", width: "100%", height: "380px" }}
                allowfullscreen
                allow="encrypted-media"
                title="Spotify Playlist"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
