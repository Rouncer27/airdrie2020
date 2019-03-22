import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const PostSidebarStyled = styled.aside`
  .postside__title {
    padding-bottom: 4rem;
    text-align: center;

    h3 {
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 3.2rem;
      }
    }
  }

  .postside__post {
    display: block;
    padding-bottom: 5rem;

    &--image {
      position: relative;
      margin-bottom: 2rem;

      &--cat {
        position: absolute;
        top: -2rem;
        right: 0;
        left: 0;
        width: 100%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        z-index: 100;

        p {
          display: inline-block;
          margin: 0 auto;
          padding: 1rem 2rem;
          background: ${props => props.theme.white};
          color: ${props => props.theme.black};
          font-weight: 500;
          text-transform: uppercase;
        }
      }
    }

    &--content {
      &--title {
        text-align: center;

        h4 {
          color: ${props => props.theme.pacificBlue};
          font-weight: 500;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.4rem;
          }
        }
      }

      &--excerpt {
        text-align: center;

        p {
          color: ${props => props.theme.black};

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
`

class PostSidebar extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressCategory {
              edges {
                node {
                  name
                  count
                }
              }
            }

            allWordpressPost {
              edges {
                node {
                  title
                  slug
                  acf {
                    _att_excerpt
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
                  categories {
                    name
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const allCategories = data.allWordpressCategory.edges
          const allPosts = data.allWordpressPost.edges

          let topCount = 0

          allCategories.forEach(cat => {
            if (cat.node.count > topCount) {
              topCount = cat.node.count
            }
          })

          const topCat = allCategories.filter(cat => {
            if (cat.node.count === topCount) {
              return cat
            }
            return false
          })

          let postCount = 0
          const mostPopPosts = allPosts.filter(post => {
            const postAllCats = post.node.categories

            const postsReturned = postAllCats.filter(cat => {
              if (cat.name === topCat[0].node.name) {
                return post
              }
              return false
            })

            if (postsReturned.length > 0 && postCount < 3) {
              postCount++
              return postsReturned
            }
            return false
          })

          return (
            <PostSidebarStyled className="postside">
              <div className="postside__title">
                <h3>Top Categories</h3>
              </div>
              <div className="postside__posts">
                {mostPopPosts.map((post, index) => {
                  return (
                    <Link
                      to={`/news/${post.node.slug}`}
                      key={index}
                      className="postside__post"
                    >
                      <div className="postside__post--image">
                        <div className="postside__post--image--cat">
                          <p>{post.node.categories[0].name}</p>
                        </div>
                        <div className="postside__post--image--img">
                          <Img
                            fluid={
                              post.node.acf._att_featured_image.localFile
                                .childImageSharp.fluid
                            }
                            alt={post.node.acf._att_featured_image.alt_text}
                          />
                        </div>
                      </div>

                      <div className="postside__post--content">
                        <div className="postside__post--content--title">
                          <h4>{post.node.title}</h4>
                        </div>
                        <div
                          className="postside__post--content--excerpt"
                          dangerouslySetInnerHTML={{
                            __html: post.node.acf._att_excerpt,
                          }}
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </PostSidebarStyled>
          )
        }}
      />
    )
  }
}

export default PostSidebar
