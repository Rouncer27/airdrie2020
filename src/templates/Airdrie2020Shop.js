import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImageDif from "../components/section/Airdrie2020/HeroImageDif"
import Intro from "../components/section/Airdrie2020/Shop/Intro"
import ShopLink from "../components/section/Airdrie2020/Shop/ShopLink"

class Airdrie2020Shop extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const metaTitle = acf._att_meta_title
    const metaDescription = acf._att_meta_description
    const metaImage = acf._att_meta_image.localFile.publicURL

    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const introTitleTop = acf._att_shop_intro_title_top
    const introTitleBot = acf._att_shop_intro_title_bot
    const introTitleBg = acf._att_shop_intro_bg
    const introContent = acf._att_shop_intro_content

    const menImg = acf._att_shop_img_men
    const womenImg = acf._att_shop_img_women
    const childImg = acf._att_shop_img_child
    const shopLink = acf._att_shop_link
    const ticLink = acf._att_tickets_link

    return (
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          metaImg={metaImage}
          location={this.props.location.pathname}
        />
        <HeroImageDif data={{ heroTitle, heroColour, heroImg, herologo }} />
        <Intro
          data={{ introTitleTop, introTitleBot, introTitleBg, introContent }}
        />
        <ShopLink data={{ menImg, womenImg, childImg, shopLink, ticLink }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query Airdrie2020Shop($id: Int!) {
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

        _att_shop_intro_title_top
        _att_shop_intro_title_bot
        _att_shop_intro_bg
        _att_shop_intro_content

        _att_shop_img_men {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_shop_img_women {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_shop_img_child {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_shop_link
        _att_tickets_link
      }
    }
  }
`

export default Airdrie2020Shop
