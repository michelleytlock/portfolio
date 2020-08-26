import React from "react"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <h4>Designed & Coded by Michelle Lock, ©2020</h4>
        <p>
          I'd love to grab coffee to talk about anything - from design and tech
          to food and travel. Message me so we can plan something!
        </p>
        {/* <div className="contact-button">
          <button
            className="button button-footer is-primary is-rounded"
            onClick={this.handleCopy}
            data-clipboard-text="michelleytlock@gmail.com"
          >
            Contact Me
          </button>
          <p className="contact-alert"> </p>
        </div> */}
      </div>
    </footer>
  )
}
