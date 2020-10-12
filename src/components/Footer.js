import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Emoji from "./Emoji"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4>© Michelle Lock 2020</h4>
        <p>
          Are you looking for: A hustler & designer who works hard but stays humble? A lifelong learner who asks questions? A passionate eater who loves entertainment and music? If so, get in touch!{" "}
          <Emoji label="smiling face with smiling eyes" symbol="😊" />
        </p>
      </div>

      <div className="footer__right">
        <h4>michelleytlock@gmail.com</h4>
        <a
          className="footer__icon"
          href="https://www.linkedin.com/in/michelleytlock/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="footer__icon"
          href="https://github.com/michelleytlock"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}
