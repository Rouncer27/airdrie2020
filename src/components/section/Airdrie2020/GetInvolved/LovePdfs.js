import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { NormalAchor } from "../../../styles/commons/Buttons"
import { StandardParagraphs } from "../../../styles/commons/Paragraphs"
import rippedPaper from "../../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../../images/ripped/AIR-2020-paper-03-rough.svg"

import shoes from "../../../../images/icons/airdrie2020/Icons-sitewide-volunteer.svg"
import sign from "../../../../images/icons/airdrie2020/Icons-sitewide-sponsors.svg"
import check from "../../../../images/icons/airdrie2020/Icons-sitewide-checkmark.svg"

const LovePdfsStyled = styled.section`
  padding-top: 10rem;

  .lovepdfs__wrappert {
    justify-content: space-evenly;
  }

  .lovepdfs__vols,
  .lovepdfs__spon {
    width: calc(50%);
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33% - 4rem);
      margin: 2rem;
    }

    &--title {
      position: relative;
      padding-top: 10rem;

      h2 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};
      }

      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
        z-index: 100;
      }
    }

    &--intro {
      p {
      }
    }
  }

  .lovepdfs__vols {
    &--title {
      &::after {
        background-image: url(${shoes});
      }
    }
  }

  .lovepdfs__spon {
    &--title {
      &::after {
        background-image: url(${sign});
      }
    }
  }

  .lovepdfs__love {
    position: relative;
    padding: 15rem 0;
    background-color: ${props => props.theme.black};

    &--item {
      width: calc(50%);
      text-align: center;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(33.3333% - 4rem);
        margin: 2rem;
      }

      &--title {
        padding-top: 7.5rem;
        position: relative;

        h3 {
          margin: 0;
          margin-bottom: 0.5rem;
          color: ${props => props.theme.white};
          font-family: ${props => props.theme.fontSec};
        }

        &::after {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 7.5rem;
          height: 7.5rem;
          margin: 0 auto;
          background-image: url(${check});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          content: "";
          z-index: 100;
        }
      }

      &--intro {
        p {
          margin: 0;
          color: ${props => props.theme.white};
          font-weight: 300;
        }
      }

      &--button {
        margin-top: 2rem;

        a {
          padding: 1rem 2rem;
          color: ${props => props.theme.white};

          &:hover {
            color: ${props => props.theme.mandarinOrange};
          }
        }
      }
    }

    .lovepdfs__love--rip {
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
  }
`

class LovePdfs extends Component {
  render() {
    const { volIntro, volLink, sponIntro, sponPdf, loveSpon } = this.props.data
    return (
      <LovePdfsStyled className="lovepdfs">
        <StandardWrapper className="lovepdfs__wrappert">
          <div className="lovepdfs__vols">
            <div className="lovepdfs__vols--title">
              <h2>Volunteer</h2>
            </div>
            <StandardParagraphs
              dangerouslySetInnerHTML={{ __html: volIntro }}
              className="lovepdfs__vols--intro"
            />
            <div className="lovepdfs__vols--button">
              <NormalAchor target="_blank" href={volLink}>
                Sign Up
              </NormalAchor>
            </div>
          </div>

          <div className="lovepdfs__spon">
            <div className="lovepdfs__spon--title">
              <h2>Sponsorships</h2>
            </div>
            <StandardParagraphs
              dangerouslySetInnerHTML={{ __html: sponIntro }}
              className="lovepdfs__spon--intro"
            />
            <div className="lovepdfs__spon--button">
              <NormalAchor target="_blank" href={sponPdf.localFile.publicURL}>
                Get your Game On
              </NormalAchor>
            </div>
          </div>
        </StandardWrapper>

        <div className="lovepdfs__love">
          <StandardWrapper className="lovepdfs__wrapperb">
            {loveSpon.map((spon, index) => {
              return (
                <div key={index} className="lovepdfs__love--item">
                  <div className="lovepdfs__love--item--title">
                    <h3>{spon.title}</h3>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: spon.intro }}
                    className="lovepdfs__love--item--intro"
                  />
                  <div className="lovepdfs__love--item--button">
                    <NormalAchor href={spon.pdf.localFile.publicURL}>
                      Download PDF
                    </NormalAchor>
                  </div>
                </div>
              )
            })}
          </StandardWrapper>
          <div className="lovepdfs__love--rip lovepdfs__love--rip--top" />
          <div className="lovepdfs__love--rip lovepdfs__love--rip--bot" />
        </div>
      </LovePdfsStyled>
    )
  }
}

export default LovePdfs
