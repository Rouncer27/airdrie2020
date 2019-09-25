import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor } from "../components/styles/commons/Buttons"

import HeroImage from "../components/section/Airdrie2020/HeroImage"

const SinglePackageStyled = styled.article`
  .pack-content {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(50% - 4rem);
      margin-right: 4rem;
    }
  }

  .pack-link {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(50% - 4rem);
      margin-left: 4rem;
    }
  }
  a {
    align-self: flex-start;
  }
`

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
        <SinglePackageStyled>
          <StandardWrapper className="pack-wrapper">
            <div
              className="pack-content"
              dangerouslySetInnerHTML={{ __html: mainContent }}
            />
            <div className="pack-link">
              <NormalAchor target="_blank" href={packLink}>
                Learn More
              </NormalAchor>
            </div>
          </StandardWrapper>
        </SinglePackageStyled>
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
