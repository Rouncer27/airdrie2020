import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

import book from "../../../images/icons/airdrie2020/AIR-2020-Icons-guide.svg"
import questionMark from "../../../images/icons/airdrie2020/AIR-2020-Icons-info.svg"
import trophy from "../../../images/icons/airdrie2020/AIR-2020-Icons-results.svg"
import stopWatch from "../../../images/icons/airdrie2020/AIR-2020-Icons-schedules.svg"
import scoreBoard from "../../../images/icons/airdrie2020/AIR-2020-Icons-scoring.svg"
import scrollMap from "../../../images/icons/airdrie2020/AIR-2020-Icons-visitor.svg"

const QuickIconLinksStyled = styled.section`
  .quickicons__item {
    width: calc(50% - 4rem);
    margin: 2rem;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33% - 4rem);
      margin: 2rem;
    }
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33% - 4rem);
      margin: 2rem;
    }

    &--link {
      position: relative;
      padding-top: 8rem;
    }

    &--icon {
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 0;
      left: 0;
      width: 5rem;
      height: 5rem;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      &--stopwatch {
        background-image: url(${stopWatch});
      }

      &--score {
        width: 10rem;
        height: 5rem;
        background-image: url(${scoreBoard});
      }

      &--trophy {
        width: 5rem;
        height: 7.5rem;
        background-image: url(${trophy});
      }

      &--question {
        background-image: url(${questionMark});
      }

      &--book {
        width: 5rem;
        height: 7.5rem;
        background-image: url(${book});
      }

      &--map {
        width: 8rem;
        height: 6rem;
        background-image: url(${scrollMap});
      }
    }

    &--title {
      width: 100%;

      h3 {
        font-family: ${props => props.theme.fontSec};
        text-align: center;
      }
    }
  }
`

class QuickIconLinks extends Component {
  render() {
    const icons = this.props.data.quickIcons
    return (
      <QuickIconLinksStyled class="quickicons">
        <StandardWrapper>
          {icons.map((icon, index) => {
            return (
              <div key={index} className="quickicons__item">
                <div className="quickicons__item--link">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={icon.external}
                  >
                    <i
                      className={`quickicons__item--icon quickicons__item--icon--${
                        icon.icon
                      }`}
                    />
                  </a>
                </div>
                <div className="quickicons__item--title">
                  <h3>{icon.title}</h3>
                </div>
              </div>
            )
          })}
        </StandardWrapper>
      </QuickIconLinksStyled>
    )
  }
}

export default QuickIconLinks
