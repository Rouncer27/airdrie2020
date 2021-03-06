import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const BulletImageStyled = styled.section`
  .bulletimage__title {
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 75rem;
    }

    h2 {
      font-family: ${props => props.theme.fontSec};
    }

    p {
      font-weight: 300;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2.2rem;
      }
    }
  }

  .bulletimage__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 60rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }

    @media (min-width: 1325px) {
      max-width: 115rem;
    }
  }

  .bulletimage__section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      margin: 5rem auto;
    }

    &--bullets {
      width: 100%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 60%;
        padding: 2rem 2.5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 50%;
        padding: 2rem 7.5rem;
      }
    }

    &--title {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      position: relative;
      text-align: center;

      h3 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};
      }

      &::after {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        width: 15rem;
        height: 1rem;
        margin: 0 auto;
        background: ${props => props.theme.persianIndigo};
        content: "";
      }
    }

    &--points {
      p {
        margin-bottom: 1.5rem;
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--image {
      position: relative;
      width: 100%;
      margin-top: 5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 40%;
        margin-top: 0;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 50%;
      }

      &--title {
        position: absolute;
        top: -2rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        text-align: center;

        h3 {
          display: inline-block;
          margin: 0;
          padding: 1rem 4rem;
          background: ${props => props.theme.persianIndigo};
          color: ${props => props.theme.white};
          font-weight: 100;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.4rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 2rem;
          }
        }
      }
    }
  }

  .bulletimage__section:nth-of-type(2n + 2) {
    flex-direction: row-reverse;
  }

  .bulletimage__section:nth-of-type(3n + 3) {
    .bulletimage__section--title {
      &::after {
        background: ${props => props.theme.pacificBlue};
      }
    }

    .bulletimage__section--image--title {
      h3 {
        background: ${props => props.theme.pacificBlue};
      }
    }
  }

  .bulletimage__section:nth-of-type(3n + 2) {
    .bulletimage__section--title {
      &::after {
        background: ${props => props.theme.persianIndigo};
      }
    }

    .bulletimage__section--image--title {
      h3 {
        background: ${props => props.theme.persianIndigo};
      }
    }
  }

  .bulletimage__section:nth-of-type(3n + 1) {
    .bulletimage__section--title {
      &::after {
        background: ${props => props.theme.mandarinOrange};
      }
    }

    .bulletimage__section--image--title {
      h3 {
        background: ${props => props.theme.mandarinOrange};
      }
    }
  }
`

class BulletImage extends Component {
  render() {
    const sections = this.props.data.bulletImageSections
    return (
      <BulletImageStyled className="bulletimage">
        <div className="bulletimage__title">
          <h2>Airdrie's Scoreboard</h2>
          <p>
            Airdrie has played host to many successful sport events over the
            years and is excited to welcome a series of new ones to the score
            sheet{" "}
          </p>
        </div>
        <div className="bulletimage__wrapper">
          {sections.map((sec, index) => {
            const title = sec.title
            const points = sec.bullet_points
            const image = sec.image.localFile.childImageSharp.fluid
            const imgAlt = sec.image.alt_text
            const imageTitle = sec.image_title

            return (
              <div key={index} className="bulletimage__section">
                <div className="bulletimage__section--bullets">
                  <div className="bulletimage__section--title">
                    <h3>{title}</h3>
                  </div>
                  <div className="bulletimage__section--points">
                    {points.map((point, index) => {
                      return <p key={index}>{point.bullet}</p>
                    })}
                  </div>
                </div>
                <div className="bulletimage__section--image">
                  <Img fluid={image} alt={imgAlt} />
                  <div className="bulletimage__section--image--title">
                    <h3>{imageTitle}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </BulletImageStyled>
    )
  }
}

export default BulletImage
