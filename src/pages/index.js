import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"
import Vector from "../images/undraw_source_code_xx2e.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="textPanel">
        <IndexTitle />
        <p className="homeText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc tristique et est suspendisse volutpat volutpat lacus. Massa nunc tristique et est suspendisse volutpat volutpat lacus.
      </p>
        <Link to="/work"><button className="cta">See My Work 🡒</button></Link>
      </div>
      <div className="imagePanel">
        <img src={Vector} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
