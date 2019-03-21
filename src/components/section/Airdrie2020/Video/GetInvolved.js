import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { NormalAchor } from "../../../styles/commons/Buttons"

const GetInvolvedStyled = styled.section`
  padding: 5rem 0;

  .videolink__title {
    width: 100%;
    text-align: center;

    h3 {
      margin: 0;
      margin-bottom: 3rem;
      padding: 0;
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};
    }
  }

  .videolink__button {
    width: 100%;
    text-align: center;
  }
`

class GetInvolved extends Component {
  render() {
    const { involvedTitle, involvedLink } = this.props.data
    return (
      <GetInvolvedStyled class="videolink">
        <StandardWrapper class="videolink__wrapper">
          <div class="videolink__title">
            <h3>{involvedTitle}</h3>
          </div>
          <div class="videolink__button">
            <NormalAchor target="_blank" href={involvedLink}>
              Get Involved
            </NormalAchor>
          </div>
        </StandardWrapper>
      </GetInvolvedStyled>
    )
  }
}

export default GetInvolved
