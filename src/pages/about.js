import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Eric Weischedel" />
    <h1>About Me</h1>
    <p>Hi, I'm Eric</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
