import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const FeaturedVolunteerStyled = styled.section`
  padding: 5rem 0;

  .featvol__wrapper {
    align-items: center;
  }

  .featvol__content {
    width: calc(100%);
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--header {
      position: relative;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      text-align: center;

      h2 {
        margin: 0 auto;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.4rem;
        }
      }

      .featvol-sub-title {
        margin: 0 auto;
        color: ${props => props.theme.persianIndigo};
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      &::after {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: 10rem;
        height: 0.75rem;
        background: ${props => props.theme.black};
        margin: 0 auto;
        content: "";
      }
    }

    &--paragraphs {
      text-align: center;

      p {
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p:last-of-type {
        margin: 0;
      }
    }
  }

  .featvol__image {
    position: relative;
    width: calc(100%);
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--title {
      position: absolute;
      top: -2rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      text-align: center;
      z-index: 100;

      h2 {
        display: inline-block;
        margin: 0 auto;
        padding: 1rem 2rem;
        background-color: ${props => props.theme.persianIndigo};
        color: ${props => props.theme.white};
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--img {
      position: relative;
      z-index: 10;
    }
  }
`

class FeaturedVolunteer extends Component {
  render() {
    const {
      volunteerImg,
      volunteerName,
      volunteerSub,
      volunteerContent,
    } = this.props.data

    return (
      <FeaturedVolunteerStyled className="featvol">
        <StandardWrapper className="featvol__wrapper">
          <div className="featvol__content">
            <div className="featvol__content--header">
              <h2>{volunteerName}</h2>
              <p className="featvol-sub-title">{volunteerSub}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: volunteerContent }}
              className="featvol__content--paragraphs"
            />
          </div>
          <div className="featvol__image">
            <div className="featvol__image--title">
              <h2>Featured Volunteer</h2>
            </div>
            <div className="featvol__image--img">
              <Img
                fluid={volunteerImg.localFile.childImageSharp.fluid}
                alt={volunteerImg.alt_text}
              />
            </div>
          </div>
        </StandardWrapper>
      </FeaturedVolunteerStyled>
    )
  }
}

export default FeaturedVolunteer
