import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import SecondaryAction from "../components/secondaryAction"

import ListrakImg from "../components/gatsbyImages/listrakImg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="aboutContainer">
      <PageTitle title="About Me"/>

      <ListrakImg />

      <div className="seeMore">
        <span className="promptText">Interested in reaching out?</span>
        <SecondaryAction text="Get In Touch" link="/contact" />
      </div>
    </div>
  </Layout>
)

export default AboutPage
