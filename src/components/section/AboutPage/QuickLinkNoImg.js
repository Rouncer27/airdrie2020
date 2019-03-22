import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const QuickLinkNoImgStyled = styled.section`
  padding: 4rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 0rem 0;
  }

  .qlnoimg__wrapper {
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

  .qlnoimg__title {
    text-align: center;
    padding: 0 2rem;

    h2 {
      margin: 0;
      font-family: ${props => props.theme.fontSec};
      font-size: 2.6rem;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4.2rem;
      }
    }
  }

  .qlnoimg__item {
    position: relative;
    padding-bottom: 6.5rem;
    width: 100%;
    margin: 3rem auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 8rem);
      margin: 2rem 4rem;
      padding-bottom: 7.5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      padding-bottom: 5rem;
    }

    &--title {
      width: 100%;
      text-align: center;

      h2 {
        font-family: ${props => props.theme.fontSec};
        font-size: 2.4rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }

    &--excerpt {
      width: 100%;
      text-align: center;

      p {
        font-weight: 300;
        font-size: 1.6rem;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--link {
      position: absolute;
      bottom: 1rem;
      right: 0;
      left: 0;
      width: 100%;
      margin: 0 auto;
      text-align: center;

      a {
        display: inline-block;
        padding: 0 5rem;
        border: 0.1rem solid ${props => props.theme.pacificBlue};
        transition: all 0.3s ease;
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontSec};
        font-size: 2.8rem;
        line-height: 1.4;

        @media (min-width: ${props => props.theme.bpTablet}) {
          padding: 1rem 2rem;
          font-size: 2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          padding: 0 5rem;
          font-size: 2.4rem;
        }

        &:hover {
          border: 0.1rem solid ${props => props.theme.mandarinOrange};
          color: ${props => props.theme.mandarinOrange};
        }
      }
    }
  }
`

class QuickLinkNoImg extends Component {
  render() {
    const links = this.props.data.quickLinks

    return (
      <QuickLinkNoImgStyled className="qlnoimg">
        <div className="qlnoimg__wrapper">
          {links.map((link, index) => {
            return (
              <div key={index} className="qlnoimg__item">
                <div className="qlnoimg__item--title">
                  <h2>{link.title}</h2>
                </div>
                <div
                  className="qlnoimg__item--excerpt"
                  dangerouslySetInnerHTML={{ __html: link.content }}
                />
                <div className="qlnoimg__item--link">
                  <Link to={link.page_slug}>{link.button_text}</Link>
                </div>
              </div>
            )
          })}
        </div>
      </QuickLinkNoImgStyled>
    )
  }
}

export default QuickLinkNoImg
