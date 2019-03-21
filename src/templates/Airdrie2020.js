import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/Airdrie2020/HeroImage"
import QuickIconLinks from "../components/section/Airdrie2020/QuickIconLinks"
import LocalAthlets from "../components/section/Airdrie2020/LocalAthlets"
import AthleteForm from "../components/section/Airdrie2020/AthleteForm"
import Sponsors from "../components/section/Airdrie2020/Sponsors"

class Airdrie2020 extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const quickIcons = acf._att_quick_icon_links

    const localAthletsTitle = acf._att_local_athletes_title
    const localAthletsBg = acf._att_local_athletes_bg
    const localAthletsIntro = acf._att_local_athletes_intro
    const localAthlets = acf._att_local_athletes

    const athletsFormTitle = acf._att_athletes_form_title
    const athletsFormContent = acf._att_athletes_form_content
    const athletsFormActive = acf._att_athletes_form

    const sponsorTitleTop = acf._att_sponsors_video_title_top
    const sponsorTitleBot = acf._att_sponsors_video_title_bot
    const sponsorVideoLink = acf._att_sponsors_video
    const sponsorSecondTitle = acf._att_sponsor_become_title
    const sponsorBg = acf._att_sponsor_become_bg
    const sponsorContent = acf._att_sponsor_become_content
    const sponsorLinkTitle = acf._att_sponsor_become_link_title
    const sponsorBtnText = acf._att_sponsor_become_btn_text
    const sponsorPDF = acf._att_sponsor_become_pdf
    const sponsorLogos = acf._att_sponsors_logos

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroTitle, heroColour, heroImg, herologo }} />
        <QuickIconLinks data={{ quickIcons }} />
        <LocalAthlets
          data={{
            localAthletsTitle,
            localAthletsBg,
            localAthletsIntro,
            localAthlets,
          }}
        />
        <AthleteForm
          data={{ athletsFormTitle, athletsFormContent, athletsFormActive }}
        />
        <Sponsors
          data={{
            sponsorTitleTop,
            sponsorTitleBot,
            sponsorVideoLink,
            sponsorSecondTitle,
            sponsorBg,
            sponsorContent,
            sponsorLinkTitle,
            sponsorBtnText,
            sponsorPDF,
            sponsorLogos,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query Airdrie2020($id: Int!) {
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

        _att_quick_icon_links {
          icon
          title
          internal_external
          external
        }

        _att_local_athletes_title
        _att_local_athletes_bg
        _att_local_athletes_intro
        _att_local_athletes {
          name
          bio_title
          bio_content
          action_word
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

        _att_athletes_form_title
        _att_athletes_form_content
        _att_athletes_form

        _att_sponsor_become_title
        _att_sponsor_become_bg
        _att_sponsor_become_content
        _att_sponsor_become_link_title
        _att_sponsor_become_btn_text
        _att_sponsors_video_title_top
        _att_sponsors_video_title_bot
        _att_sponsors_video
        _att_sponsor_become_pdf {
          localFile {
            publicURL
          }
        }
        _att_sponsors_logos {
          links
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
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

export default Airdrie2020
