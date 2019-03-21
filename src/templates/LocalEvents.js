import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import EventsList from "../components/section/LocalEvents/EventsList"
import Submit from "../components/section/LocalEvents/Submit"
import WereSocial from "../components/section/Home/WereSocial"

class LocalEvents extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const localEvents = this.props.data.allWordpressWpLocalEvents.edges

    const wereSocialImages = acf._att_were_social_images
    const wereSocialHash = acf._att_were_social_hash

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <EventsList data={localEvents} />
        <Submit />
        <WereSocial data={{ wereSocialImages, wereSocialHash }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalEvents($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
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

        _att_were_social_hash
        _att_were_social_images {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    allWordpressWpLocalEvents {
      edges {
        node {
          slug
          acf {
            _att_page_hero_img {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            _att_event_title
            _att_event_excerpt
            _att_event_date
          }
        }
      }
    }
  }
`

export default LocalEvents
