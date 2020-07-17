import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import ContactImage from "../images/undraw_contact_us_15o2.svg"
import { primary, secondary } from "../styles/colors.js";
import { Linkedin, Phone, Mail } from "react-feather"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contactContainer">
      <div className="textPanel">
        <PageTitle title="Contact Me"/>
        <div className="medium">
          <Mail color={secondary} size={22} strokeWidth={2}/>
          <p>yshuttle@gmail.com</p><br />
        </div>
        <div className="medium">
          <Phone color={secondary} size={22} strokeWidth={2}/>
          <p>717-380-2757</p><br />
        </div>
        <div className="medium">
          <Linkedin color={secondary} size={22} strokeWidth={2}/>
          <p><a href="https://linkedin/com/in/eric-weischedel">in/eric-weischedel</a></p>
        </div>
      </div>
      <div className="imagePanel">
        <img src={ContactImage} alt=""/>
      </div>
    </div>
  </Layout>
)

export default ContactPage
