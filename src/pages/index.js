import React, { Component } from "react"
import { navigate } from "gatsby"
import Typed from "typed.js"

//Styles
import "../styles/index.scss"
import "../styles/home.css"

class Index extends Component {
  state = {
    done: undefined,
  }

  componentDidMount() {
    const options = {
      strings: ["Hi, I'm Michelle, UX Designer and Full-Stack Developer"],
      typeSpeed: 50,
      onComplete: () => {
        console.log("done")
        navigate("/home")
      },
    }

    this.typed = new Typed(this.el, options)
  }

  render() {
    return (
      <>
        <section className="hero is primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="wrap">
                <div className="type-wrap">
                  <span
                    style={{ whiteSpace: "pre" }}
                    ref={el => {
                      this.el = el
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Index
