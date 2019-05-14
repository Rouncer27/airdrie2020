import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const VolunteerPostingStyled = styled.section`
  .volunpost__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 110rem;
    }
  }

  .volunpost__title {
    max-width: 75rem;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
  }

  .volunpost__postings {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    &--item {
      text-align: center;
      width: calc(100%);
      margin: 2rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 4rem);
        margin: 2rem;
      }

      @media (min-width: 900px) {
        width: calc(33.33% - 4rem);
        margin: 2rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(20% - 1rem);
        margin: 2rem 0.5rem;
      }

      h3 {
        margin: 0 auto;
        font-weight: 500;
        font-size: 1.8rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      p {
        margin: 0 auto;
        color: ${props => props.theme.pacificBlue};
        font-size: 1.8rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      a {
        margin: 0 auto;
        transition: all 0.3s ease;
        color: ${props => props.theme.black};
        font-weight: 300;
        font-size: 1.8rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }

        &:hover {
          color: ${props => props.theme.mandarinOrange};
        }
      }
    }
  }
`

class VolunteerPosting extends Component {
  render() {
    const { volunteerTitle, volunteerPostings } = this.props.data

    return (
      <VolunteerPostingStyled className="volunpost">
        <StandardWrapper className="volunpost__wrapper">
          <div className="volunpost__title">
            <h2>{volunteerTitle}</h2>
          </div>
          <div className="volunpost__postings">
            {volunteerPostings.map((post, index) => {
              return (
                <div key={index} className="volunpost__postings--item">
                  <h3>{post.team_name}</h3>
                  <p>{post.position}</p>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={post.website}
                  >
                    Visit Website
                  </a>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
      </VolunteerPostingStyled>
    )
  }
}

export default VolunteerPosting
