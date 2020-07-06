import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexTitle />
    <p>Software engineer interested in application development</p>
    <Link to="/work"><button>See My Work 🡒</button></Link>
  </Layout>
)

export default IndexPage
