import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../styles/commons/Paragraphs"

const IntroStyled = styled.section`
  width: 100%;
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 60rem;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .formintro__title {
    width: 100%;
    h2 {
      font-family: ${props => props.theme.fontSec};
      text-align: center;
    }
  }
  .formintro__content {
    width: 100%;
  }
`

class Intro extends Component {
  render() {
    const { introTitle, introContent } = this.props.data

    return (
      <IntroStyled className="formintro">
        <StandardWrapper className="formintro__wrapper">
          <div className="formintro__title">
            <h2>{introTitle}</h2>
          </div>
          <StandardParagraphs
            dangerouslySetInnerHTML={{ __html: introContent }}
            className="formintro__content"
          />
        </StandardWrapper>
      </IntroStyled>
    )
  }
}

export default Intro
