import React from "react"
import "../styles/contact.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Emoji from "../components/Emoji"
import Alert from "../components/Alert"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <Head title="👋 Contact" />
        <Alert />
        <Navbar />
        <div className="contact__content">
          <h2>Contact Me <Emoji label="woman technologist" symbol="👩🏻‍💻" /></h2>
          <h3>Want to work together or grab a coffee?</h3>
          <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="contact__formField">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="contact__formField">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="contact__formField">
              <textarea name="message" placeholder="Your Message"></textarea>
            </div>
            <div className="contact__formField">
              <button className="contact__formButton" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
