import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import WorkEntry from "../components/workEntry"
import SecondaryAction from "../components/secondaryAction"

import Vue from "../images/icons8-vue-js.svg"
import JS from "../images/javascript.svg"
import CSharp from "../images/c--4.svg"
import TS from "../images/typescript.svg"
import Mongo from "../images/mongo.svg"
import Node from "../images/node.svg"
import ReactJS from "../images/react-2.svg"
import HTML from "../images/html-5.svg"
import CSS from "../images/css-5.svg"

import Listrak from "../images/listrak.png"
import Hoodat from "../images/hoodat.jpg"

import ListrakImg from "../components/gatsbyImages/listrakImg";
import HoodatImg from "../components/gatsbyImages/hoodatImg";
import PortfolioImg from "../components/gatsbyImages/portfolioImg";

const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <div className="workContainer">
      <PageTitle title="My Work" />
      <WorkEntry
        title="Email List Filtering Widget"
        subtitle="Listrak, Inc."
        badgeImages={[Vue, JS, CSharp]}
        desc={["Listrak is an eCommerce marketing automation platform and CRM. The platform includes a filter tool for B2B Enterprise SaaS clients to define audiences. The purpose of this project was to create an improved filter tool. I worked with a team of developers in an Agile Scrum environment.", "Technologies used included .NET Framework, C#, JavaScript, Vue.js, HTML/CSS, SQL Server, Git, and the Atlassian software suite."]}
        img={Listrak}
        links={[
          {
            title: "Learn More About the Filter",
            url: "https://help.listrak.com/en/articles/3951597-introducing-segment-filter-2-0-beta"
          },
          {
            title: "View App",
            url: "http://listrak.com"
          }
        ]}
      >
        <ListrakImg />
      </WorkEntry>
      <WorkEntry
        title="Hoodat: Remember Names"
        subtitle="Capstone Project at University"
        badgeImages={[ReactJS, TS, Node, Mongo]}
        desc={["Mobile app to help you remember names and faces."]}
        img={Hoodat}
        links={[
          {
            title: "Get the App on Google Play",
            url: "https://google.com"
          },
          {
            title: "View Code Repository on GitHub",
            url: "http://github.com"
          }
        ]}
      >
        <HoodatImg />
      </WorkEntry>
      <WorkEntry
        title="Portfolio Website"
        desc={["I designed and developed a personal portfolio website to showcase my work and skills (yes, it's this website). The site is both desktop and mobile friendly, and it features four dynamic pages.", "I developed the site using Gatsby, a framework on top of ReactJS. The site is hosted on GitHub Pages."]}
        badgeImages={[ReactJS, JS, HTML, CSS]}
        img={Hoodat}
        links={[
          {
            title: "View Source Code",
            url: "https://github.com/eric-weischedel/ericweischedel.com"
          }
        ]}
      >
        <PortfolioImg />
      </WorkEntry>
      <div className="seeMore">
        <span className="promptText">Want to learn more?</span>
        <SecondaryAction text="See About Me" link="/about" />
      </div>
    </div>
  </Layout>
)

export default WorkPage
