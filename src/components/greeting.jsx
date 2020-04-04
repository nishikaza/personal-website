import React, { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"

class Greeting extends Component {
  state = {}
  jumbotronStyle = {
    backgroundColor: "teal",
    color: "white",
    backgroundImage: "url(../images/bgpic.png)",
    padding: 150,
  }
  render() {
    return (
      <div>
        <Jumbotron fluid style={this.jumbotronStyle}>
          <div>
            <h1>Welcome to my site!</h1>
            <p>
              My name is Nishi and I am a second-year undergrad at UC Berkeley.
              Welcome to my life!
            </p>
          </div>
          <Button variant="outline-light">Learn more</Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Greeting
