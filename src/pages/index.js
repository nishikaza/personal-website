import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header"
import Greeting from "../components/greeting"
import Experience from "../components/experience"
import Education from "../components/education"

const IndexPage = () => (
  <div>
    <Header />
    <Greeting />
    <Experience />
    <Education />
  </div>
)

export default IndexPage
