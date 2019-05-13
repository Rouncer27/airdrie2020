import React, { Component } from "react"
import { StandardWrapper } from "../../styles/commons/Wrappers"
import styled from "styled-components"

const WeBelieveStyled = styled.section`
  .believed__wrapper {
    margin: 2rem auto;
    padding: 2rem;
  }

  .believed__title {
    position: relative;
    width: 100%;
    padding: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 2.5rem 0;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 2.5rem 3.5rem;
    }

    h2 {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      font-family: ${props => props.theme.fontSec};
      font-size: 3.4rem;
      text-align: center;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpTablet}) {
        max-width: 75rem;
        font-size: 5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 75rem;
        font-size: 6rem;
      }

      span {
        display: block;
      }
    }

    p {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      width: 100%;
      margin: auto;
      padding: 0;
      transform: translateY(-50%);
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};
      font-size: 5rem;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;
      opacity: 0.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 8rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 15rem;
      }
    }
  }

  .believed__blue,
  .believed__content {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }
  }

  .believed__content {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }
    p {
      font-weight: 300;
    }
  }

  .believed__blue {
    padding: 3rem 0 0;
    p {
      color: ${props => props.theme.pacificBlue};
      font-weight: 400;
    }
  }
`

class WeBelieve extends Component {
  render() {
    const hash = this.props.data.weBelieveHash
    const titleTop = this.props.data.weBelieveTitleTop
    const titleBot = this.props.data.weBelieveTitleBot
    const titleBG = this.props.data.weBelieveBg
    const introBlue = this.props.data.weBelieveIntro
    const content = this.props.data.weBelieveContent
    return (
      <WeBelieveStyled id={hash} className="believed">
        <StandardWrapper className="believed__wrapper">
          <div className="believed__title">
            <h2>
              <span>{titleTop}</span>
              <span>{titleBot}</span>
            </h2>
            <div className="believed__title--background">
              <p>{titleBG}</p>
            </div>
          </div>
          <div
            className="believed__blue"
            dangerouslySetInnerHTML={{ __html: introBlue }}
          />
          <div
            className="believed__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </StandardWrapper>
      </WeBelieveStyled>
    )
  }
}

export default WeBelieve
