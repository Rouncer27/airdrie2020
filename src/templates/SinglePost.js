import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"

import PostHeaderStyled from "../components/section/SinglePost/PostHeader"
import PostArticle from "../components/section/SinglePost/PostArticle"
import PostSidebar from "../components/section/SinglePost/PostSidebar"
import PostNav from "../components/section/SinglePost/PostNav"

const ArticleWrapper = styled(StandardWrapper)`
  .postart {
    width: 100%;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(70% - 4rem);
      margin-right: 4rem;
    }
  }

  .postside {
    width: 100%;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(30% - 4rem);
      margin-left: 4rem;
    }
  }
`

class SinglePost extends Component {
  render() {
    const slug = this.props.data.wordpressPost.slug
    const title = this.props.data.wordpressPost.title
    const date = this.props.data.wordpressPost.date
    const author = this.props.data.wordpressPost.acf._att_author
    const img = this.props.data.wordpressPost.acf._att_featured_image
    const content = this.props.data.wordpressPost.acf._att_main_content
    const categories = this.props.data.wordpressPost.categories
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <PostHeaderStyled />

        <ArticleWrapper>
          <PostArticle
            data={{ title, date, author, img, content, categories }}
          />
          <PostSidebar />
        </ArticleWrapper>

        <PostNav data={{ slug }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      slug
      title
      date
      categories {
        name
      }
      acf {
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
`

export default SinglePost
