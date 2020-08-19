import React from "react"

export default function Tool(props) {
  return (
    <div className="tool">
      <img className="tool-logo" alt={props.name} src={props.src} />
      <h6>{props.name}</h6>
    </div>
  )
}
