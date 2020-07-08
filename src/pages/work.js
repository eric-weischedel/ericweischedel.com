import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import Badges from "../components/badges"

import Firebase from "../images/firebase-1.svg"
import Vue from "../images/icons8-vue-js.svg"
import ReactJS from "../images/react-2.svg"
import JavaScript from "../images/javascript.svg"
import TypeScript from "../images/typescript.svg"
import Mongo from "../images/mongo.svg"
import CSharp from "../images/c--4.svg"


const WorkPage = () => (
  <Layout>
    <SEO title="My Work" />
    <PageTitle title="My Work" />
    <p>TECHNOLOGIES</p>
    <Badges images={[Firebase, Vue, ReactJS, JavaScript, TypeScript, Mongo, CSharp]}/>
  </Layout>
)

export default WorkPage
