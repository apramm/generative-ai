import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Exploring Generative AI">
      <p>Making this blogging website to explore the capabilities and limitations of rapidly evolving methods to produce graphics  w</p>
      <StaticImage
        alt="Sage Meditating in the Valleys of Kashmir"
        src="../images/sage.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage