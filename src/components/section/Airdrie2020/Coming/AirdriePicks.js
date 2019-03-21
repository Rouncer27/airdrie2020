import React, { Component } from "react"

import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

import eat from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-eat.svg"
import play from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-play.svg"
import stay from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-sleep.svg"

const AirdriePicksStyled = styled.section`
  .airpicks__title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
      span {
        display: block;
      }

      span:first-of-type {
        font-size: 1.5em;
      }
    }
  }

  .airpicks__intro {
    width: 100%;
  }

  .airpicks__votes {
    width: 100%;
    max-width: 60rem;
    margin: 3rem auto 0;
    text-align: center;

    p {
      font-family: ${props => props.theme.fontSec};
      font-weight: 700;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 3rem;
      }
    }
  }

  .airpicks__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin: 2.5rem auto;
  }

  .airpicks__eats {
    &--item {
      &::after {
        width: 3.5rem;
        height: 2.5rem;
        background-image: url(${eat});
      }
    }
  }

  .airpicks__stay {
    &--item {
      &::after {
        width: 5rem;
        height: 2.5rem;
        background-image: url(${stay});
      }
    }
  }

  .airpicks__play {
    &--item {
      &::after {
        width: 2.5rem;
        height: 2.5rem;
        background-image: url(${play});
      }
    }
  }

  .airpicks__eats,
  .airpicks__stay,
  .airpicks__play {
    text-align: center;
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333333% - 4rem);
      margin: 2rem;
    }

    &--item {
      position: relative;
      width: 100%;
      margin: 3rem auto;
      padding-top: 2.5rem;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        content: "";
      }

      h3 {
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p {
        margin: 0;
        color: ${props => props.theme.pacificBlue};
        font-family: ${props => props.theme.fontSec};
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`

class AirdriePicks extends Component {
  render() {
    const {
      picksTitleTop,
      picksTitleBot,
      picksIntro,
      picksVote,
      picksEats,
      picksStays,
      picksPlays,
    } = this.props.data
    return (
      <AirdriePicksStyled className="airpicks">
        <StandardWrapper className="airpicks__wrapper">
          <div className="airpicks__title">
            <h2>
              <span>{picksTitleTop}</span>
              <span>{picksTitleBot}</span>
            </h2>
          </div>
          <StandardParagraphs
            dangerouslySetInnerHTML={{ __html: picksIntro }}
            className="airpicks__intro"
          />
          <div
            dangerouslySetInnerHTML={{ __html: picksVote }}
            className="airpicks__votes"
          />

          <div className="airpicks__container">
            <div className="airpicks__eats">
              {picksEats.map((eat, index) => {
                return (
                  <div key={index} className="airpicks__eats--item">
                    <h3>{eat.title}</h3>
                    <p>{eat.comment}</p>
                    <p>{eat.handle}</p>
                  </div>
                )
              })}
            </div>
            <div className="airpicks__stay">
              {picksStays.map((stay, index) => {
                return (
                  <div key={index} className="airpicks__stay--item">
                    <h3>{stay.title}</h3>
                    <p>{stay.comment}</p>
                    <p>{stay.handle}</p>
                  </div>
                )
              })}
            </div>
            <div className="airpicks__play">
              {picksPlays.map((play, index) => {
                return (
                  <div key={index} className="airpicks__play--item">
                    <h3>{play.title}</h3>
                    <p>{play.comment}</p>
                    <p>{play.handle}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </StandardWrapper>
      </AirdriePicksStyled>
    )
  }
}

export default AirdriePicks
