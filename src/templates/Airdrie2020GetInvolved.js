import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/Airdrie2020/HeroImage"
import Intro from "../components/section/Airdrie2020/GetInvolved/Intro"
import Dance from "../components/section/Airdrie2020/GetInvolved/Dance"
import Fundraisers from "../components/section/Airdrie2020/GetInvolved/Fundraisers"
import Board from "../components/section/Airdrie2020/GetInvolved/Board"

class Airdrie2020GetInvolved extends Component {
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

    const nextTitle = acf._att_next_performance_title
    const nextOrg = acf._att_next_performance_org
    const nextDate = acf._att_next_performance_date
    const nextLoc = acf._att_next_performance_loc
    const nextFB = acf._att_next_performance_fb
    const nextImg = acf._att_next_performance_image
    const nextData = { nextTitle, nextOrg, nextDate, nextLoc, nextFB, nextImg }

    const learnTitle = acf._att_learn_dance_title
    const learnDate = acf._att_learn_dance_date
    const learnLoc = acf._att_learn_dance_location
    const learnFB = acf._att_learn_dance_fb
    const learnImg = acf._att_learn_dance_img
    const learnData = { learnTitle, learnDate, learnLoc, learnFB, learnImg }

    const fundraisers = acf._att_fundraisers

    const boardTitle = acf._att_board_title
    const boardMembers = acf._att_board_members

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
        <Board data={{ boardTitle, boardMembers }} />
        <Dance data={{ nextData, learnData }} />
        <Fundraisers data={{ fundraisers }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query GetInvolved($id: Int!) {
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

        _att_next_performance_title
        _att_next_performance_org
        _att_next_performance_date
        _att_next_performance_loc
        _att_next_performance_fb
        _att_next_performance_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_learn_dance_title
        _att_learn_dance_date
        _att_learn_dance_location
        _att_learn_dance_fb
        _att_learn_dance_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_vol_intro
        _att_vol_link
        _att_spon_intro
        _att_spon_pdf {
          localFile {
            publicURL
          }
        }
        _att_love_sponsors {
          title
          intro
          pdf {
            localFile {
              publicURL
            }
          }
        }

        _att_fundraisers {
          date_time
          name
          description
          link
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        _att_board_title
        _att_board_members {
          name
          email
          position
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Airdrie2020GetInvolved
