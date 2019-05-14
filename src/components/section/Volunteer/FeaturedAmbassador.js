import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const FeaturedAmbassadorStyled = styled.section`
  padding: 5rem 0;

  .featambass__wrapper {
    align-items: center;
    flex-direction: column-reverse;

    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: column-reverse;
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      flex-direction: row;
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 110rem;
    }
  }

  .featambass__content {
    width: calc(100%);
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--header {
      position: relative;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      text-align: center;

      h2 {
        margin: 0 auto;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.4rem;
        }
      }

      .featambass-sub-title {
        margin: 0 auto;
        color: ${props => props.theme.mandarinOrange};
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      &::after {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: 10rem;
        height: 0.75rem;
        background: ${props => props.theme.black};
        margin: 0 auto;
        content: "";
      }
    }

    &--paragraphs {
      text-align: center;

      p {
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p:last-of-type {
        margin: 0;
      }
    }
  }

  .featambass__image {
    position: relative;
    width: calc(100%);
    margin: 0 0 2rem;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--title {
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      text-align: center;
      z-index: 100;

      h2 {
        display: inline-block;
        margin: 0 auto;
        padding: 1rem 2rem;
        background-color: ${props => props.theme.mandarinOrange};
        color: ${props => props.theme.white};
        font-size: 2.2rem;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--img {
      position: relative;
      z-index: 10;
    }
  }
`

class FeaturedAmbassador extends Component {
  render() {
    const {
      ambassadorImg,
      ambassadorName,
      ambassadorSub,
      ambassadorContent,
    } = this.props.data

    return (
      <FeaturedAmbassadorStyled className="featambass">
        <StandardWrapper className="featambass__wrapper">
          <div className="featambass__content">
            <div className="featambass__content--header">
              <h2>{ambassadorName}</h2>
              <p className="featambass-sub-title">{ambassadorSub}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: ambassadorContent }}
              className="featambass__content--paragraphs"
            />
          </div>
          <div className="featambass__image">
            <div className="featambass__image--title">
              <h2>Featured Ambassador</h2>
            </div>
            <div className="featambass__image--img">
              <Img
                fluid={ambassadorImg.localFile.childImageSharp.fluid}
                alt={ambassadorImg.alt_text}
              />
            </div>
          </div>
        </StandardWrapper>
      </FeaturedAmbassadorStyled>
    )
  }
}
export default FeaturedAmbassador
