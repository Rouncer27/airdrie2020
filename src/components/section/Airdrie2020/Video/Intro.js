import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { BackgroundTitle } from "../../../styles/commons/Titles"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

const IntroStyled = styled.section`
  .shopintro__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
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

  .shopintro__title {
    h2 {
      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2.8rem;
      }
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 100%;
        font-size: 4.6rem;
      }
    }

    p {
      font-size: 5rem;
      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 8rem;
      }
      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 15rem;
      }
    }
  }
`

class Intro extends Component {
  render() {
    const {
      introTitleTop,
      introTitleBot,
      introTitleBg,
      introContent,
    } = this.props.data

    return (
      <IntroStyled>
        <StandardWrapper className="shopintro__wrapper">
          <BackgroundTitle className="shopintro__title">
            <h2>
              <span>{introTitleTop}</span>
              <span>{introTitleBot}</span>
            </h2>
            <p>{introTitleBg}</p>
          </BackgroundTitle>
          <StandardParagraphs
            className="shopintro__content"
            dangerouslySetInnerHTML={{ __html: introContent }}
          />
        </StandardWrapper>
      </IntroStyled>
    )
  }
}

export default Intro
