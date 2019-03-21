import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/Airdrie2020/HeroImage"
import Intro from "../components/section/Airdrie2020/Video/Intro"
import GetInvolved from "../components/section/Airdrie2020/Video/GetInvolved"

class Airdrie2020Video extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const introTitleTop = acf._att_video_intro_title_top
    const introTitleBot = acf._att_video_intro_title_bot
    const introTitleBg = acf._att_video_intro_bg
    const introContent = acf._att_video_intro_content

    const involvedTitle = acf._att_video_get_involved
    const involvedLink = acf._att_video_get_involved_link

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroTitle, heroColour, heroImg, herologo }} />
        <Intro
          data={{ introTitleTop, introTitleBot, introTitleBg, introContent }}
        />
        <GetInvolved data={{ involvedTitle, involvedLink }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query Airdrie2020Video($id: Int!) {
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

        _att_video_intro_title_top
        _att_video_intro_title_bot
        _att_video_intro_bg
        _att_video_intro_content

        _att_video_get_involved
        _att_video_get_involved_link
      }
    }
  }
`

export default Airdrie2020Video
