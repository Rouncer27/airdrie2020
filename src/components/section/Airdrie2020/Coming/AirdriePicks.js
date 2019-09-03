import React, { Component } from "react"

import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"

import eat from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-eat.svg"
import play from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-play.svg"
import stay from "../../../../images/icons/airdrie2020/AIR-Icons-hotpicks-sleep.svg"

const AirdriePicksStyled = styled.section`
  .airpicks__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 65rem;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;

    &--item {
      position: relative;
      width: 100%;
      margin: 3rem auto;
      padding-top: 2.5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 4rem);
        margin: 2rem;
      }

      @media (min-width: 900px) {
        width: calc(33.3333333% - 4rem);
        margin: 2rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
      }

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
        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p {
        margin: 0;
        color: ${props => props.theme.pacificBlue};
        font-family: ${props => props.theme.fontSec};
        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    p.pick-handle {
      color: ${props => props.theme.black};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 900;
    }

    a.pick-link {
      margin: 0;
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 600;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.4rem;
      }
      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.4rem;
      }

      &:hover {
        color: ${props => props.theme.mandarinOrange};
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

    const newEats = picksEats.map(eat => {
      eat.category = "eats"
      return eat
    })

    const newStays = picksStays.map(stay => {
      stay.category = "stays"
      return stay
    })

    const newPlays = picksPlays.map(play => {
      play.category = "plays"
      return play
    })

    const allPicks = newEats.concat(newStays, newPlays).sort(function() {
      return 0.5 - Math.random()
    })

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
              {allPicks.map((pick, index) => {
                let thisPicksClass = ""

                if (pick.category === "eats") {
                  thisPicksClass = "airpicks__eats--item"
                } else if (pick.category === "stays") {
                  thisPicksClass = "airpicks__stay--item"
                } else if (pick.category === "plays") {
                  thisPicksClass = "airpicks__play--item"
                }
                return (
                  <div key={index} className={`${thisPicksClass}`}>
                    <h3>{pick.title}</h3>
                    <p className="pick-comment">"{pick.comment}"</p>
                    <p className="pick-handle">{pick.handle}</p>
                    {pick.url && (
                      <a className="pick-link" href={pick.url}>
                        Vist Website
                      </a>
                    )}
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
