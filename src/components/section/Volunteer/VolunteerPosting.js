import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const VolunteerPostingStyled = styled.section`
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
      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(20% - 1rem);
        margin: 2rem 0.5rem;
      }

      h3 {
        margin: 0 auto;
        font-weight: 500;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      p {
        margin: 0 auto;
        color: ${props => props.theme.pacificBlue};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      a {
        margin: 0 auto;
        transition: all 0.3s ease;
        color: ${props => props.theme.black};
        font-weight: 300;

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
                  <a target="_blank" href={post.website}>
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
