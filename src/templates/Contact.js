import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import FormLink from "../components/section/Contact/FormLinks"
import WereSocial from "../components/section/Home/WereSocial"

class Contact extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const formLinks = acf._att_form_links

    const wereSocialImages = acf._att_were_social_images
    const wereSocialHash = acf._att_were_social_hash

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <FormLink data={formLinks} />
        <WereSocial data={{ wereSocialImages, wereSocialHash }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query ContactQuery($id: Int!) {
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

        _att_form_links {
          title
          icon
          content
          internal_external
          wordpress_internal
          external
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
  }
`

export default Contact
