import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import GroupsList from "../components/section/LocalGroups/GroupsList"
import Submit from "../components/section/LocalGroups/Submit"
import WereSocial from "../components/section/Home/WereSocial"

class LocalGroups extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const localGroups = this.props.data.allWordpressWpLocalGroups.edges
    const groupAges = this.props.data.allWordpressWpGroupAge
    const groupCategories = this.props.data.allWordpressWpGroupCategory

    const wereSocialImages = acf._att_were_social_images
    const wereSocialHash = acf._att_were_social_hash

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <GroupsList
          data={localGroups}
          groupAge={groupAges}
          groupCategories={groupCategories}
        />
        <Submit />
        <WereSocial data={{ wereSocialImages, wereSocialHash }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalGroups($id: Int!) {
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

    allWordpressWpLocalGroups {
      edges {
        node {
          slug
          title
          group_age
          group_category
          acf {
            _att_group_excerpt
            _att_group_featured_img {
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

    allWordpressWpGroupAge {
      edges {
        node {
          wordpress_id
          name
          count
          taxonomy {
            name
          }
        }
      }
    }

    allWordpressWpGroupCategory {
      edges {
        node {
          wordpress_id
          name
          count
          taxonomy {
            name
          }
        }
      }
    }
  }
`

export default LocalGroups
