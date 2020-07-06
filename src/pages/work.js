import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="Contact Eric Weischedel" />
    <h1>My Work</h1>
    <p>Hoodat: Mobile app for remembering names</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
