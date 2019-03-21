import React, { Component } from "react"
import styled from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const LetsTalkStyled = styled.section`
  .letstalk__wrapper {
  }

  .letstalk__title {
    width: 100%;
    padding: 7.5rem 2rem 2rem;
    text-align: center;

    h2 {
      margin: 0 0 1rem;
      padding: 0;
      font-family: ${props => props.theme.fontSec};
      line-height: 1;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4rem;
      }
    }

    p {
      margin: 0;
      padding: 0;
      font-family: ${props => props.theme.fontSec};
      color: ${props => props.theme.pacificBlue};
      line-height: 1;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 3rem;
      }
    }
  }

  .letstalk__tweets {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;

    .slick-slide {
      &:focus {
        outline: none;
      }
    }

    .slick-dots {
      margin: 1rem auto;
      li {
        display: inline-block;
        margin: 0 0.5rem;

        button {
          background: ${props => props.theme.pacificBlue};
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 0.1rem solid ${props => props.theme.grey};
          color: transparent;
        }

        &.slick-active {
          button {
            background: ${props => props.theme.mandarinOrange};
          }
        }
      }
    }

    &--row {
      width: 100%;

      .letstalk__tweet:nth-of-type(1) {
        margin-right: 5rem !important;
        margin-left: 6rem !important;
      }

      .letstalk__tweet:nth-of-type(2) {
        margin-right: 1rem !important;
        margin-left: 10rem !important;
      }
    }
  }

  .letstalk__tweet {
    position: relative;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2rem;
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

    &::before {
      display: block;
      position: absolute;
      top: 47.5%;
      left: -1.6rem;
      width: 2rem;
      height: 2rem;
      transform: rotate(45deg) translateY(-50%);
      background: ${props => props.theme.white};
      box-shadow: -0rem 0.3rem 0 0 rgba(0, 0, 0, 0.1);
      z-index: 500;
      content: "";
    }

    &::after {
      font-family: ${props => props.theme.fontAwesome};
      display: block;
      position: absolute;
      top: 50%;
      left: -4.5rem;
      width: 2.5rem;
      height: 2.5rem;
      transform: translateY(-50%);
      color: ${props => props.theme.pacificBlue};
      font-size: 3rem;
      line-height: 0.8;
      content: "\f099";
    }

    &--content {
      p {
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p:last-of-type {
        margin: 0;
        padding: 0;
      }
    }

    &--handle {
      p {
        margin: 0;
        margin-top: 1rem;
        padding: 0;
        font-weight: 700;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`

class LetsTalk extends Component {
  render() {
    var settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    const originalTweets = this.props.data.letsTalkTweets
    let rowTweets = []
    const tweetsPerRow = 2

    rowTweets = originalTweets
      .map(function(e, i) {
        return i % tweetsPerRow === 0
          ? originalTweets.slice(i, i + tweetsPerRow)
          : null
      })
      .filter(function(e) {
        return e
      })

    return (
      <LetsTalkStyled id={this.props.data.letsTalkHash}>
        <div className="letstalk__wrapper">
          <div className="letstalk__title">
            <h2>{this.props.data.letsTalkTitle}</h2>
            <p>{this.props.data.letsTalkHashtag}</p>
          </div>

          <Slider {...settings} className="letstalk__tweets">
            {rowTweets.map((twoTweets, index) => {
              return (
                <div key={index} class="letstalk__tweets--row">
                  {twoTweets.map((tweet, index) => {
                    return (
                      <div key={index} className="letstalk__tweet">
                        <div className="letstalk__tweet--content">
                          <p>{tweet.content}</p>
                        </div>
                        <div className="letstalk__tweet--handle">
                          <p>{tweet.handle}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Slider>
        </div>
      </LetsTalkStyled>
    )
  }
}

export default LetsTalk
