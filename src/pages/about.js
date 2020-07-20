import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import SecondaryAction from "../components/secondaryAction"

import EricImg from "../components/gatsbyImages/ericImg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <PageTitle title="About Me" />
    <div className="aboutContainer">
      <div className="textPanel">
        <div className="aboutSummary">
          <h2 className="heading">My Background</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc tristique et est suspendisse volutpat volutpat lacus. Massa nunc tristique et est suspendisse volutpat volutpat lacus. Amet sapien ac leo aliquam donec libero tellus nisl. Dignissim eu vivamus condimentum mattis lacinia. Sed risus vitae elementum elit viverra pulvinar lacus, porta.</p>
          <p className="paragraph">Massa nunc tristique et est suspendisse volutpat volutpat lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <br />
          <h2 className="heading">What I Offer</h2>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc tristique et est suspendisse volutpat volutpat lacus. Massa nunc tristique et est suspendisse volutpat volutpat lacus. Amet sapien ac leo aliquam donec libero tellus nisl. Dignissim eu vivamus condimentum mattis lacinia. Sed risus vitae elementum elit viverra pulvinar lacus, porta. Massa nunc tristique et est suspendisse volutpat volutpat lacus. </p>
          <br />
        </div>
        <div className="seeMore">
          <span className="promptText">Interested in reaching out?</span>
          <SecondaryAction text="Get In Touch" link="/contact" />
        </div>
      </div>
      <div className="imagePanel">
        <EricImg />
      </div>
    </div>
  </Layout>
)

export default AboutPage
