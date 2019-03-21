import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../styles/commons/Paragraphs"

const IntroStyled = styled.section`
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
