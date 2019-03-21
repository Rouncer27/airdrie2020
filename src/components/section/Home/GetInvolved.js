import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

import iconEvents from "../../../images/icons/Icons-sitewide-events.svg"
import iconGroups from "../../../images/icons/Icons-sitewide-groups.svg"
import iconHotPicks from "../../../images/icons/Icons-sitewide-hotpicks.svg"

const GetInvolvedStyled = styled.section`
  position: relative;
  padding: 12.5rem 0;
  background: #000;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    padding: 15rem 0;
  }

  .getinvolved__title {
    padding: 0 5rem;
    text-align: center;

    h2 {
      margin: 0;
      padding: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      line-height: 1;
      opacity: 0.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 10rem;
      }
    }
  }

  .getinvolved__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 95rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 110rem;
    }
  }

  .getinvolved__link {
    position: relative;
    padding-bottom: 7.5rem;
    margin-bottom: 4rem;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 8rem);
      margin: 2rem 4rem;
      padding-bottom: 5.5rem;
    }

    &:nth-of-type(1) {
      .getinvolved__link--title {
        background-image: url(${iconEvents});
      }
    }

    &:nth-of-type(2) {
      .getinvolved__link--title {
        background-image: url(${iconGroups});
      }
    }

    &:nth-of-type(3) {
      .getinvolved__link--title {
        background-image: url(${iconHotPicks});
      }
    }

    &--title {
      width: 100%;
      padding-top: 8.5rem;
      background-repeat: no-repeat;
      background-position: center 2rem;
      background-size: 6rem 6rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding-top: 7.5rem;
        background-position: center top;
      }

      h3 {
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 3rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }

    &--excerpt {
      width: 100%;
      text-align: center;

      p {
        color: ${props => props.theme.white};
        font-size: 1.6rem;
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--button {
      position: absolute;
      bottom: 1rem;
      right: 0;
      left: 0;
      width: 100%;
      margin: 0 auto;
      text-align: center;

      a {
        display: inline-block;
        padding: 0.5rem 5rem;
        border: 0.1rem solid ${props => props.theme.pacificBlue};
        transition: all 0.3s ease;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 2.6rem;
        line-height: 1.4;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }

        &:hover {
          border: 0.1rem solid ${props => props.theme.mandarinOrange};
          color: ${props => props.theme.mandarinOrange};
        }
      }
    }
  }

  .getinvolved__rip {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: cover;

    &--top {
      top: -0.5rem;
      background-image: url(${rippedPaper});
      background-position: center top;
    }

    &--bot {
      bottom: -1.75rem;
      transform: rotate(-180deg);
      background-image: url(${rippedPaperBottom});
      background-position: center top;
    }
  }
`

class GetInvolved extends Component {
  render() {
    return (
      <GetInvolvedStyled id={this.props.data.getInvovoledHash}>
        <div className="getinvolved__title">
          <h2>Get Involved</h2>
        </div>
        <div className="getinvolved__wrapper">
          {this.props.data.getInvovoledLinks.map(link => {
            return (
              <div className="getinvolved__link">
                <div className="getinvolved__link--title">
                  <h3>{link.title}</h3>
                </div>
                <div
                  className="getinvolved__link--excerpt"
                  dangerouslySetInnerHTML={{ __html: link.excerpt }}
                />
                <div className="getinvolved__link--button">
                  <Link href={link.link}>Go To Form</Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="getinvolved__rip getinvolved__rip--top " />
        <div className="getinvolved__rip getinvolved__rip--bot" />
      </GetInvolvedStyled>
    )
  }
}

export default GetInvolved
