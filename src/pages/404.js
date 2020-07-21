import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"

import Hero from "../images/undraw_not_found_60pq.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageTitle title="Not Found" />
    <div className="notFoundContainer">
      <img src={Hero} alt="" />
    </div>
  </Layout>
)

export default NotFoundPage
