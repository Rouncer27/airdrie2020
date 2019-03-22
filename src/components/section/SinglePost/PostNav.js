import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalLink } from "../../styles/commons/Buttons"

const PostNavStyled = styled.div`
  padding-bottom: 5rem;

  .postnav__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &--btn {
      margin-right: 2rem;
      margin-left: 2rem;
    }
  }
`

class PostNav extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressPost {
              edges {
                node {
                  slug
                  title
                }
              }
            }
          }
        `}
        render={data => {
          const totalStories = data.allWordpressPost.edges.length - 1
          const currentPost = data.allWordpressPost.edges.findIndex(post => {
            return post.node.slug === this.props.data.slug
          })
          const nextPost = currentPost > 0 ? currentPost - 1 : false
          const prevPost = currentPost < totalStories ? currentPost + 1 : false

          const nextPostSlug =
            nextPost || nextPost === 0
              ? data.allWordpressPost.edges[nextPost].node.slug
              : false

          const prevPostSlug = prevPost
            ? data.allWordpressPost.edges[prevPost].node.slug
            : false

          return (
            <PostNavStyled className="postnav">
              <StandardWrapper className="postnav__wrapper">
                <div className="postnav__container">
                  {nextPostSlug && (
                    <NormalLink
                      to={`/news/${nextPostSlug}`}
                      className="postnav__next postnav__container--btn"
                    >
                      Next Post
                    </NormalLink>
                  )}
                  <NormalLink
                    to="/news/"
                    className="postnav__home postnav__container--btn"
                  >
                    News Home
                  </NormalLink>
                  {prevPostSlug && (
                    <NormalLink
                      to={`/news/${prevPostSlug}`}
                      className="postnav__prev postnav__container--btn"
                    >
                      Previous Post
                    </NormalLink>
                  )}
                </div>
              </StandardWrapper>
            </PostNavStyled>
          )
        }}
      />
    )
  }
}

export default PostNav
