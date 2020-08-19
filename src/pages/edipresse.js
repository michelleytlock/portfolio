import React from "react"

//Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Next from "../components/Next"

const Edipresse = () => {
  return (
    <>
      <section className="hero is-medium">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
            <div className="container">
            <img src="https://res.cloudinary.com/michelleytlock/image/upload/v1597831011/portfolio/IMG_7835color_rzucdp.png" alt="Hong Kong Tatler Weddings Cover" />
            <h2 className="h2">Hong Kong Tatler Weddings</h2>
            </div>
          </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          
        </div>
      </section>

      <Next />

      <Footer />
    </>
  )
}

export default Edipresse
