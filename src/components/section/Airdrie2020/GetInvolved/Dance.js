import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { NormalAchor } from "../../../styles/commons/Buttons"

const DanceStyled = styled.section`
  .dance__next {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 10rem;
  }

  .dance__learn {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  .dance__meta {
    width: calc(100%);

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
    }

    &--title {
      position: relative;
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      text-align: center;

      h2 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};
      }

      p {
        margin: 0;
        color: ${props => props.theme.mandarinOrange};
      }

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: 10rem;
        height: 0.75rem;
        margin: 0 auto;
        background: ${props => props.theme.black};
        content: "";
      }
    }

    &--date {
      margin-bottom: 2rem;
      text-align: center;

      p {
        margin: 0;
      }
    }

    &--button {
      text-align: center;
    }
  }

  .dance__image {
    position: relative;
    width: calc(100%);

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 2rem);
    }

    &--title {
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      z-index: 100;
      text-align: center;

      p {
        display: inline-block;
        padding: 1rem 4rem;
        margin: 0;
        background: ${props => props.theme.mandarinOrange};
        color: ${props => props.theme.white};
        font-weight: 200;
        text-transform: uppercase;
      }
    }
  }
`

class Dance extends Component {
  render() {
    return (
      <DanceStyled className="dance">
        <StandardWrapper className="dance__wrapper">
          <div className="dance__next">
            <div className="dance__meta">
              <div className="dance__meta--title">
                <h2>{this.props.data.nextData.nextTitle}</h2>
                <p>{this.props.data.nextData.nextOrg}</p>
              </div>

              <div className="dance__meta--date">
                <p>{this.props.data.nextData.nextDate}</p>
                <p>{this.props.data.nextData.nextLoc}</p>
              </div>

              <div className="dance__meta--button">
                <NormalAchor
                  target="_blank"
                  href={this.props.data.nextData.nextFB}
                >
                  See More
                </NormalAchor>
              </div>
            </div>

            <div className="dance__image">
              <div className="dance__image--title">
                <p>{this.props.data.nextData.nextTitle}</p>
              </div>
              <div className="dance__image--container">
                <Img
                  fluid={
                    this.props.data.nextData.nextImg.localFile.childImageSharp
                      .fluid
                  }
                  alt={this.props.data.nextData.nextImg.imageAlt}
                />
              </div>
            </div>
          </div>

          <div className="dance__learn">
            <div className="dance__meta">
              <div className="dance__meta--title">
                <h2>{this.props.data.learnData.learnTitle}</h2>
              </div>

              <div className="dance__meta--date">
                <p>{this.props.data.learnData.learnDate}</p>
                <p>{this.props.data.learnData.learnLoc}</p>
              </div>

              <div className="dance__meta--button">
                <NormalAchor
                  target="_blank"
                  href={this.props.data.learnData.learnFB}
                >
                  See More
                </NormalAchor>
              </div>
            </div>

            <div className="dance__image">
              <div className="dance__image--title">
                <p>{this.props.data.learnData.learnTitle}</p>
              </div>
              <div className="dance__image--container">
                <Img
                  fluid={
                    this.props.data.learnData.learnImg.localFile.childImageSharp
                      .fluid
                  }
                  alt={this.props.data.learnData.learnImg.imageAlt}
                />
              </div>
            </div>
          </div>
        </StandardWrapper>
      </DanceStyled>
    )
  }
}

export default Dance
