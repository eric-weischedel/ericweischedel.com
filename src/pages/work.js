import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import WorkEntry from "../components/workEntry"

import Listrak from "../images/listrak.png"


const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <PageTitle title="My Work" />
    <WorkEntry
      title="Email List Filtering Widget"
      subtitle="Listrak, Inc."
      desc={["Listrak is an eCommerce marketing automation platform and CRM. The platform includes a filter tool for B2B Enterprise SaaS clients to define audiences. The purpose of this project was to create an improved filter tool. I worked with a team of developers in an Agile Scrum environment.", "Technologies used included .NET Framework, C#, JavaScript, Vue.js, HTML/CSS, SQL Server, Git, and the Atlassian software suite."]}
      img={Listrak} />
  </Layout>
)

export default WorkPage
