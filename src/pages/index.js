import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexTitle />
    <p>Software engineer interested in application development</p>
    <Link to="/about/">Go to about</Link> <br />
  </Layout>
)

export default IndexPage
