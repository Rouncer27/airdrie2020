import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const HashtagStyled = styled.section`
  position: relative;
  height: 40rem;
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    height: 50rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    height: 60rem;
  }

  .hashtagsec__hashtag {
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
      padding: 0;
    }

    p {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 3rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7rem;
      }
    }
  }

  .hashtagsec__image {
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

  .hashtagsec__rip {
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

class Hashtag extends Component {
  render() {
    const title = this.props.data.hashtagTitle
    const image = this.props.data.hashtagImage.localFile.childImageSharp.fluid
    const altText = this.props.data.hashtagImage.alt_text

    return (
      <HashtagStyled className="hashtagsec">
        <div className="hashtagsec__image">
          <Img fluid={image} alt={altText} />
        </div>
        <div className="hashtagsec__hashtag">
          <p>#{title}</p>
        </div>
        <div className="hashtagsec__rip hashtagsec__rip--top " />
        <div className="hashtagsec__rip hashtagsec__rip--bot" />
      </HashtagStyled>
    )
  }
}

export default Hashtag
