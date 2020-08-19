import React from "react"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Gigzilla = () => {
  return (
    <>
      <section className="hero is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gigzilla
