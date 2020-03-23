import React, { Component } from "react"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"
import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBlue from "../../../images/ripped/AS-paper-header-01.svg"

const float = keyframes`
  0% {
    transform: translate(0, -1rem);
  }

  50% {
    transform: translate(0, 1rem);
  }

  100% {
    transform: translate(0, -1rem);
  }
`

const HeroContainer = styled.div`
  overflow: hidden;
`

const HeroSliderStyled = styled(Slider)`
  width: 100%;
  min-height: 40rem;
  max-height: 40rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    min-height: 50rem;
    max-height: 50rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    min-height: 70rem;
  }

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

  .heroslide__slide {
    position: relative;

    &--title {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 50% 50% !important;
      transform: translate(-50%, -50%) rotate(-10deg);
      z-index: 10;

      h2 {
        margin: 0;
        padding: 0;
        padding-right: 0;
        color: ${props => props.theme.pacificBlue};
        font-family: ${props => props.theme.fontSec};
        font-size: 2rem;
        text-align: center;
        line-height: 1;
        animation: ${float} 6s ease-in-out infinite;

        @media (min-width: ${props => props.theme.bpTablet}) {
          padding-right: 0;
          font-size: 3rem;
          text-align: center;
          line-height: 0;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          padding-right: 10rem;
          font-size: 3.4rem;
          text-align: right;
          line-height: 0;
        }
      }

      p {
        position: relative;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 8rem;
        text-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
        line-height: 0.7;
        z-index: 5;
        animation: ${float} 6s ease-in-out infinite;

        &::after {
          display: block;
          position: absolute;
          right: 0;
          bottom: -3rem;
          left: 0;
          width: 30rem;
          height: 4rem;
          background-image: url(${rippedPaperBlue});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100%;
          content: "";
          z-index: -1;
        }

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 10em;
          &::after {
            bottom: -5rem;
            width: 60rem;
            height: 8rem;
          }
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 20rem;

          &::after {
            bottom: -6rem;
            width: 70rem;
            height: 10rem;
          }
        }
      }
    }

    &--image {
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

    &--background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.5;
      z-index: 2;
    }
  }
`

class HeroSlider extends Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      fade: true,
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      afterChange: function(currentSlide) {
        console.log()
      },
    }
    return (
      <HeroContainer>
        <HeroSliderStyled {...settings}>
          {this.props.data.map((slide, index) => {
            return (
              <div className="heroslide__slide" key={index}>
                <div className="heroslide__slide--title">
                  <h2>Airdrie Sports</h2>
                  <p>{slide.title}</p>
                </div>
                {slide.hero_image.localFile && (
                  <div className="heroslide__slide--image">
                    <Img
                      fluid={slide.hero_image.localFile.childImageSharp.fluid}
                      alt={slide.hero_image.alt_text}
                    />
                  </div>
                )}
                <div className="heroslide__slide--background" />>
              </div>
            )
          })}
        </HeroSliderStyled>
      </HeroContainer>
    )
  }
}

export default HeroSlider
