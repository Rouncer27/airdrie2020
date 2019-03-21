import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor } from "../components/styles/commons/Buttons"

class SingleLocalEvent extends Component {
  render() {
    const acf = this.props.data.wordpressWpLocalEvents.acf
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
  query LocalEvent($id: Int!) {
    wordpressWpLocalEvents(wordpress_id: { eq: $id }) {
      acf {
        _att_page_hero_title
        _att_page_hero_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_event_date
        _att_event_location
        _att_event_location_google
        _att_event_title
        _att_event_group
        _att_event_group_description
        _att_event_main_content
        _att_event_learn_more
      }
    }
  }
`

export default SingleLocalEvent
