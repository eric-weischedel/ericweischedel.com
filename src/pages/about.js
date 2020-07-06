import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <PageTitle title="About Me"/>
    <p>Hi, I'm Eric</p>
  </Layout>
)

export default AboutPage
