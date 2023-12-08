import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi I'm Apram Ahuja</h1>
    <p>Welcome to the About Page</p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
