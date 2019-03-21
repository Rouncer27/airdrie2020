import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const BoardPostingStyled = styled.section`
  position: relative;
  padding: 15rem 0;
  background: #000;

  .boardpost__title {
    margin-bottom: 4rem;

    h2 {
      margin: 0;
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.6rem;
      }
    }
  }

  .boardpost__postings {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &--item {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(50% - 6rem);
        margin: 1rem 3rem;
      }

      h3 {
        margin: 0;
        color: ${props => props.theme.white};
        font-weight: 300;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }
    }
  }

  .boardpost__rip {
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
      bottom: -1.8rem;
      transform: rotate(-180deg);
      background-image: url(${rippedPaperBottom});
      background-position: center top;
    }
  }
`

class BoardPosting extends Component {
  render() {
    const { boardTitle, boardPostings } = this.props.data
    return (
      <BoardPostingStyled className="boardpost">
        <StandardWrapper className="boardpost__wrapper">
          <div className="boardpost__title">
            <h2>{boardTitle}</h2>
          </div>

          <div className="boardpost__postings">
            {boardPostings.map((post, index) => {
              return (
                <div key={index} className="boardpost__postings--item">
                  <h3>{post.org_name}</h3>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
        <div className="boardpost__rip boardpost__rip--top" />
        <div className="boardpost__rip boardpost__rip--bot" />
      </BoardPostingStyled>
    )
  }
}

export default BoardPosting
