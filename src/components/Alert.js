import React from "react"
import "../styles/Alert.css"

function Alert() {
  return (
    <div className="alert">
      <h2>🚧 Sorry! Parts of my site are still under construction. 🚧</h2>
      <h3>
        If you have any questions, please view my temporary portfolio{" "}
        <a className="alert__link"
          href="https://www.notion.so/Meet-Michelle-72456c13129b486f9cd9160dfc9ed69f"
          target="_blank"
        >
          HERE
        </a>{" "}
        and contact me directly at michelleytlock@gmail.com!
      </h3>
    </div>
  )
}

export default Alert
