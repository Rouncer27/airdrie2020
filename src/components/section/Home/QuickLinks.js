import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const QuickLinksStyled = styled.section`
  padding: 4rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 10rem 0 5rem;
  }

  .quicklinks__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }
  }

  .quicklinks__title {
    text-align: center;
    padding: 0 2rem;

    h2 {
      margin: 0;
      font-family: ${props => props.theme.fontSec};
      font-size: 2.6rem;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4.2rem;
      }
    }
  }

  .quicklinks__item {
    position: relative;
    padding-bottom: 6.5rem;
    width: 100%;
    margin: 3rem auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 2rem;
      padding-bottom: 5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.33% - 8rem);
      margin: 2rem 4rem;
      padding-bottom: 5rem;
    }

    &--image {
      width: 100%;
      margin-bottom: 0;
      padding: 4rem;
      padding-bottom: 2rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 0;
        margin-bottom: 4rem;
      }
    }

    &--title {
      width: 100%;
      text-align: center;

      h2 {
        font-family: ${props => props.theme.fontSec};
        font-size: 2.4rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }

    &--excerpt {
      width: 100%;
      text-align: center;

      p {
        font-weight: 300;
        font-size: 1.6rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--link {
      position: absolute;
      bottom: 1rem;
      right: 0;
      left: 0;
      width: 100%;
      margin: 0 auto;
      text-align: center;

      a {
        display: inline-block;
        padding: 0 5rem;
        border: 0.1rem solid ${props => props.theme.pacificBlue};
        transition: all 0.3s ease;
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontSec};
        font-size: 2.8rem;
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
  }
`

class QuickLinks extends Component {
  render() {
    return (
      <QuickLinksStyled id={this.props.data.qlSectionHash}>
        <div className="quicklinks__title">
          <h2>Latest Sports + Events</h2>
        </div>
        <div className="quicklinks__wrapper">
          <div className="quicklinks__item quicklinks__local">
            <div className="quicklinks__item--image quicklinks__local--image">
              <Img
                fluid={
                  this.props.data.qlLocalImage.localFile.childImageSharp.fluid
                }
                alt={this.props.data.qlLocalImage.alt_text}
              />
            </div>
            <div className="quicklinks__item--title quicklinks__local--title">
              <h2>Local Sports Events</h2>
            </div>
            <div
              className="quicklinks__item--excerpt quicklinks__local--excerpt"
              dangerouslySetInnerHTML={{
                __html: this.props.data.qlLocalExcerpt,
              }}
            />
            <div className="quicklinks__item--link quicklinks__local--link">
              <Link to="/local-sports-events/">Events</Link>
            </div>
          </div>

          <div className="quicklinks__item quicklinks__group">
            <div className="quicklinks__item--image quicklinks__group--image">
              <Img
                fluid={
                  this.props.data.qlGroupImage.localFile.childImageSharp.fluid
                }
                alt={this.props.data.qlGroupImage.alt_text}
              />
            </div>
            <div className="quicklinks__item--title quicklinks__group--title">
              <h2>Sport Group Info</h2>
            </div>
            <div
              className="quicklinks__item--excerpt quicklinks__group--excerpt"
              dangerouslySetInnerHTML={{
                __html: this.props.data.qlGroupExcerpt,
              }}
            />
            <div className="quicklinks__item--link quicklinks__group--link">
              <Link to="/local-sports-groups/">Groups</Link>
            </div>
          </div>

          <div className="quicklinks__item quicklinks__news">
            <div className="quicklinks__item--image quicklinks__news--image">
              <Img
                fluid={
                  this.props.data.qlNewsImage.localFile.childImageSharp.fluid
                }
                alt={this.props.data.qlNewsImage.alt_text}
              />
            </div>
            <div className="quicklinks__item--title quicklinks__news--title">
              <h2>News + Updates</h2>
            </div>
            <div
              className="quicklinks__item--excerpt quicklinks__news--excerpt"
              dangerouslySetInnerHTML={{
                __html: this.props.data.qlNewsExcerpt,
              }}
            />
            <div className="quicklinks__item--link quicklinks__news--link">
              <Link to="/news/">News</Link>
            </div>
          </div>
        </div>
      </QuickLinksStyled>
    )
  }
}

export default QuickLinks
