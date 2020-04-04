import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header"
import Greeting from "../components/greeting"
import Experience from "../components/experience"

const IndexPage = () => (
  <div>
    <Header />
    <Greeting />
    <Experience></Experience>
  </div>
)

export default IndexPage
