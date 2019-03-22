import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSlider from "../components/section/Home/HeroSlider"
import WhyAirdrie from "../components/section/Home/WhyAirdrie"
import HomeGame from "../components/section/Home/HomeGame"
import QuickLinks from "../components/section/Home/QuickLinks"
import GetInvolved from "../components/section/Home/GetInvolved"
import LetsTalk from "../components/section/Home/LetsTalk"
import WereSocial from "../components/section/Home/WereSocial"

class IndexPage extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroSlider = acf._att_hero_image_slider

    const whyAirdrieTitle = acf._att_why_airdrie_title
    const whyAirdrieContent = acf._att_why_airdrie_content
    const whyAirdrieImage = acf._att_why_airdrie_bench_img
    const whyAirdrieVideo = acf._att_why_airdrie_videos_link
    const whyAirdrieHash = acf._att_why_airdrie_hash

    const homeGameImage = acf._att_hotg_img
    const homeGamrLink = acf._att_hotg_link
    const homeGameHash = acf._att_home_game_hash

    const qlLocalExcerpt = acf._att_ql_local_excerpt
    const qlLocalImage = acf._att_ql_local_img
    const qlGroupExcerpt = acf._att_ql_group_excerpt
    const qlGroupImage = acf._att_ql_group_img
    const qlNewsExcerpt = acf._att_ql_news_excerpt
    const qlNewsImage = acf._att_ql_news_img
    const qlSectionHash = acf._att_ql_hash

    const getInvovoledLinks = acf._att_get_involved_links
    const getInvovoledHash = acf._att_get_involved_hash

    const letsTalkTitle = acf._att_lets_talk_title
    const letsTalkHashtag = acf._att_lets_talk_hashtag
    const letsTalkTweets = acf._att_lets_talk_tweets
    const letsTalkHash = acf._att_lets_talk_hash

    const wereSocialImages = acf._att_were_social_images
    const wereSocialHash = acf._att_were_social_hash

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroSlider data={heroSlider} />
        <WhyAirdrie
          data={{
            whyAirdrieTitle,
            whyAirdrieContent,
            whyAirdrieImage,
            whyAirdrieVideo,
            whyAirdrieHash,
          }}
        />
        <HomeGame data={{ homeGameImage, homeGamrLink, homeGameHash }} />
        <QuickLinks
          data={{
            qlLocalExcerpt,
            qlLocalImage,
            qlGroupExcerpt,
            qlGroupImage,
            qlNewsExcerpt,
            qlNewsImage,
            qlSectionHash,
          }}
        />
        <GetInvolved data={{ getInvovoledLinks, getInvovoledHash }} />
        <LetsTalk
          data={{
            letsTalkTitle,
            letsTalkHashtag,
            letsTalkTweets,
            letsTalkHash,
          }}
        />
        <WereSocial data={{ wereSocialImages, wereSocialHash }} />
      </Layout>
    )
  }
}

export const homeQuery = graphql`
  {
    wordpressPage(slug: { eq: "home" }) {
      acf {
        _att_hero_image_slider {
          title
          hero_image {
            id
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        _att_why_airdrie_bench_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_hotg_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_ql_local_excerpt
        _att_ql_local_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_ql_group_excerpt
        _att_ql_group_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_ql_news_excerpt
        _att_ql_news_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_get_involved_hash
        _att_get_involved_links {
          title
          excerpt
          page_slug
          link {
            post_name
          }
          icon
        }

        _att_lets_talk_title
        _att_lets_talk_hashtag
        _att_lets_talk_hash
        _att_lets_talk_tweets {
          content
          handle
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

        _att_page_hero_title
        _att_we_believe_hash
        _att_believe_title_top
        _att_believe_title_bot
        _att_believe_title_bg
        _att_believe_blue_intro
        _att_believe_content
        _att_hashtag_sec_hashtag
        _att_pillars_main_title
        _att_pillars_bot
        _att_key_stats_title
        _att_key_stats_hash
        _att_pillars_hash
        _att_events_slider_hash
        _att_why_airdrie_title
        _att_why_airdrie_content
        _att_why_airdrie_videos_link
        _att_hotg_link

        _att_why_airdrie_hash
        _att_home_game_hash
        _att_ql_hash
      }
    }
  }
`

export default IndexPage
