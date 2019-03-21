import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const PostListStyled = styled.section`
  .postlist__wrapper {
    justify-content: flex-start;
  }

  .postlist__post {
    display: block;
    position: relative;
    width: calc(50%);
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      margin: 2rem;
    }

    &--image {
      position: relative;
      width: 100%;

      &--date {
        display: inline-block;
        position: absolute;
        top: -2.5rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        text-align: center;
        z-index: 100;
      }

      p {
        display: inline-block;
        margin: 0 auto;
        padding: 1rem 2rem;
        background: ${props => props.theme.white};
        color: ${props => props.theme.black};
      }
    }

    &--excerpt {
      width: 100%;

      h3 {
        color: ${props => props.theme.pacificBlue};
        font-weight: 500;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p {
        color: ${props => props.theme.black};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`

class PostsList extends Component {
  render() {
    const posts = this.props.data
    return (
      <PostListStyled className="postlist">
        <StandardWrapper className="postlist__wrapper">
          {posts.map((post, index) => {
            console.log(post)
            return (
              <Link
                to={`/news/${post.node.slug}`}
                key={index}
                className="postlist__post"
              >
                <div className="postlist__post--image">
                  <div className="postlist__post--image--date">
                    <p>{post.node.date}</p>
                  </div>
                  <Img
                    fluid={
                      post.node.acf._att_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={post.node.acf._att_featured_image.alt_text}
                  />
                </div>
                <div className="postlist__post--excerpt">
                  <h3>{post.node.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.node.acf._att_excerpt,
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </StandardWrapper>
      </PostListStyled>
    )
  }
}

export default PostsList
