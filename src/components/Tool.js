import React from "react"

export default function Tool(props) {
  return (
    <div className="tool">
      <img className="tool-logo" src={props.src} />
      <h6>{props.name}</h6>
    </div>
  )
}
