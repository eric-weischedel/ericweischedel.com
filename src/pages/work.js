import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import WorkEntry from "../components/workEntry"
import SecondaryAction from "../components/secondaryAction"

import ListrakImg from "../components/gatsbyImages/listrakImg";
import PortfolioImg from "../components/gatsbyImages/portfolioImg";
import ClueImg from "../components/gatsbyImages/clueImg";
import WIPImg from "../components/gatsbyImages/wipImg";

const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <div className="workContainer">
      <PageTitle title="My Work" />

      <WorkEntry
        title="Continuous Integration Tests "
        subtitle="HomeX — Backend Developer Intern"
        desc={["Accounts", "CI/CD"]}
        tags={[
          "CircleCI", "Spinnaker", "Postman", "NodeJS", "TypeScript", "Git", "Software Testing", "Continuous Integration", "Continuous Deployment"
        ]}
        links={[
          {
            title: "Watch Presentation",
            url: "https://youtube.com"
          }
        ]}
      >
        <WIPImg />
      </WorkEntry>

      <WorkEntry
        title="Email List Filter Tool"
        subtitle="Listrak — Application Developer Intern"
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
            title: "View App",
            url: "http://listrak.com"
          }
        ]}
      >
        <ListrakImg />
      </WorkEntry>

      <WorkEntry
        title="ClueMeIn"
        subtitle="Personal Project"
        desc={["Clue Me In is a React Native mobile app that improves the user's chances of winning the boardgame Clue. Its main feature is displaying the likelihood that each card in the game corresponds to the true circumstance of the murder. This feature allows the user to make better choices and ultimately conclude the circumstances of the murder faster than the opponents."]}
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

      <WorkEntry
        title="Portfolio Website"
        subtitle="Personal Project"
        desc={["I designed and developed a personal portfolio website to showcase my work and skills. The site is both desktop and mobile friendly, and it features four dynamic pages.", "I developed the site using Gatsby, a framework on top of ReactJS. The site is hosted on GitHub Pages."]}
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
        title="Hoodat: Remember Names"
        subtitle="Senior Project at Messiah University"
        desc={["Mobile app to help you remember names and faces by quizzing you. I am serving as the product owner and lead backend developer on an agile team of four."]}
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

      <div className="seeMore">
        <span className="promptText">Want to learn more?</span>
        <SecondaryAction text="See About Me" link="/about" />
      </div>
    </div>
  </Layout>
)

export default WorkPage
