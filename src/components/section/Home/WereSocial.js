import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WereSocialStyled = styled.section`
  padding: 1rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0;
  }

  .wesocial__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    max-width: 45rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 95rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 110rem;
    }
  }

  .wesocial__title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 50%;
      margin-bottom: 0;
    }

    h2 {
      margin: 0;
      font-family: ${props => props.theme.fontSec};
      font-size: 3.6rem;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4rem;
      }

      span {
        display: block;
        font-size: 0.75em;
      }
    }
  }

  .wesocial__icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 10rem);
      margin-left: 10rem;
      text-align: left;
    }

    h3 {
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
      font-family: ${props => props.theme.fontSec};
      text-align: center;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
        text-align: left;
      }
    }

    ul {
      width: 100%;
    }

    &--icon {
      display: inline-block;
      position: relative;
      margin: 0 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 5rem;
        height: 5rem;
        text-align: center;

        &::after {
          font-family: ${props => props.theme.fontAwesome};
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5rem;
          height: 5rem;
          transform: translate(-50%, -50%);
          color: ${props => props.theme.mandarinOrange};
          font-size: 4rem;
        }
      }

      &--fb {
        a {
          &::after {
            content: "\f09a";
          }
        }
      }

      &--twitter {
        a {
          &::after {
            content: "\f099";
          }
        }
      }

      &--instagram {
        a {
          &::after {
            content: "\f16d";
          }
        }
      }
    }
  }

  .wesocial__images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    &--image {
      width: 20%;
    }
  }
`

class WereSocial extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    att_sm_accs {
                      type
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const socialIcons =
            data.allWordpressAcfOptions.edges[0].node.options.att_sm_accs

          return (
            <WereSocialStyled id={this.props.data.wereSocialHash}>
              {/* <div className="wesocial__wrapper">
                <div className="wesocial__title">
                  <h2>
                    We're Social. <span>Check out the latest.</span>
                  </h2>
                </div>

                <div className="wesocial__icons">
                  <h3>#focusedonthefuture #airdriesports</h3>
                  <ul>
                    {socialIcons.map((icon, index) => {
                      return (
                        <li
                          key={index}
                          className={`wesocial__icons--icon wesocial__icons--icon--${
                            icon.type
                          }`}
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={icon.url}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div> */}

              <div className="wesocial__images">
                {this.props.data.wereSocialImages.map((img, index) => {
                  return (
                    <div key={index} className="wesocial__images--image">
                      <Img
                        fluid={img.image.localFile.childImageSharp.fluid}
                        alt={img.image.alt_text}
                      />
                    </div>
                  )
                })}
              </div>
            </WereSocialStyled>
          )
        }}
      />
    )
  }
}

export default WereSocial
