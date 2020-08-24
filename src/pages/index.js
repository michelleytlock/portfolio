import React, { Component } from "react"
import { navigate } from "gatsby"
import Typed from "typed.js"
import Head from '../components/Head'

//Styles
import "../styles/index.scss"
import "../styles/home.css"

class Index extends Component {

  componentDidMount() {
    const options = {
      strings: ["Hi, I'm Michelle,<br />nice to meet you!"],
      typeSpeed: 50,
      onComplete: () => {
        setTimeout(() => {
          navigate("/home")
        }, 1000)
      },
    }

    this.typed = new Typed(this.el, options)
  }

  render() {
    return (
      <>
        <Head title="Home" />
        <section className="hero is primary is-fullheight typed-background">
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
