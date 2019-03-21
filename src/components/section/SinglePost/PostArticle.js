import React, { Component } from "react"
import Img from "gatsby-image"
import moment from "moment"
import styled from "styled-components"

const PostArticleStyled = styled.article`
  .postart__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 4rem;
  }

  .postart__cat {
    width: 100%;
    text-align: center;

    p {
      display: inline-block;
      margin: 0;
      padding: 1rem 3rem;
      background: ${props => props.theme.pacificBlue};
      color: ${props => props.theme.white};
      text-transform: uppercase;
    }
  }

  .postart__title {
    position: relative;
    width: 100%;
    margin: 4rem auto 3rem;
    padding-bottom: 3rem;
    text-align: center;

    h1 {
      margin: 0 auto;
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4rem;
      }
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
      background: ${props => props.theme.black};
      content: "";
    }
  }

  .postart__author {
    width: 100%;
    text-align: center;

    p {
      margin: 0 auto;
      color: ${props => props.theme.pacificBlue};
      text-transform: uppercase;
    }
  }

  .postart__date {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    p {
      margin: 0 auto;
    }
  }

  .postart__featuredimg {
    width: 100%;
    margin-bottom: 3rem;

    .gatsby-image-wrapper {
      max-width: 60rem;
      margin: 0 auto;

      img {
        max-width: 60rem;
        margin: 0 auto;
      }
    }
  }

  .postart__content {
    p {
      color: #363636;
      font-weight: 300;
    }
  }
`

class PostArticle extends Component {
  render() {
    const { title, date, author, img, content, categories } = this.props.data
    return (
      <PostArticleStyled className="postart">
        <div className="postart__wrapper">
          <div className="postart__cat">
            <p>{categories.length > 0 && categories[0].name}</p>
          </div>
          <div className="postart__title">
            <h1>{title}</h1>
          </div>
          <div className="postart__author">
            <p>By: {author}</p>
          </div>
          <div className="postart__date">
            <p>{moment(date).format("MMMM, D / YYYY")}</p>
          </div>
          <div className="postart__featuredimg">
            <Img
              fluid={img.localFile.childImageSharp.fluid}
              alt={img.alt_text}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="postart__content"
          />
        </div>
      </PostArticleStyled>
    )
  }
}

export default PostArticle
