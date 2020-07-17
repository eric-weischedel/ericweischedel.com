import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"
import Hero1 from "../images/undraw_source_code_xx2e.svg"
import Hero2 from "../images/undraw_solution_mindset_34bi.svg"

function getRandomHero() {
  const idx = Math.floor(Math.random() * 2);
  return [Hero1, Hero2][idx]
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="indexContainer">
      <div className="textPanel">
        <IndexTitle />
        <p className="homeText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc
          tristique et est suspendisse volutpat volutpat lacus. Massa nunc
          tristique et est suspendisse volutpat volutpat lacus.
        </p>
        <Link to="/work">
          <button className="cta">See My Work 🡒</button>
        </Link>
      </div>
      <div className="imagePanel">
        <img src={getRandomHero()} alt=""/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
