import React, { Component } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"
import campanile from "../images/campanile.jpg"

class Education extends Component {
  state = {}
  render() {
    return (
      <div
        style={{ backgroundColor: "#222831", color: "white", margin: "15em" }}
      >
        <h1 style={{ color: "#00adb5" }}>Education</h1>
        <Container>
          <Row style={{ margin: "1em" }}>
            <Col sm={6}>
              <Image
                style={{ width: 800, borderRadius: "3%" }}
                src={campanile}
              />
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Education
