import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { BackgroundTitle } from "../../styles/commons/Titles"
import { StandardParagraphs } from "../../styles/commons/Paragraphs"
import { NormalButton } from "../../styles/commons/Buttons"

const LocalAthletsStyled = styled.section`
  .localathletes__intro--title {
    h2 {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 100%;
      }
    }
  }

  .localathletes__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin: 2.5rem auto;
  }

  .localathletes__athlete {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 2rem);
      margin: 4rem 1rem;
    }

    &--image {
      width: calc(100%);
      padding: 0 2rem;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(50% - 2rem);
        margin-right: 2rem;
      }

      img {
        max-width: 100%;
      }
    }

    &--meta {
      width: calc(50% - 2rem);
      margin-left: 2rem;

      &--title {
        h2 {
          display: inline-block;
          margin: 0;
          background-color: ${props => props.theme.mandarinOrange};
          padding: 0.25rem 2rem;
          color: ${props => props.theme.white};
          font-weight: 200;
          text-align: center;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.6rem;
          }
        }

        h3 {
          font-family: ${props => props.theme.fontSec};

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 2rem;
          }
        }
      }

      &--action {
        p {
          margin: 0;
          margin-bottom: 1rem;
          color: ${props => props.theme.mandarinOrange};
          font-family: ${props => props.theme.fontSec};

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 4rem;
          }
        }
      }

      &--button {
      }
    }

    &--bio {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      transition: all 0.3s ease;
      visibility: hidden;
      opacity: 0;
      z-index: 500;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 100%;
      }

      &--modal {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        margin: 2.5rem auto;
        margin: auto;
        padding: 5rem;
        transform: translate(-50%, -50%);
        background: ${props => props.theme.white};
        z-index: 20;
        @media (min-width: ${props => props.theme.bpDesksm}) {
          max-width: 75rem;
        }

        .localathletes__athlete--image,
        .localathletes__athlete--meta {
          padding-bottom: 5rem;
        }

        &--button {
          button {
            position: absolute;
            top: -2.5rem;
            right: -2.5rem;
            display: inline-block;
            width: 5rem;
            height: 5rem;
            background: ${props => props.theme.white};
            border-radius: 50%;
            border: 0.2rem solid ${props => props.theme.pacificBlue};
            transition: all 0.3s ease;

            &::after {
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transition: all 0.3s ease;
              transform: translate(-50%, -50%);
              color: ${props => props.theme.pacificBlue};
              font-family: ${props => props.theme.fontAwesome};
              content: "\f00d";
            }

            &:hover {
              cursor: pointer;
              border: 0.2rem solid ${props => props.theme.mandarinOrange};

              &::after {
                color: ${props => props.theme.mandarinOrange};
              }
            }
          }
        }
      }

      &--background {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.mandarinOrange};
        z-index: 10;
        opacity: 0.25;
      }
    }
  }

  .localathletes__athlete.bio-active {
    .localathletes__athlete--bio {
      visibility: visible;
      opacity: 1;
    }
  }
`

class LocalAthlets extends Component {
  constructor() {
    super()
    this.toggleTheBioModel = this.toggleTheBioModel.bind(this)
    this.closeTheBioModel = this.closeTheBioModel.bind(this)
    this.state = {
      activeAthlete: null,
    }
  }

  closeTheBioModel() {
    this.setState(prevState => {
      return {
        ...prevState,
        activeAthlete: null,
      }
    })
  }

  toggleTheBioModel(e) {
    const activeIndex = parseInt(e.target.dataset.athlete, 10)

    this.setState(prevState => {
      return {
        ...prevState,
        activeAthlete: activeIndex,
      }
    })
  }

  render() {
    const {
      localAthlets,
      localAthletsBg,
      localAthletsIntro,
      localAthletsTitle,
    } = this.props.data

    return (
      <LocalAthletsStyled className="localathletes">
        <StandardWrapper className="localathletes__wrapper">
          <div className="localathletes__intro">
            <BackgroundTitle className="localathletes__intro--title">
              <h2>{localAthletsTitle}</h2>
              <p>{localAthletsBg}</p>
            </BackgroundTitle>
            <StandardParagraphs
              dangerouslySetInnerHTML={{ __html: localAthletsIntro }}
              className="localathletes__intro--content"
            />
          </div>
          <div className="localathletes__container">
            {localAthlets.map((athlete, index) => {
              const { name, bio_title, bio_content, action_word } = athlete
              const bioImg = athlete.image.localFile.childImageSharp.fluid
              const bioImgAlt = athlete.image.alt_text
              const bioActiveClass =
                this.state.activeAthlete === index ? " bio-active" : ""

              return (
                <div
                  key={index}
                  className={`localathletes__athlete${bioActiveClass}`}
                >
                  <div className="localathletes__athlete--image">
                    <Img fluid={bioImg} alt={bioImgAlt} />
                  </div>

                  <div className="localathletes__athlete--meta">
                    <div className="localathletes__athlete--meta--title">
                      <h2>{name}</h2>
                      <h3>{bio_title}</h3>
                    </div>

                    <div className="localathletes__athlete--meta--action">
                      <p>{action_word}</p>
                    </div>

                    <div className="localathletes__athlete--meta--button">
                      <NormalButton
                        data-athlete={index}
                        onClick={this.toggleTheBioModel}
                      >
                        Read
                      </NormalButton>
                    </div>
                  </div>

                  <div className="localathletes__athlete--bio">
                    <div className="localathletes__athlete--bio--modal">
                      <div className="localathletes__athlete--image">
                        <Img fluid={bioImg} alt={bioImgAlt} />
                      </div>
                      <div className="localathletes__athlete--meta">
                        <div className="localathletes__athlete--meta--title">
                          <h2>{name}</h2>
                          <h3>{bio_title}</h3>
                        </div>

                        <div className="localathletes__athlete--meta--action">
                          <p>{action_word}</p>
                        </div>

                        <div className="localathletes__athlete--bio--modal--button">
                          <button
                            data-athlete={index}
                            onClick={this.closeTheBioModel}
                          />
                        </div>
                      </div>

                      <StandardParagraphs
                        dangerouslySetInnerHTML={{ __html: bio_content }}
                      />
                    </div>

                    <div
                      onClick={this.closeTheBioModel}
                      className="localathletes__athlete--bio--background"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
      </LocalAthletsStyled>
    )
  }
}

export default LocalAthlets