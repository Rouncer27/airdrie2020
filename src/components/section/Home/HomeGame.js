import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const HomeGameStyled = styled.section`
  position: relative;
  height: 40rem;
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    height: 60rem;
  }

  .homegame__content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;

    @media (min-width: ${props => props.theme.bpTablet}) {
      right: 10rem;
      left: auto;
      width: auto;
      padding: 0;
      transform: translate(0, -50%);
    }

    h2,
    h3 {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 4rem;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 6rem;
      }
    }

    &--link {
      width: 100%;
      margin: 4rem auto 0;
      text-align: center;

      a {
        display: inline-block;
        padding: 1rem 3rem;
        border: 0.1rem solid ${props => props.theme.white};
        transition: all 0.3s ease;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 2.4rem;
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

  .homegame__image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .homegame__rip {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${props => props.theme.bpTablet}) {
      height: 10rem;
    }

    &--top {
      top: -0.75rem;
      background-image: url(${rippedPaper});
      background-position: center top;

      @media (min-width: ${props => props.theme.bpTablet}) {
        top: -0.5rem;
      }
    }

    &--bot {
      bottom: -1.75rem;
      transform: rotate(-180deg);
      background-image: url(${rippedPaperBottom});
      background-position: center top;
    }
  }
`

class HomeGame extends Component {
  render() {
    return (
      <HomeGameStyled id={this.props.data.homeGameHash}>
        <div className="homegame__content">
          <h2>Airdrie</h2>
          <h3>
            Home of the <br />
            Alberta winter games 2020
          </h3>
          <div className="homegame__content--link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.data.homeGamrLink}
            >
              Alberta Games
            </a>
          </div>
        </div>

        <div className="homegame__image">
          <Img
            fluid={
              this.props.data.homeGameImage.localFile.childImageSharp.fluid
            }
            alt={this.props.data.homeGameImage.alt_text}
          />
        </div>

        <div className="homegame__rip homegame__rip--top " />
        <div className="homegame__rip homegame__rip--bot" />
      </HomeGameStyled>
    )
  }
}

export default HomeGame
