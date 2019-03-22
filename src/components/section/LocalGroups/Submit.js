import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalLink } from "../../styles/commons/Buttons"

import forms from "../../../images/icons/events/Icons-sitewide-groups-01.svg"

const SubmitStyled = styled.section`
  padding: 5rem 0;

  .submitlink__title {
    position: relative;
    width: 100%;
    padding-top: 10rem;
    text-align: center;

    &::after {
      display: block;
      position: absolute;
      top: 2rem;
      right: 0;
      left: 0;
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
      background-image: url(${forms});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      content: "";
    }

    h2 {
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.8rem;
      }
    }
  }

  .submitlink__content {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 26rem;
      margin: 0 auto;
    }

    p {
      font-weight: 300;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.6rem;
      }
    }
  }

  .submitlink__button {
    width: 100%;
    text-align: center;
  }
`

class Submit extends Component {
  render() {
    return (
      <SubmitStyled className="submitlink">
        <StandardWrapper className="submitlink__wrapper">
          <div className="submitlink__title">
            <h2>submit Group</h2>
          </div>
          <div className="submitlink__content">
            <p>Would you like to submit your group and join Airdrie Sports?</p>
          </div>
          <div className="submitlink__button">
            <NormalLink to="/local-sports-groups/local-sports-group-form/">
              Submit Group
            </NormalLink>
          </div>
        </StandardWrapper>
      </SubmitStyled>
    )
  }
}

export default Submit
