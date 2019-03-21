import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const SponsoredTeamStyled = styled.section`
  padding: 5rem 0;

  .sponteam__wrapper {
    align-items: center;
  }

  .sponteam__content {
    width: calc(100%);
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--logo {
      max-width: 20rem;
      margin: 0 auto;
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

      .sponsor-sub-title {
        margin: 0 auto;
        color: ${props => props.theme.pacificBlue};
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

  .sponteam__image {
    position: relative;
    width: calc(100%);
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
        background-color: ${props => props.theme.pacificBlue};
        color: ${props => props.theme.white};
        text-transform: uppercase;

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

class SponsoredTeam extends Component {
  render() {
    const {
      sponTeamImg,
      sponTeamLogo,
      sponTeamLogoLink,
      sponTeamName,
      sponTeamSub,
      sponTeamContent,
    } = this.props.data

    return (
      <SponsoredTeamStyled className="sponteam">
        <StandardWrapper className="sponteam__wrapper">
          <div className="sponteam__content">
            <div className="sponteam__content--header">
              <div className="sponteam__content--logo">
                <a target="_blank" href={sponTeamLogoLink}>
                  <Img
                    fluid={sponTeamLogo.localFile.childImageSharp.fluid}
                    alt={sponTeamLogo.alt_text}
                  />
                </a>
              </div>

              <h2>{sponTeamName}</h2>
              <p className="sponsor-sub-title">{sponTeamSub}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: sponTeamContent }}
              className="sponteam__content--paragraphs"
            />
          </div>

          <div className="sponteam__image">
            <div className="sponteam__image--title">
              <h2>Sponsored Team</h2>
            </div>
            <div className="sponteam__image--img">
              <Img
                fluid={sponTeamImg.localFile.childImageSharp.fluid}
                alt={sponTeamImg.alt_text}
              />
            </div>
          </div>
        </StandardWrapper>
      </SponsoredTeamStyled>
    )
  }
}

export default SponsoredTeam
