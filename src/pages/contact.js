import React from "react"
import Icon from "@mdi/react"
import { mdiAccount } from "@mdi/js"
import { mdiEmail } from "@mdi/js"
import { mdiAndroidMessages } from "@mdi/js"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "../components/Head"

const Contact = () => {
  return (
    <>
      <Head title="Contact" />
      <section className="hero is-primary is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container" style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
            <div className="intro">
              <h2>Contact Me</h2>
              <h3>
                Want to work together or ask me a question?
              </h3>
              <form
                name="Contact Form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="Contact Form" />
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-medium"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <span className="icon is-small is-left">
                      <Icon path={mdiAccount} color="#bdbdbd" size={1} />
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input is-medium"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <Icon path={mdiEmail} color="#bdbdbd" size={1} />
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <textarea
                      className="textarea is-medium"
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-white" type="submit">
                      Send
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
