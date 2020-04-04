import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header"
import Greeting from "../components/greeting"
import Experience from "../components/experience"
import Education from "../components/education"
import Contact from "../components/contact"

const IndexPage = () => (
  <div style={{ backgroundColor: "#000839" }}>
    <Header />
    <Greeting />
    <Experience />
    <Education />
    <Contact />
  </div>
)

export default IndexPage
