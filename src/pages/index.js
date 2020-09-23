import React, { Component } from "react"
import { navigate } from "gatsby"
import Typed from "typed.js"
import Head from "../components/Head"

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
        <div className="index">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el
            }}
          />
        </div>
      </>
    )
  }
}

export default Index
