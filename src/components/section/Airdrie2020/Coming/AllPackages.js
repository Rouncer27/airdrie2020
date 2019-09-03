import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"

const AllPackagesStyled = styled.section`
  .packages__wrapper {
    justify-content: flex-start;
  }

  .packages__coming-soon {
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      margin-bottom: 10rem;
    }
  }

  .packages__item {
    display: block;
    position: relative;
    width: calc(50%);
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      margin: 2rem;
    }

    &--content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 2rem;
      color: ${props => props.theme.white};
      z-index: 100;

      h3 {
        margin: 0;
        margin-bottom: 0.5rem;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpDesksm}) {
        }
      }

      p {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 500;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--image {
      width: 100%;
      z-index: 5;
    }

    &--background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.black};
      opacity: 0.5;
      z-index: 50;
    }
  }
`

class AllPackages extends Component {
  render() {
    const { packages } = this.props.data
    return (
      <AllPackagesStyled className="packages">
        <StandardWrapper className="packages__wrapper">
          {packages.map((pack, index) => {
            return (
              <Link
                to={`/packages/${pack.node.slug}`}
                key={index}
                className="packages__item"
              >
                <div className="packages__item--content">
                  <h3>{pack.node.acf._att_pack_name}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pack.node.acf._att_pack_excerpt,
                    }}
                  />
                </div>
                <div className="packages__item--image">
                  <Img
                    fluid={
                      pack.node.acf._att_page_hero_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={pack.node.acf._att_page_hero_image.alt_text}
                  />
                </div>
                <div className="packages__item--background" />
              </Link>
            )
          })}
        </StandardWrapper>
      </AllPackagesStyled>
    )
  }
}

export default AllPackages
