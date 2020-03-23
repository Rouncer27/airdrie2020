import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { HeroTitle } from "../../styles/commons/Titles"
import { HeroWrapper, HeroImageStyle } from "../../styles/commons/Images"

import EventsDefault from "./Coming/EventsDefault"

const HeroImageStyled = styled.section`
  .pagehero__logo {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 100%;
    max-width: 17rem;
    z-index: 500;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: 5rem;
      right: 5rem;
      max-width: 20rem;
    }
  }

  .pagehero__title {
    max-width: 100rem;
  }

  .pagehero__background {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 11rem;
    z-index: 10;

    @media (min-width: ${props => props.theme.bpTablet}) {
      height: 25rem;
    }

    &--mandarinorange {
      background-color: ${props => props.theme.mandarinOrange};
    }
  }
`

class HeroImageDif extends Component {
  render() {
    const heroTitle = this.props.data.heroTitle
    const imageFluid = this.props.data.heroImg
      ? this.props.data.heroImg.localFile.childImageSharp.fluid
      : false
    const imageAlt = this.props.data.heroImg
      ? this.props.data.heroImg.alt_text
      : false

    const heroDisplay = imageFluid ? (
      <Img fluid={imageFluid} alt={imageAlt} />
    ) : (
      <EventsDefault />
    )

    const logoImageFluid = this.props.data.herologo.localFile.childImageSharp
      .fluid
    const logoImageAlt = this.props.data.herologo.alt_text
    const heroColour = this.props.data.heroColour
    return (
      <HeroImageStyled className="pagehero">
        <HeroWrapper className="pagehero__wrapper">
          <HeroTitle className="pagehero__title">
            <h1>Visit Airdrie</h1>
          </HeroTitle>
          <div className="pagehero__logo">
            <Img fluid={logoImageFluid} alt={logoImageAlt} />
          </div>
          {heroDisplay && (
            <HeroImageStyle className="pagehero__image">
              {heroDisplay}
            </HeroImageStyle>
          )}
          <div
            className={`pagehero__background pagehero__background--${heroColour}`}
          />
        </HeroWrapper>
      </HeroImageStyled>
    )
  }
}

export default HeroImageDif
