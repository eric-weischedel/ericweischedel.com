import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Eric Weischedel" />
    <h1>Contact</h1>
    <p>Email: yshuttle@gmail.com</p>
    <p>Phone: 717-380-2757</p>
    <p>LinkedIn: in/eric-weischedel/</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
