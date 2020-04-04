import React, { Component } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"

class Education extends Component {
  state = {}
  render() {
    return (
      <div
        style={{ backgroundColor: "#000839", color: "white", margin: "3em" }}
      >
        <h1 style={{ color: "#ffa41b" }}>Education</h1>
        <Container>
          <Row style={{ margin: "1em" }}>
            <Col sm={4}>
              <Image src="../images/flexport.png" />
            </Col>
            <Col sm={8}></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Education
