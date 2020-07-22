import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"
import { ArrowRight } from "react-feather";

import Hero1 from "../images/undraw_source_code_xx2e.svg"
import Hero2 from "../images/undraw_solution_mindset_34bi.svg"

function getRandomHero() {
  const idx = Math.floor(Math.random() * 2);
  return [Hero1, Hero2][idx]
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexTitle />
    <div className="indexContainer">
      <div className="textPanel">
        <p className="homeText paragraph">
          Creative developer focused on delivering clean code and reliable solutions for your system. 2021 grad with experience in two developer positions and numerous projects. Let's build something awesome.
        </p>
        <div className="ctaContainer">
          <Link to="/work">
            <button className="cta">
              <span>See My Work &nbsp;</span>
              <ArrowRight color="white" strokeWidth={2} />
            </button>
          </Link>
        </div>
      </div>
      <div className="imagePanel">
        <img src={getRandomHero()} alt=""/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
