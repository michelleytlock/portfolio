import React from "react"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        <h4>Designed & Coded by Michelle Lock, ©2020</h4>
        <p>
          I'd love to grab coffee to talk about anything - from design and tech
          to food and travel. Message me so we can plan something!
        </p>
      </div>

      <div>
        <button className="footer__button"
          // onClick={this.handleCopy}
          data-clipboard-text="michelleytlock@gmail.com"
        >
          Contact Me
        </button>
        <p className="footer__buttonMessage"> </p>
      </div>
    </div>
  )
}
