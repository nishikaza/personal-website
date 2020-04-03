import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Header></Header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
    <h1>Test</h1>
  </div>
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export default IndexPage
