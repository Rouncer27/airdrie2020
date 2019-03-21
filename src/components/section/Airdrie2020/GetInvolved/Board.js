import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"
import { NormalButton } from "../../../styles/commons/Buttons"

const BoardStyled = styled.section`
  .board__title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-width: 100%;
      }
    }
  }

  .boardmembers__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin: 2.5rem auto;
  }

  .boardmembers__member {
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

        .boardmembers__member--image,
        .boardmembers__member--meta {
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

  .boardmembers__member.bio-active {
    .boardmembers__member--bio {
      visibility: visible;
      opacity: 1;
    }
  }
`

class Board extends Component {
  constructor(props) {
    super(props)
    this.toggleTheBioModel = this.toggleTheBioModel.bind(this)
    this.closeTheBioModel = this.closeTheBioModel.bind(this)
    this.state = {
      activeBio: null,
    }
  }

  closeTheBioModel() {
    this.setState(prevState => {
      return {
        ...prevState,
        activeBio: null,
      }
    })
  }

  toggleTheBioModel(e) {
    const activeIndex = parseInt(e.target.dataset.board, 10)

    this.setState(prevState => {
      return {
        ...prevState,
        activeBio: activeIndex,
      }
    })
  }

  render() {
    const { boardTitle, boardMembers } = this.props.data
    return (
      <BoardStyled className="board">
        <StandardWrapper className="board__wrapper">
          <div className="board__title">
            <h2>{boardTitle}</h2>
          </div>

          <div className="boardmembers__container">
            {boardMembers.map((member, index) => {
              const { name, bio_content, position } = member
              const bioImg = member.image.localFile.childImageSharp.fluid
              const bioImgAlt = member.image.alt_text
              const bioActiveClass =
                this.state.activeBio === index ? " bio-active" : ""

              return (
                <div
                  key={index}
                  className={`boardmembers__member${bioActiveClass}`}
                >
                  <div className="boardmembers__member--image">
                    <Img fluid={bioImg} alt={bioImgAlt} />
                  </div>

                  <div className="boardmembers__member--meta">
                    <div className="boardmembers__member--meta--title">
                      <h2>{name}</h2>
                    </div>

                    <div className="boardmembers__member--meta--action">
                      <p>{position}</p>
                    </div>

                    <div className="boardmembers__member--meta--button">
                      <NormalButton
                        data-board={index}
                        onClick={this.toggleTheBioModel}
                      >
                        Read
                      </NormalButton>
                    </div>
                  </div>

                  <div className="boardmembers__member--bio">
                    <div className="boardmembers__member--bio--modal">
                      <div className="boardmembers__member--image">
                        <Img fluid={bioImg} alt={bioImgAlt} />
                      </div>
                      <div className="boardmembers__member--meta">
                        <div className="boardmembers__member--meta--title">
                          <h2>{name}</h2>
                        </div>

                        <div className="boardmembers__member--meta--action">
                          <p>{position}</p>
                        </div>

                        <div className="boardmembers__member--bio--modal--button">
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
                      className="boardmembers__member--bio--background"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
      </BoardStyled>
    )
  }
}

export default Board