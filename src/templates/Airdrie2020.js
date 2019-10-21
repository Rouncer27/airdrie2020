import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/Airdrie2020/HeroImage"
import QuickIconLinks from "../components/section/Airdrie2020/QuickIconLinks"
import KeyStatsTop from "../components/section/AboutPage/KeyStatsTop"
import Sponsors from "../components/section/Airdrie2020/Sponsors"
import Pillars from "../components/section/AboutPage/Pillars"
import Tickets from "../components/section/Airdrie2020/Tickets"

class Airdrie2020 extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const metaTitle = acf._att_meta_title
    const metaDescription = acf._att_meta_description
    const metaImage = acf._att_meta_image.localFile.publicURL

    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const quickIcons = acf._att_quick_icon_links

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

    // The pillars data fields. //
    const pillarsHash = acf._att_pillars_hash
    const pillarsTitle = acf._att_pillars_main_title
    const pillars = acf._att_pillars
    const pillarsContent = acf._att_pillars_bot

    // Key stats top data fields. //
    const KeyStatsTopHash = acf._att_key_stats_hash
    const KeyStatsTopTitle = acf._att_key_stats_title
    const KeyStatsTopStats = acf._att_key_stats

    return (
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          metaImg={metaImage}
          location={this.props.location.pathname}
        />
        <HeroImage data={{ heroTitle, heroColour, heroImg, herologo }} />
        <QuickIconLinks data={{ quickIcons }} />
        <Pillars
          data={{ pillarsHash, pillarsTitle, pillars, pillarsContent }}
        />
        <KeyStatsTop
          data={{ KeyStatsTopHash, KeyStatsTopTitle, KeyStatsTopStats }}
        />
        <Tickets />
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
        _att_meta_title
        _att_meta_description
        _att_meta_image {
          localFile {
            publicURL
          }
        }

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

        _att_key_stats_hash
        _att_key_stats_title
        _att_key_stats {
          type
          text
          number
          percent
          money
          stat
        }

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
        _att_pillars_hash
        _att_pillars_main_title
        _att_pillars_bot
        _att_pillars {
          title
          content
        }
      }
    }
  }
`

export default Airdrie2020
