import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import InternalAction from "../components/internalAction"

import EricImg from "../components/gatsbyImages/ericImg"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <PageTitle title="About Me" />
    <div className="aboutContainer">
      <div className="textPanel">
        <div className="aboutSummary">
          <h2 className="heading">
            Hello World!{" "}
            <span role="img" aria-label="waving emoji">
              👋
            </span>
          </h2>
          <p className="paragraph">
            In 1998, I was born in <em>Lancaster, Pennsylvania,</em> where I
            grew up and live today.
          </p>
          <p className="paragraph">
            At a young age I gained an interest in computers through playing
            video games and solving IT problems for my family. I first dabbled
            into programming on my TI-84 graphing calculator in highschool.{" "}
            <b>I really enjoyed the logic behind it.</b>
          </p>
          <p className="paragraph">
            After graduating high school in 2017, I decided to major in Computer
            Science at <em>Messiah University.</em> While there, I loved my
            programming classes, especially a web development class where we
            built a full-stack app from scratch.{" "}
            <b>
              I soon decided I would pursue a career in software engineering.
            </b>
          </p>
          <p className="paragraph">
            To that end, I began working as an Application Developer Intern for{" "}
            <em>Listrak</em>. I had an amazing time there and learned a ton
            about the software industry. The following summer, I began working
            as a Backend Developer Intern for <em>HomeX.</em> The experience
            really expanded my horizons and increased my{" "}
            <b>passion for software engineering.</b>
          </p>
          <p className="paragraph">
            In May of 2021, I completed my final semester at Messiah University.
            I delivered my capstone project: Hoodat, a mobile app for
            remembering names, and I achieved my Bachelor of Science in Computer
            Science.
          </p>
          <p className="paragraph">
            After graduation I returned to HomeX to work as a full-time software
            engineer. I built the HomeX platform services for about one year. In
            2022, I switched teams to work on Schedule Engine, a home service
            booking platform. Later that year, Schedule Engine was acquired by
            ServiceTitan, and I continued to develop Schedule Engine.
          </p>
          <br />
          <h2 className="heading">What I'm Up To</h2>
          <p className="paragraph">
            Currently, I'm developing the Schedule Engine dashboard as a
            Software Engineer for ServiceTitan in Lancaster, Pennsylvania.
          </p>
        </div>
        <br />
        <div className="seeMore">
          <span className="promptText">Interested in reaching out?</span>
          <InternalAction text="Contact Me" link="/contact" />
        </div>
      </div>
      <div className="imagePanel">
        <EricImg />
      </div>
    </div>
  </Layout>
)

export default AboutPage
