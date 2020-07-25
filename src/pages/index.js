import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexTitle from "../components/indexTitle"
import { ArrowRight } from "react-feather";

import Hero from "../images/undraw_solution_mindset.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexTitle />
    <div className="indexContainer">
      <div className="textPanel">
        <p className="homeText paragraph">
          Creative developer focused on delivering clean code and reliable solutions for your system. Let's build something awesome.
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
        <img src={Hero} alt=""/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
