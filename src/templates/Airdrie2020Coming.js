import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/Airdrie2020/HeroImage"
import Intro from "../components/section/Airdrie2020/GetInvolved/Intro"
import AllPackages from "../components/section/Airdrie2020/Coming/AllPackages"
import AirdriePicks from "../components/section/Airdrie2020/Coming/AirdriePicks"

export default class Airdrie2020Coming extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const introTitleTop = acf._att_get_inv_intro_title_top
    const introTitleBot = acf._att_get_inv_intro_title_bot
    const introTitleBG = acf._att_get_inv_intro_title_bg
    const introContentIntro = acf._att_get_inv_intro_content_blue
    const introContent = acf._att_get_inv_intro_content

    const packages = this.props.data.allWordpressWpPackages.edges

    const picksTitleTop = acf._att_ap_title_top
    const picksTitleBot = acf._att_ap_title_bot
    const picksIntro = acf._att_ap_intro
    const picksVote = acf._att_ap_vote
    const picksEats = acf._att_ap_eat
    const picksStays = acf._att_ap_stay
    const picksPlays = acf._att_ap_play

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroTitle, heroColour, heroImg, herologo }} />
        <Intro
          data={{
            introTitleTop,
            introTitleBot,
            introTitleBG,
            introContentIntro,
            introContent,
          }}
        />
        <AllPackages data={{ packages }} />
        <AirdriePicks
          data={{
            picksTitleTop,
            picksTitleBot,
            picksIntro,
            picksVote,
            picksEats,
            picksStays,
            picksPlays,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query Coming($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _att_page_hero_title
        _att_page_hero_bc
        _att_page_hero_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_page_hero_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_get_inv_intro_title_top
        _att_get_inv_intro_title_bot
        _att_get_inv_intro_title_bg
        _att_get_inv_intro_content_blue
        _att_get_inv_intro_content

        _att_ap_title_top
        _att_ap_title_bot
        _att_ap_intro
        _att_ap_vote
        _att_ap_eat {
          title
          comment
          handle
        }
        _att_ap_stay {
          title
          comment
          handle
        }
        _att_ap_play {
          title
          comment
          handle
        }
      }
    }

    allWordpressWpPackages {
      edges {
        node {
          slug
          acf {
            _att_page_hero_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            _att_pack_name
            _att_pack_excerpt
          }
        }
      }
    }
  }
`
