import React from "react"
import { Link } from "gatsby"
import "../styles/404.css"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <div className="error">
      <div className="error__wrapper">
        <Head title="🚨 404" />
        <Navbar />
        <div className="error__content">
          <div className="error__text">
            <h2>
              Sorry! Something went wrong...
            </h2>
            <Link to="/home">Head home</Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1515472071456-47b72fb3caff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="error"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
