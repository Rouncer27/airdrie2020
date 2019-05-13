import React, { Component } from "react"

import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const KeyStatsBotStyled = styled.section`
  position: relative;
  padding: 15rem 0;
  background: ${props => props.theme.persianIndigo};
  color: ${props => props.theme.white};

  .keystatsbl__wrapper {
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

  .keystatsbl__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .keystatsbl__stat {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(25% - 4rem);
      margin: 0 2rem;
    }

    &--top {
      margin-bottom: 1rem;
      p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.mandarinOrange};
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
          color: ${props => props.theme.mandarinOrange};
        }
      }
    }
  }

  .keystatsbl__rip {
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

class KeyStatsBot extends Component {
  render() {
    const stats = this.props.data.keyStatsBot
    return (
      <KeyStatsBotStyled className="keystatsbl">
        <div className="keystatsbl__wrapper">
          <div className="keystatsbl__container">
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
                <div key={index} className="keystatsbl__stat">
                  <div className="keystatsbl__stat--top">
                    <p>{statInfo}</p>
                  </div>
                  <div
                    className="keystatsbl__stat--bottom"
                    dangerouslySetInnerHTML={{ __html: stat.stat }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="keystatsbl__rip keystatsbl__rip--top" />
        <div className="keystatsbl__rip keystatsbl__rip--bot" />
      </KeyStatsBotStyled>
    )
  }
}

export default KeyStatsBot
