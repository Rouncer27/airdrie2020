import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class pages extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Pages Template</h1>
        <section id="pillarsgames">
          <h1>This is the Default Page</h1>
        </section>
      </Layout>
    )
  }
}

export default pages
