import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

const FundraisersStyled = styled.section`
  .fundraiser__wrapper {
    justify-content: flex-start;
  }

  .fundraiser__title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
  }

  .fundraiser__item {
    width: calc(50%);
    text-align: center;

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
        @media (min-width: ${props => props.theme.bpDesksm}) {
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
          {fundraisers.map((fund, index) => {
            return (
              <div key={index} className="fundraiser__item">
                <a target="_blank" href={fund.link}>
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
          })}
        </StandardWrapper>
      </FundraisersStyled>
    )
  }
}

export default Fundraisers
