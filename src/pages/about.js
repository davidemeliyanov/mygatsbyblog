import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import gatsbyPng from '../images/gatsby-icon.png'

const AboutPage = () => (
  <Layout>
    <h1>About Page</h1>
    <img src={gatsbyPng} alt="gatsby icon" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default AboutPage
