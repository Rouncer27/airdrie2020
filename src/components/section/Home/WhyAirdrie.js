import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const WhyAirdrieStyled = styled.section`
  .whyair__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 2rem auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 95rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 110rem;
    }
  }

  .whyair__title {
    position: relative;
    width: 100%;
    padding: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      padding: 5rem 0;
    }

    h2 {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      font-family: ${props => props.theme.fontSec};
      font-size: 3rem;
      text-align: center;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpTablet}) {
        max-width: 75rem;
        font-size: 6rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 75rem;
        font-size: 6rem;
      }
    }

    p {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      width: 100%;
      margin: auto;
      padding: 0;
      transform: translateY(-50%);
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};
      font-size: 7.5rem;
      text-align: center;
      text-transform: uppercase;
      opacity: 0.2;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 18rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 18rem;
      }
    }
  }

  .whyair__content {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    p {
      font-weight: 300;
      font-size: 1.8rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.8rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.8rem;
      }
    }
  }

  .whyair__image {
    position: relative;
    width: 100%;
    margin: 2rem auto 4rem;

    &--top {
      position: absolute;
      top: -2rem;
      left: 50%;
      margin: 0 auto;
      padding: 1rem 3rem;
      transform: translateX(-50%);
      background: ${props => props.theme.pacificBlue};
      text-align: center;
      z-index: 5;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 1rem 5rem;
      }

      h3 {
        width: 100%;
        margin: 0;
        color: $white;
        font-size: 1.4rem;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }
      }
    }

    &--bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      text-align: center;
      z-index: 5;

      h3 {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 4rem;
        text-transform: uppercase;
        line-height: 0.8;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 10rem;
        }
      }
    }

    &--container {
      position: relative;
      width: 100%;
      max-width: 80rem;
      margin: 0 auto;
      z-index: 1;

      .gatsby-image-wrapper {
        width: 100%;
      }

      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  .whyair__link {
    width: 100%;
    text-align: center;

    a {
      display: inline-block;
      padding: 1rem 3rem;
      border: 0.1rem solid ${props => props.theme.pacificBlue};
      transition: all 0.3s ease;
      color: #000;
      font-family: ${props => props.theme.fontSec};
      font-size: 2.6rem;
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
`

class WhyAirdrie extends Component {
  render() {
    return (
      <WhyAirdrieStyled id={this.props.data.whyAirdrieHash} className="whyair">
        <div className="whyair__wrapper">
          <div className="whyair__title">
            <h2>{this.props.data.whyAirdrieTitle}</h2>
            <p>Airdrie</p>
          </div>
          <div
            className="whyair__content"
            dangerouslySetInnerHTML={{
              __html: this.props.data.whyAirdrieContent,
            }}
          />
          <div className="whyair__image">
            <div className="whyair__image--top">
              <h3>Olly & Jacob</h3>
            </div>
            <div className="whyair__image--bottom">
              <h3>On the bench</h3>
            </div>
            <div className="whyair__image--container">
              <Img
                fluid={
                  this.props.data.whyAirdrieImage.localFile.childImageSharp
                    .fluid
                }
                alt={this.props.data.whyAirdrieImage.alt_text}
              />
            </div>
          </div>
          <div className="whyair__link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.data.whyAirdrieVideo}
            >
              watch videos
            </a>
          </div>
        </div>
      </WhyAirdrieStyled>
    )
  }
}
export default WhyAirdrie
