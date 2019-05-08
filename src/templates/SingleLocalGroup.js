import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor } from "../components/styles/commons/Buttons"

class SingleLocalGroup extends Component {
  render() {
    const acf = this.props.data.wordpressWpLocalGroups.acf
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const mainContent = acf._att_event_main_content
    const learnMore = acf._att_event_learn_more

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <article>
          <StandardWrapper>
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
            {learnMore && (
              <NormalAchor target="_blank" href={learnMore}>
                Learn More
              </NormalAchor>
            )}
          </StandardWrapper>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalGroup($id: Int!) {
    wordpressWpLocalGroups(wordpress_id: { eq: $id }) {
      title
    }
  }
`

export default SingleLocalGroup
