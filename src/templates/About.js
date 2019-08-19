import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import WeBelieve from "../components/section/AboutPage/WeBelieve"
import Hashtag from "../components/section/AboutPage/Hashtag"
import Pillars from "../components/section/AboutPage/Pillars"
import KeyStatsTop from "../components/section/AboutPage/KeyStatsTop"
import BulletImage from "../components/section/AboutPage/BulletImage"
import KeyStatsBot from "../components/section/AboutPage/KeyStatsBot"
import QuickLinkNoImg from "../components/section/AboutPage/QuickLinkNoImg"
import EventSlider from "../components/section/AboutPage/EventSlider"

class About extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    // Hero Image data feidls. //
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title
    // We Believe Section data fields. //
    const weBelieveHash = acf._att_we_believe_hash
    const weBelieveTitleTop = acf._att_believe_title_top
    const weBelieveTitleBot = acf._att_believe_title_bot
    const weBelieveBg = acf._att_believe_title_bg
    const weBelieveIntro = acf._att_believe_blue_intro
    const weBelieveContent = acf._att_believe_content
    // Hashtag section data fields. //
    const hashtagImage = acf._att_hashtag_sec_img
    const hashtagTitle = acf._att_hashtag_sec_hashtag
    // The pillars data fields. //
    const pillarsHash = acf._att_pillars_hash
    const pillarsTitle = acf._att_pillars_main_title
    const pillars = acf._att_pillars
    const pillarsContent = acf._att_pillars_bot
    // Key stats top data fields. //
    const KeyStatsTopHash = acf._att_key_stats_hash
    const KeyStatsTopTitle = acf._att_key_stats_title
    const KeyStatsTopStats = acf._att_key_stats
    // Bullets with images data fields. //
    const bulletImageSections = acf._att_bp_by_img_secs
    // Bottom key stats data fields. //
    const keyStatsBot = acf._att_key_stats_blue
    // Quick Links data fields. //
    const quickLinks = acf._att_quick_links
    // Event slider data fields. //
    const eventSliderHash = acf._att_events_slider_hash
    const eventSlider = acf._att_events_slider

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <WeBelieve
          data={{
            weBelieveHash,
            weBelieveTitleTop,
            weBelieveTitleBot,
            weBelieveBg,
            weBelieveIntro,
            weBelieveContent,
          }}
        />

        {/* <Pillars
          data={{ pillarsHash, pillarsTitle, pillars, pillarsContent }}
        /> */}
        <KeyStatsTop
          data={{ KeyStatsTopHash, KeyStatsTopTitle, KeyStatsTopStats }}
        />
        <BulletImage data={{ bulletImageSections }} />
        <Hashtag data={{ hashtagImage, hashtagTitle }} />
        {/* <KeyStatsBot data={{ keyStatsBot }} /> */}
        <QuickLinkNoImg data={{ quickLinks }} />
        <EventSlider data={{ eventSliderHash, eventSlider }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query AbutPage($id: Int!) {
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

        _att_we_believe_hash
        _att_believe_title_top
        _att_believe_title_bot
        _att_believe_title_bg
        _att_believe_blue_intro
        _att_believe_content

        _att_hashtag_sec_hashtag
        _att_hashtag_sec_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
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

        _att_bp_by_img_secs {
          title
          image_title
          bullet_points {
            bullet
          }
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

        _att_key_stats_blue {
          type
          text
          number
          percent
          money
          stat
        }

        _att_quick_links {
          title
          content
          button_text
          page_slug
        }

        _att_events_slider_hash
        _att_events_slider {
          name
          description
          action_word
          link
          image_one {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image_two {
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
  }
`
export default About
