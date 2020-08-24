import React from "react"
import { Link } from "gatsby"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/home">Head home</Link>
      </p>
    </>
  )
}

export default NotFound
