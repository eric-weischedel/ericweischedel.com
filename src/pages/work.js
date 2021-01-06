import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import WorkEntry from "../components/workEntry"
import InternalAction from "../components/internalAction"

import ListrakImg from "../components/gatsbyImages/listrakImg";
import PortfolioImg from "../components/gatsbyImages/portfolioImg";
import ClueImg from "../components/gatsbyImages/clueImg";
import WIPImg from "../components/gatsbyImages/wipImg";
import HomeXImg from "../components/gatsbyImages/homexImg";
import YouTunesImg from "../components/gatsbyImages/youtunesImg";

const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <div className="workContainer">
      <PageTitle title="My Work" />

      <WorkEntry
        title="Automated Integration Tests"
        subtitle="HomeX — Backend Developer Intern"
        date="Summer 2020"
        desc={["HomeX is revolutionizing the home services industry with high quality software. I worked with a team of developers on a critical backend service. My primary contributions revolved around improving the release pipeline of the service, implementing continuous integration and continuous deployment (CI/CD). This increased the reliability of the service, and gave developers confidence to rapidly push changes."]}
        tags={[
          "CircleCI", "Spinnaker", "Postman", "NodeJS", "TypeScript", "REST API", "Git", "CI/CD"
        ]}
        links={[
          {
            title: "Explore HomeX",
            url: "https://homex.com"
          }
        ]}
      >
        <HomeXImg />
      </WorkEntry>

      <WorkEntry
        title="Email List Filter Tool"
        subtitle="Listrak — Application Developer Intern"
        date="Summer 2019"
        desc={["Listrak is an eCommerce marketing automation platform and CRM. The platform includes a filter tool for B2B Enterprise SaaS clients to define audiences. The purpose of this project was to create an improved filter tool. I worked with a team of developers in an Agile Scrum environment."]}
        tags={[
          ".NET Framework", "C#", "SQL", "Vue.js", "JavaScript", "HTML/CSS", "Git", "Atlassian Suite", "Agile"
        ]}
        links={[
          {
            title: "Learn More About the Filter",
            url: "https://help.listrak.com/en/articles/3951597-introducing-segment-filter-2-0-beta"
          },
          {
            title: "Explore Listrak",
            url: "http://listrak.com"
          }
        ]}
      >
        <ListrakImg />
      </WorkEntry>

      <WorkEntry
        title="Hoodat: Remember Names"
        subtitle="Senior Project at Messiah University"
        date="Fall 2020 to Spring 2021"
        desc={["Mobile app to help you remember names and faces by quizzing you. I am serving as the product owner and lead backend developer on an agile team of four.", "This project is to be completed by Spring 2021 as my capstone project at Messiah University. Feel free to check out the source code on GitHub."]}
        tags={[
          "React Native",
          "JavaScript",
          "NodeJS",
          "MongoDB"
        ]}
        links={[
          {
            title: "View Code on GitHub",
            url: "https://github.com/messiah-hoodat"
          }
        ]}
      >
        <WIPImg />
      </WorkEntry>

      <WorkEntry
        title="YouTunes"
        subtitle="Course Project at Messiah University"
        date="Fall 2018"
        desc={["YouTunes is a full-stack music kiosk web application. Users can listen to groovy tunes, view information about the music, and add their own songs to the app's ecosystem.", "I led a small team of developers to complete the app within one semester. By helping my teammates and coordinating meetings, we were able to deliver more features than expected. Along the way, we presented and demoed our progress in front of a mock client. I improved my ability to teach myself through researching various aspects of the technologies."]}
        tags={[
          "PHP", "MySQL", "HTML/CSS", "Smarty", "Scrum", "Agile"
        ]}
        links={[
          {
            title: "View Course Description",
            url: "http://messiah.smartcatalogiq.com/en/2019-2020/Undergraduate-Catalog/Undergraduate-Course-Offerings/CIS-Computer-Information-Science/200/CIS-291"
          }
        ]}
      >
        <YouTunesImg />
      </WorkEntry>

      <WorkEntry
        title="Portfolio Website"
        subtitle="Personal Project"
        date="July 2020"
        desc={["I designed and developed this personal portfolio website to showcase my work and skills. The site is both desktop and mobile friendly, and it features four dynamic pages.", "I developed the site using Gatsby, a framework on top of ReactJS. The site is hosted on GitHub Pages."]}
        tags={[
          "GatsbyJS",
          "ReactJS",
          "JavaScript",
          "HTML/CSS"
        ]}
        links={[
          {
            title: "View Code on GitHub",
            url: "https://github.com/eric-weischedel/ericweischedel.com"
          }
        ]}
      >
        <PortfolioImg />
      </WorkEntry>

      <WorkEntry
        title="ClueMeIn"
        subtitle="Personal Project"
        date="Q1 2020"
        desc={["ClueMeIn is a React Native mobile app that improves the user's chances of winning the boardgame Clue. Its main feature is displaying the likelihood that each card in the game corresponds to the true circumstance of the murder. This feature allows the user to make better choices and ultimately conclude the circumstances of the murder faster than the opponents."]}
        tags={[
          "React Native", "Expo.io", "JavaScript"
        ]}
        links={[
          {
            title: "View Code on GitHub",
            url: "https://github.com/eric-weischedel/clue"
          }
        ]}
      >
        <ClueImg />
      </WorkEntry>

      <div className="seeMore">
        <span className="promptText">Want to learn more?</span>
        <InternalAction text="See About Me" link="/about" />
      </div>
    </div>
  </Layout>
)

export default WorkPage
