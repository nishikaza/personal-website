import React, { Component } from "react"
import { aboutMe } from "../text/experienceText"
class About extends Component {
  state = {}
  render() {
    return (
      <div
        style={{
          backgroundColor: "#222831",
          color: "white",
          margin: "15em",
        }}
      >
        <h1 style={{ color: "#00adb5" }}>About Me</h1>
        <p>{aboutMe}</p>
      </div>
    )
  }
}

export default About
