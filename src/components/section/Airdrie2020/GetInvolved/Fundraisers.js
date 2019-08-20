import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"
import { NormalLink } from "../../../styles/commons/Buttons"

const FundraisersStyled = styled.section`
  .fundraiser__wrapper {
    justify-content: flex-start;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 65rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 110rem;
    }
  }

  .fundraiser__title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
  }

  .fundraiser-description {
    width: 100%;
    text-align: center;
  }

  .fundraiser-button {
    width: 100%;
    text-align: center;
  }

  .fundraiser__item {
    width: calc(100%);
    margin-bottom: 5rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    @media (min-width: 900px) {
      width: calc(33.3333% - 2rem);
      margin: 1rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      margin: 2rem;
    }

    &--image {
      position: relative;
    }

    &--date {
      position: absolute;
      top: -1.5rem;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 100;

      p {
        display: inline-block;
        margin: 0;
        padding: 0.5rem 2rem;
        background: ${props => props.theme.white};
        color: #000;
      }
    }

    &--fbicon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 5rem;
      height: 5rem;
      background: ${props => props.theme.pacificBlue};
      z-index: 100;

      &::after {
        font-family: ${props => props.theme.fontAwesome};
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${props => props.theme.white};
        font-size: 3rem;
        content: "\f09a";
      }
    }

    &--meta {
      h3 {
        color: ${props => props.theme.pacificBlue};
        text-transform: uppercase;
        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }
        @media (min-width: 900px) {
          font-size: 1.8rem;
        }
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      p {
        margin-bottom: 1rem;
        color: #000;
        font-weight: 500;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.6rem;
        }
      }
    }
  }
`

class Fundraisers extends Component {
  render() {
    const { fundraisers } = this.props.data
    return (
      <FundraisersStyled className="fundraiser">
        <StandardWrapper className="fundraiser__wrapper">
          <div className="fundraiser__title">
            <h2>Current Fundraisers</h2>
          </div>
          <div className="fundraiser-description">
            <p>
              To learn more about any Games Fundraisers happening check out the
              Sports Events listing
            </p>
          </div>
          <div className="fundraiser-button">
            <NormalLink to="/local-sports-events">Sports Events</NormalLink>
          </div>
          {/* {fundraisers.map((fund, index) => {
            return (
              <div key={index} className="fundraiser__item">
                <a rel="noopener noreferrer" target="_blank" href={fund.link}>
                  <div className="fundraiser__item--image">
                    <div className="fundraiser__item--date">
                      <p>{fund.date_time}</p>
                    </div>
                    <div className="fundraiser__item--fbicon" />
                    <div>
                      <Img
                        fluid={fund.image.localFile.childImageSharp.fluid}
                        alt={fund.image.alt_text}
                      />
                    </div>
                  </div>
                  <div className="fundraiser__item--meta">
                    <h3>{fund.name}</h3>
                    <StandardParagraphs
                      dangerouslySetInnerHTML={{ __html: fund.description }}
                    />
                  </div>
                </a>
              </div>
            )
          })} */}
        </StandardWrapper>
      </FundraisersStyled>
    )
  }
}

export default Fundraisers
