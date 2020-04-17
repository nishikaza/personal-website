import React, { Component } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  summer2019Description,
  summer2018Description,
  summer2017Description,
} from "../text/experienceText"
import fluentLogo from "../images/fluentui.png"
import officeLogo from "../images/office.png"
import microsoftLogo from "../images/microsoft.png"

class Experience extends Component {
  state = {}

  createExperienceSummary(
    placeName,
    website,
    title,
    time,
    location,
    description = ""
  ) {
    return (
      <div>
        <h4>
          <a
            style={{ color: "#00a8cc" }}
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
        <p>{description}</p>
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#000839",
          color: "white",
          margin: "3em",
        }}
      >
        <h1 style={{ color: "#ffa41b" }}>Experience</h1>
        <Container>
          <Row style={{ margin: "1em" }}>
            <Col sm={4}>
              <Image
                style={{ width: 300, borderRadius: "3%" }}
                src={fluentLogo}
              />
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Fluent UI 🎨",
                "https://developer.microsoft.com/en-us/fluentui#/",
                "Software Engineer Intern",
                "Summer 2019",
                "Redmond, Washington",
                summer2019Description
              )}
            </Col>
          </Row>

          <Row style={{ margin: "1em" }}>
            <Col sm={4}>
              <Image
                style={{ width: 300, borderRadius: "3%" }}
                src={officeLogo}
              />
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Office Core Experiences ⚙️",
                "https://www.microsoft.com",
                "High School Intern",
                "Summer 2018",
                "Redmond, Washington",
                summer2018Description
              )}
            </Col>
          </Row>
          <Row style={{ margin: "1em" }}>
            <Col sm={4}>
              <Image
                style={{ width: 300, borderRadius: "3%" }}
                src={microsoftLogo}
              />
            </Col>
            <Col sm={8}>
              {this.createExperienceSummary(
                "Microsoft Office Engineering Accessibility 💻",
                "https://www.microsoft.com",
                "High School Intern",
                "Summer 2017",
                "Redmond, Washington",
                summer2017Description
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Experience
