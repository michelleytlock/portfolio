import React from "react"
import '../styles/Tool.css'

export default function Tool(props) {
  return (
    <div className="tool">
      <img className="tool__logo" alt={props.name} src={props.src} />
      <h6>{props.name}</h6>
    </div>
  )
}
