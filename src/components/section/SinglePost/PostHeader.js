import React, { Component } from "react"
import styled from "styled-components"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"

const PostHeaderStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 10rem 2rem 2rem;
  background: #000;
  text-align: center;

  .postheader__content {
    position: relative;
    z-index: 100;
  }

  p {
    position: relative;
    margin: 0;
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontSec};
    z-index: 100;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 10rem;
    }
  }

  .postheader__rip {
    display: block;
    position: absolute;
    right: 0;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    height: 5rem;
    transform: rotate(-180deg);
    background-image: url(${rippedPaper});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    z-index: 1;
  }
`

class PostHeader extends Component {
  render() {
    return (
      <PostHeaderStyled className="postheader">
        <div className="postheader__content">
          <p>Sports News</p>
        </div>
        <div className="postheader__rip" />
      </PostHeaderStyled>
    )
  }
}

export default PostHeader
