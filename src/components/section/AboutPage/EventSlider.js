import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const EventSliderStyled = styled.section`
  margin: 5rem auto;
  .eventslider__wrapper {
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

  .eventslider__slider {
    width: 100%;
    text-align: center;
  }

  .eventslider__slide {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;

    &--centerbg {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 38rem;
      height: 38rem;
      transition: all 2s ease-in-out;
      transform-origin: 0% 0%;
      transform: rotate(180deg) translate(-50%, -50%);
      background: ${props => props.theme.persianIndigo};
      opacity: 0;
      z-index: -1;
    }

    &--sidea {
      position: relative;
      width: calc(50% - 5rem);
      margin-top: 5rem;
      margin-right: 5rem;
    }

    &--namea {
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      text-align: center;
      z-index: 100;

      h3 {
        display: inline-block;
        margin: 0;
        padding: 1rem 4rem;
        background: ${props => props.theme.pacificBlue};
        transition: all 2s ease-in-out;
        transform: translateY(-5rem);
        color: #fff;
        font-weight: 300;
        text-transform: uppercase;
        opacity: 0;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--action {
      width: 100%;
      text-align: center;
      p {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fontSec};
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 8rem;
        }
      }
    }

    &--image {
      width: 100%;
      max-width: 40rem;
      margin: 0 auto;
      transition: all 2s ease-in-out;
      opacity: 0;
    }

    &--imgone {
      position: relative;
      margin-right: 0;
      transform: translateX(-20rem);
    }

    &--imgtwo {
      margin-left: 0;
      transform: translateX(20rem);
    }

    &--sideb {
      position: relative;
      width: calc(50% - 5rem);
      margin-bottom: 5rem;
      margin-left: 5rem;
    }

    &--nameb {
      h3 {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fontSec};
        text-align: left;
      }
    }

    &--content {
      p {
        margin: 0;
        padding: 0;
        font-weight: 300;
        text-align: left;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--link {
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 4rem;

      a {
        display: inline-block;
        padding: 0 5rem;
        border: 0.1rem solid ${props => props.theme.pacificBlue};
        transition: all 0.3s ease;
        background: #fff;
        color: #000;
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

  .slick-slide:nth-of-type(4n + 1) .eventslider__slide {
    .eventslider__slide--centerbg {
      background: ${props => props.theme.pacificBlue};
    }
  }

  .slick-slide:nth-of-type(4n + 2) .eventslider__slide {
    .eventslider__slide--centerbg {
      background: ${props => props.theme.mandarinOrange};
    }
  }

  .slick-slide:nth-of-type(4n + 3) .eventslider__slide {
    .eventslider__slide--centerbg {
      background: ${props => props.theme.persianIndigo};
    }
  }

  .slick-slide:nth-of-type(4n + 4) .eventslider__slide {
    .eventslider__slide--centerbg {
      background: ${props => props.theme.chathamsBlue};
    }
  }

  .slick-current {
    .eventslider__slide {
      .eventslider__slide--centerbg {
        transform: rotate(0) translate(-50%, -50%);
        opacity: 1;
      }
      .eventslider__slide--namea {
        h3 {
          transform: translate(0);
          opacity: 1;
        }
      }
      .eventslider__slide--image {
        transform: translate(0);
        opacity: 1;
      }
    }
  }
`

class EventSlider extends Component {
  render() {
    const setting = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      arrows: true,
      speed: 2000,
      fade: true,
      focusOnSelect: false,
      autoplay: false,
      autoplaySpeed: 5000,
      cssEase: "linear",
    }

    const hash = this.props.data.eventSliderHash
    const slides = this.props.data.eventSlider

    return (
      <EventSliderStyled id={hash} className="eventslider">
        <div className="eventslider__wrapper">
          <div className="eventslider__wrapper--title">
            <h2>Spotlight Teams</h2>
          </div>
          <Slider {...setting} className="eventslider__slider">
            {slides.map((slide, index) => {
              return (
                <div key={index} className="eventslider__slide">
                  <div className="eventslider__slide--sidea">
                    <div className="eventslider__slide--image eventslider__slide--imgone">
                      <div className="eventslider__slide--namea">
                        <h3>{slide.name}</h3>
                      </div>
                      <Img
                        fluid={slide.image_one.localFile.childImageSharp.fluid}
                        alt={slide.image_one.alt_text}
                      />
                    </div>
                    <div className="eventslider__slide--action">
                      <p>{slide.action_word}</p>
                    </div>
                  </div>
                  <div className="eventslider__slide--centerbg" />
                  <div className="eventslider__slide--sideb">
                    <div className="eventslider__slide--nameb">
                      <h3>{slide.name}</h3>
                    </div>
                    <div
                      className="eventslider__slide--content"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                    <div className="eventslider__slide--link">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={slide.link}
                      >
                        Learn More
                      </a>
                    </div>
                    <div className="eventslider__slide--image eventslider__slide--imgtwo">
                      <Img
                        fluid={slide.image_two.localFile.childImageSharp.fluid}
                        alt={slide.image_two.alt_text}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </EventSliderStyled>
    )
  }
}

export default EventSlider
