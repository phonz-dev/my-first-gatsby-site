import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull, posing at the couch and looking stoically at the camera"
        src="../images/clifford.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
