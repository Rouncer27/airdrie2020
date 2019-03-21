import React, { Component } from "react"

import styled from "styled-components"

const PillarsStyled = styled.section`
  .pillars__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 95rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 115rem;
    }
  }

  .pillars__title {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
  }

  .pillars__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .pillars__item {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(25% - 4rem);
      margin: 0 2rem;
    }

    &--title {
      width: 100%;

      h3 {
        margin: 0;
        color: ${props => props.theme.pacificBlue};
        font-family: ${props => props.theme.fontSec};
        text-align: left;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.4rem;
        }
      }
    }

    &--content {
      p {
        font-weight: 300;
        text-align: left;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
          line-height: 1.4;
        }
      }
    }
  }

  .pillars__bottom {
    width: 100%;
    margin-top: 3rem;
    text-align: center;

    p {
      color: ${props => props.theme.pacificBlue};
    }
  }
`

class Pillars extends Component {
  render() {
    const hash = this.props.data.pillarsHash
    const title = this.props.data.pillarsTitle
    const pillars = this.props.data.pillars
    const content = this.props.data.pillarsContent
    return (
      <PillarsStyled id={hash} className="pillars">
        <div className="pillars__wrapper">
          <div className="pillars__title">
            <h2>{title}</h2>
          </div>
          <div className="pillars__container">
            {pillars.map((pill, index) => {
              return (
                <div key={index} className="pillars__item">
                  <div className="pillars__item--title">
                    <h3>{pill.title}</h3>
                  </div>
                  <div
                    className="pillars__item--content"
                    dangerouslySetInnerHTML={{ __html: pill.content }}
                  />
                </div>
              )
            })}
          </div>
          <div className="pillars__bottom">
            <p>{content}</p>
          </div>
        </div>
      </PillarsStyled>
    )
  }
}

export default Pillars
