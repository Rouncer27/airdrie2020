import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"

const HeroImageStyled = styled.section`
  overflow: hidden;

  .pagehero__wrapper {
    position: relative;
    min-height: 45rem;
    max-height: 45rem;
    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 65rem;
      max-height: 65rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      min-height: 75rem;
      max-height: 100vh;
    }
    z-index: 100;

    &::after {
      display: block;
      position: absolute;
      right: 0;
      bottom: -0.25rem;
      left: 0;
      width: 100%;
      height: 5rem;
      transform: rotate(-180deg);
      background-image: url(${rippedPaper});
      background-repeat: no-repeat;
      background-position: center top;
      background-size: cover;
      content: "";
      z-index: 15;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      &::after {
        bottom: -0.5rem;
        height: 10rem;
      }
    }
  }

  .pagehero__title {
    position: absolute;
    right: 0;
    bottom: 8rem;
    left: 0;
    width: 100%;
    margin: auto;
    text-align: center;
    z-index: 101;

    h1 {
      position: relative;
      margin: 0;
      padding: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 10rem;
      line-height: 0.7;
      z-index: 5;
    }
  }

  .pagehero__image {
    position: relative;
    min-height: 45rem;
    max-height: 45rem;
    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 65rem;
      max-height: 65rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      min-height: 75rem;
      max-height: 100vh;
    }
    z-index: 1;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }
`

class HeroImage extends Component {
  render() {
    const heroTitle = this.props.data.heroTitle
    const imageFluid = this.props.data.heroImage.localFile.childImageSharp.fluid
    const imageAlt = this.props.data.heroImage.alt_text
    return (
      <HeroImageStyled className="pagehero">
        <div className="pagehero__wrapper">
          <div className="pagehero__title">
            <h1>{heroTitle}</h1>
          </div>
          <div className="pagehero__image">
            <Img fluid={imageFluid} alt={imageAlt} />
          </div>
        </div>
      </HeroImageStyled>
    )
  }
}

export default HeroImage
