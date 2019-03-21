import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { BackgroundTitle } from "../../../styles/commons/Titles"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

const IntroStyled = styled.section`
  .shopintro__title {
    h2 {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 100%;
        font-size: 4.6rem;
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
