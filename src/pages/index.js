import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header"
import Greeting from "../components/greeting"
import Experience from "../components/experience"
import Education from "../components/education"
import Contact from "../components/contact"
import About from "../components/about"

const IndexPage = () => (
  <div style={{ backgroundColor: "#222831" }}>
    <Header />
    <Greeting />
    <About />
    <Experience id="Experience" />
    <Education id="Education" />
    <Contact id="Contact" />
  </div>
)

export default IndexPage
