import React, { Component } from "react"
import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const KeyStatsTopStyled = styled.section`
  position: relative;
  padding: 10rem 0 15rem;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};

  .keystats__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 60rem;
      text-align: center;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
      text-align: left;
    }

    @media (min-width: 1200px) {
      max-width: 100rem;
    }

    @media (min-width: 1325px) {
      max-width: 115rem;
    }
  }

  .keystats__title {
    position: relative;
    width: 100%;
    text-align: center;

    h2 {
      width: 100%;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 7.5rem;
      text-align: center;
      text-transform: uppercase;
      opacity: 0.17;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 18rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 12rem;
      }
    }
  }

  .keystats__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .keystats__stat {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(25% - 4rem);
      margin: 0 2rem;
    }

    &--top {
      margin-bottom: 1rem;
      p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.pacificBlue};
        font-size: 3rem;
        font-weight: 100;
        text-align: center;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 5rem;
        }
      }
    }

    &--bottom {
      p {
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }

        span {
          color: ${props => props.theme.pacificBlue};
        }
      }
    }
  }

  .keystats__rip {
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

class KeyStatsTop extends Component {
  render() {
    const hash = this.props.data.KeyStatsTopHash
    const title = this.props.data.KeyStatsTopTitle
    const stats = this.props.data.KeyStatsTopStats

    return (
      <KeyStatsTopStyled id={hash} className="keystats">
        <div className="keystats__wrapper">
          <div className="keystats__title">
            <h2>{title}</h2>
          </div>
          <div className="keystats__container">
            {stats.map((stat, index) => {
              let statInfo = ""
              if (stat.type === "number") {
                statInfo = stat.number
              } else if (stat.type === "percent") {
                statInfo = `${stat.percent}%`
              } else if (stat.type === "money") {
                statInfo = stat.money
              } else {
                statInfo = stat.text
              }

              return (
                <div key={index} className="keystats__stat">
                  <div className="keystats__stat--top">
                    <p>{statInfo}</p>
                  </div>
                  <div
                    className="keystats__stat--bottom"
                    dangerouslySetInnerHTML={{ __html: stat.stat }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="keystats__rip keystats__rip--top" />
        <div className="keystats__rip keystats__rip--bot" />
      </KeyStatsTopStyled>
    )
  }
}

export default KeyStatsTop
