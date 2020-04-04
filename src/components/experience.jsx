import React, { Component } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Experience extends Component {
  state = {}

  createExperienceSummary(placeName, website, title, time, location) {
    return (
      <div>
        <h4>
          <a
            style={{ color: "midnightblue" }}
            target="_blank"
            rel="noopener noreferrer"
            href={website}
          >
            {placeName}
          </a>
        </h4>
        <p style={{ fontStyle: "italic", margin: 0 }}>
          {title}, {time}
        </p>
        <p style={{ fontWeight: "bold", margin: 0 }}>{location}</p>
        <p>test</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <Container style={{ justifyContent: "center" }}>
          <Row>
            <Col sm={4}>
              <Image src="/images/flexport.png" />
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Flexport 🚛",
                "https://www.flexport.com",
                "Software Engineer Intern",
                "Summer 2020",
                "San Francisco, California"
              )}
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <Image src="../fluentui.png"></Image>
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Fluent UI 🎨",
                "https://developer.microsoft.com/en-us/fluentui#/",
                "Software Engineer Intern",
                "Summer 2019",
                "Redmond, Washington"
              )}
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <Image src="../office.png"></Image>
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Office Core Experiences ⚙️",
                "https://www.microsoft.com",
                "High School Intern",
                "Summer 2018",
                "Redmond, Washington"
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Image src="../microsoft.png"></Image>
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Office Engineering Accessibility 💻",
                "https://www.microsoft.com",
                "High School Intern",
                "Summer 2017",
                "Redmond, Washington"
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Experience
