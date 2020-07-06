import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexTitle />
    <p>Welcome to my website</p>
    <Link to="/about/">Go to about</Link> <br />
  </Layout>
)

export default IndexPage
