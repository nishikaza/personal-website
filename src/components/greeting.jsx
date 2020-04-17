import React, { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"
import bgPic from "../images/bgpic.png"

class Greeting extends Component {
  state = {}
  jumbotronStyle = {
    backgroundColor: "#222831",
    color: "white",
    backgroundImage: bgPic,
    padding: 150,
  }
  render() {
    return (
      <div>
        <Jumbotron fluid style={this.jumbotronStyle}>
          <div>
            <p>👋Hey, my name is</p>
            <h1 style={{ fontSize: "400%" }}>Nishi Kaza.</h1>
            <h1 style={{ color: "#00a8cc" }}>
              I am a student and software engineer.
            </h1>
            <p style={{ width: "400px", color: "#eeeeee" }}>
              I am a technology enthusiast specializing in building consumer
              products based in the San Francisco Bay Area.
            </p>
          </div>
          <Button variant="outline-light">Learn more</Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Greeting
