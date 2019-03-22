import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor } from "../components/styles/commons/Buttons"

import HeroImage from "../components/section/Airdrie2020/HeroImage"

class SinglePackage extends Component {
  render() {
    const acf = this.props.data.wordpressWpPackages.acf
    const heroTitle = acf._att_page_hero_title
    const heroColour = acf._att_page_hero_bc
    const heroImg = acf._att_page_hero_image
    const herologo = acf._att_page_hero_logo

    const mainContent = acf._att_pack_main_content
    // const packName = acf._att_pack_name
    const packLink = acf._att_pack_link
    // const packLoction = acf._att_pack_location

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroTitle, heroColour, heroImg, herologo }} />
        <article>
          <StandardWrapper>
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
            <NormalAchor target="_blank" href={packLink}>
              Learn More
            </NormalAchor>
          </StandardWrapper>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query Package($id: Int!) {
    wordpressWpPackages(wordpress_id: { eq: $id }) {
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

        _att_pack_name
        _att_pack_main_content
        _att_pack_link
        _att_pack_location
      }
    }
  }
`

export default SinglePackage
