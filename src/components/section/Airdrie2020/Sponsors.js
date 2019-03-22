import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { BackgroundTitle } from "../../styles/commons/Titles"
import { StandardParagraphs } from "../../styles/commons/Paragraphs"
import { NormalAchor } from "../../styles/commons/Buttons"

// import "../../../../node_modules/slick-carousel/slick/slick.css"
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const SponsorsStyled = styled.section`
  padding-bottom: 10rem;

  .sponsorship__title {
    width: 100%;
    font-family: ${props => props.theme.fontSec};
    text-align: center;

    h2 {
      span {
        display: block;
      }

      span:first-of-type {
        font-size: 1.2em;
      }
    }
  }

  .sponsorship__video {
    width: 100%;

    iframe {
      display: block;
      margin: auto;
    }
  }

  .sponsorship__logos {
    width: 100%;
    margin: 4rem auto;
  }

  .sponsorship__logo {
    width: 50%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 33.33%;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 20%;
    }

    a {
      display: block;
      width: 100%;
      padding: 2rem;

      .gatsby-image-wrapper {
        width: 100%;
      }
    }
  }

  .sponsorship__bottitle {
    width: 100%;

    p {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 15rem;
      }
    }
  }

  .sponsorship__content {
    width: 100%;

    p {
      max-width: 65rem;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .sponsorship__pack {
    text-align: center;

    h3 {
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};
    }
  }
`

class Sponsors extends Component {
  render() {
    const titleTop = this.props.data.sponsorTitleTop
    const titleBot = this.props.data.sponsorTitleBot
    const video = this.props.data.sponsorVideoLink
    const logos = this.props.data.sponsorLogos
    const botTitle = this.props.data.sponsorSecondTitle
    const bgTitle = this.props.data.sponsorBg
    const content = this.props.data.sponsorContent
    const linkTitle = this.props.data.sponsorLinkTitle
    const btnText = this.props.data.sponsorBtnText
    const pdf = this.props.data.sponsorPDF.localFile.publicURL

    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      fade: false,
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <SponsorsStyled className="sponsorship">
        <StandardWrapper className="sponsorship__wrapper">
          <div className="sponsorship__title">
            <h2>
              <span>{titleTop}</span>
              <span>{titleBot}</span>
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: video }}
            className="sponsorship__video"
          />

          <Slider {...settings} className="sponsorship__logos">
            {logos.map((logo, index) => {
              return (
                <div key={index} className="sponsorship__logo">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={logo.links}
                  >
                    <Img
                      fluid={logo.logo.localFile.childImageSharp.fluid}
                      alt={logo.logo.alt_text}
                    />
                  </a>
                </div>
              )
            })}
          </Slider>

          <BackgroundTitle className="sponsorship__bottitle">
            <h2>{botTitle}</h2>
            <p>{bgTitle}</p>
          </BackgroundTitle>
          <StandardParagraphs
            dangerouslySetInnerHTML={{ __html: content }}
            className="sponsorship__content"
          />
          <div className="sponsorship__pack">
            <h3>{linkTitle}</h3>
            <div className="sponsorship__pack--button">
              <NormalAchor target="_blank" href={pdf}>
                {btnText}
              </NormalAchor>
            </div>
          </div>
        </StandardWrapper>
      </SponsorsStyled>
    )
  }
}

export default Sponsors
