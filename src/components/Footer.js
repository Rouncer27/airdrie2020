import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import rippedPaper from "../images/ripped/AIR-2020-paper-01.svg"

const FooterStyled = styled.footer`
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10rem 0 1rem;
  background-color: ${props => props.theme.pacificBlue};

  .mainfooter__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 95rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 110rem;
    }
  }

  .mainfooter__about,
  .mainfooter__social--news {
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      text-align: left;
    }

    h3 {
      font-family: ${props => props.theme.fontSec};
      font-size: 3rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
        text-align: left;
      }
    }

    p {
      color: ${props => props.theme.white};
      font-weight: 300;
      font-size: 1.6rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.6rem;
        text-align: left;
      }
    }

    a {
      display: inline-block;
      padding: 1rem 3rem;
      border: 0.1rem solid ${props => props.theme.white};
      transition: all 0.3s ease;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 2.4rem;
      line-height: 1.4;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.4rem;
      }

      &:hover {
        border: 0.1rem solid ${props => props.theme.mandarinOrange};
        color: ${props => props.theme.mandarinOrange};
      }
    }
  }

  .mainfooter__about {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-right: 4rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(40% - 8rem);
      margin-right: 8rem;
    }

    &--contact {
      margin-top: 1rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin-top: 7.5rem;
      }
    }
  }

  .mainfooter__social {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin-left: 4rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 8rem);
      margin-left: 8rem;
    }

    &--icons {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 4rem;
      h3 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          width: 100%;
          font-size: 2rem;
        }
      }

      p {
        width: 100%;
        margin-bottom: 2rem;
        align-self: center;
        font-weight: 500;
      }

      ul {
        display: flex;
        justify-content: flex-start;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          width: 105%;
        }
      }
    }
  }

  .mainfooter__copy {
    width: 100%;
    padding: 1.5rem;
    text-align: center;

    p {
      margin-bottom: 0;
      color: ${props => props.theme.white};
      font-size: 1.2rem;
      font-style: italic;

      span {
        display: block;
        font-size: 1.2rem;
      }

      a {
        transition: color 0.3s linear;
        color: ${props => props.theme.white};
        font-size: 1.2rem;

        &:hover {
          color: ${props => props.theme.persianIndigo};
        }
      }
    }
  }

  .mainfooter__graphic {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: 100%;
    top: -0.5rem;
    background-image: url(${rippedPaper});
    background-position: center top;
    background-size: cover;
  }

  .mainfooter__icons {
    &--icon {
      display: flex;
      align-items: center;
      position: relative;
      margin: 0 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 4rem;
        height: 4rem;
        text-align: center;

        &::after {
          font-family: ${props => props.theme.fontAwesome};
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4rem;
          height: 4rem;
          transition: all 0.3s ease;
          transform: translate(-50%, -50%);
          color: ${props => props.theme.white};
          font-size: 3rem;
        }

        &:hover {
          &::after {
            color: ${props => props.theme.mandarinOrange};
          }
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

  .mainfooter__airdrie {
    display: block;
    position: absolute;
    right: 5rem;
    bottom: 0;

    p {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 7rem;
      opacity: 0.15;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 15rem;
      }
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    att_about_title
                    att_about_content
                    att_about_button_text
                    att_about_button_link
                    att_contact_us
                    att_latest_news_link
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
          const options = data.allWordpressAcfOptions.edges[0].node.options
          const footerTitle = options.att_about_title
          const footerContent = options.att_about_content
          const footerBtnText = options.att_about_button_text
          const footerBtnLink = options.att_about_button_link
          const footerEmail = options.att_contact_us
          const footerLatestNews = options.att_latest_news_link
          const footerSocialMedia = options.att_sm_accs

          return (
            <FooterStyled>
              <div className="mainfooter__wrapper">
                <div className="mainfooter__about">
                  <div className="mainfooter__about--title">
                    <h3>{footerTitle}</h3>
                  </div>
                  <div
                    className="mainfooter__about--content"
                    dangerouslySetInnerHTML={{ __html: footerContent }}
                  />
                  {/* <div className="mainfooter__about--button">
                    <a href={footerBtnLink}>{footerBtnText}</a>
                  </div> */}
                  <div className="mainfooter__about--contact">
                    <h3>Contact Us</h3>
                    <a href={`mailto:${footerEmail}`}>Email</a>
                  </div>
                </div>

                <div className="mainfooter__social">
                  <div className="mainfooter__social--news">
                    <h3>The Latest in Airdrie</h3>
                    <p>The latest on sports in Airdrie</p>
                    <div>
                      <Link to="/news">News</Link>
                    </div>
                  </div>
                  <div className="mainfooter__social--icons">
                    <h3>We're Social</h3>
                    <p>#focusedonthefuture #airdriesports</p>
                    <ul>
                      {footerSocialMedia.map((icon, index) => {
                        return (
                          <li
                            key={index}
                            className={`mainfooter__icons--icon mainfooter__icons--icon--${
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
                </div>

                <div className="mainfooter__copy">
                  <p>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    {" | "}
                    <Link to="/disclaimer">Disclaimer</Link>
                  </p>
                  <p>
                    Copyright &copy; Airdrie 2020. Made in Airdrie.{" "}
                    <span>
                      Designed and developed by{" "}
                      <a
                        title="Switchback Creative Inc."
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://switchbackcreative.ca"
                      >
                        Switchback Creative Inc.
                      </a>
                    </span>
                  </p>
                  <p>
                    Built with &#9825; and{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.gatsbyjs.org"
                    >
                      Gatsby
                    </a>
                  </p>
                </div>
              </div>

              <div className="mainfooter__graphic" />
              <div className="mainfooter__airdrie">
                <p>Airdrie</p>
              </div>
            </FooterStyled>
          )
        }}
      />
    )
  }
}

export default Footer
