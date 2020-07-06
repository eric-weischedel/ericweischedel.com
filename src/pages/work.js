import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"

const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <PageTitle title="My Work" />
    <p>Hoodat: Mobile app for remembering names</p>
  </Layout>
)

export default WorkPage
