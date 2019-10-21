import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import PostsList from "../components/section/News/PostsList"
import WereSocial from "../components/section/Home/WereSocial"

class News extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf

    const metaTitle = acf._att_meta_title
    const metaDescription = acf._att_meta_description
    const metaImage = acf._att_meta_image.localFile.publicURL

    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const wereSocialImages = acf._att_were_social_images
    const wereSocialHash = acf._att_were_social_hash

    const posts = this.props.data.allWordpressPost.edges

    return (
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          metaImg={metaImage}
          location={this.props.location.pathname}
        />
        <HeroImage data={{ heroImage, heroTitle }} />
        <PostsList data={posts} />
        <WereSocial data={{ wereSocialImages, wereSocialHash }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query NewsBlogQuery($id: Int!) {
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

    allWordpressPost {
      edges {
        node {
          slug
          title
          date
          acf {
            _att_excerpt
            _att_main_content
            _att_author
            _att_featured_image {
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
  }
`

export default News
