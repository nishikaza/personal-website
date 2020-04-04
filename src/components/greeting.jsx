import React, { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"

// const MastHead = styled(Jumbotron)`
//   @import "../css/theme";
//   background-color: $dark;
//   padding: 0;
//   color: white;
//   padding-bottom: 0.5rem;
// `

// const Content = styled("div")`
//   composes: px-4 from global;
//   background-image: url("../assets/logo-subtle.svg");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 60%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   min-height: 450px;
//   margin: 0 auto;
//   max-width: 800px;
//   @media (max-width: 800px) {
//     padding: 0 40px;
//     text-align: center;
//   }
// `

class Greeting extends Component {
  state = {}
  jumbotronStyle = {
    backgroundColor: "#343a40",
    color: "white",
    backgroundImage: "url(../images/bgpic.png)",
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
          <Button variant="outline-primary">Learn more</Button>
        </Jumbotron>
      </div>
    )
  }
}

export default Greeting
