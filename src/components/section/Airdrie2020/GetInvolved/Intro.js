import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { BackgroundTitle } from "../../../styles/commons/Titles"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

const IntroStyled = styled.section`
  .involveintro__blue {
    padding: 3rem 0 0;
    p {
      color: ${props => props.theme.pacificBlue};
      font-weight: 400;
    }
  }
`

class Intro extends Component {
  render() {
    const titleTop = this.props.data.introTitleTop
    const titleBot = this.props.data.introTitleBot
    const titleBG = this.props.data.introTitleBG
    const introBlue = this.props.data.introContentIntro
    const content = this.props.data.introContent

    return (
      <IntroStyled className="involveintro">
        <StandardWrapper className="involveintro__wrapper">
          <BackgroundTitle className="involveintro__title">
            <h2>
              <span>{titleTop}</span>
              <span>{titleBot}</span>
            </h2>
            <p>{titleBG}</p>
          </BackgroundTitle>
          <StandardParagraphs
            className="involveintro__blue"
            dangerouslySetInnerHTML={{ __html: introBlue }}
          />
          <StandardParagraphs
            className="involveintro__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </StandardWrapper>
      </IntroStyled>
    )
  }
}

export default Intro
