import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import ContactImage from "../images/undraw_contact_us_15o2.svg"
import { Linkedin, Phone, Mail } from "react-feather"
import SecondaryAction from "../components/secondaryAction"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageTitle title="Contact Me" />
    <div className="contactContainer">
      <div className="textPanel">
        <h2 className="heading">Let's Chat!</h2>
        <p className="paragraph">
          If you want to get in touch with me for any reason, please don't hesitate to reach out. You can contact me via any of the following media. I look forward to hearing from you.
        </p>
        <div className="mediaContainer">
          <div className="mediaItem">
            <p className="heading2">Email</p>
            <p className="paragraph">yshuttle@gmail.com</p>
          </div>
          <div className="mediaItem">
            <p className="heading2">Phone</p>
            <p className="paragraph">+1 717-380-2757</p>
          </div>
          <div className="mediaItem">
            <p className="heading2">LinkedIn</p>
            <p className="paragraph"><a href="https://linkedin.com/in/eric-weischedel">in/eric-weischedel</a></p>
          </div>
        </div>
        <br /><br />
        <div className="seeMore">
          <span className="promptText">Want to learn more?</span>
          <SecondaryAction text="See About Me" link="/about" />
        </div>

      </div>
      <div className="imagePanel">
        <img src={ContactImage} alt=""/>
      </div>
    </div>
  </Layout>
)

export default ContactPage
