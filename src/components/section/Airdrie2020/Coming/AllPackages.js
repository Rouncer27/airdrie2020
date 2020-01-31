import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import HotelDefault from "./HotelDefault"
import FoodDefault from "./FoodDefault"
import EventsDefault from "./EventsDefault"

export const fontSizer = (
  minFont = 1.8,
  maxFont = 2.2,
  minScreen = 76.8,
  maxScreen = 110,
  mobileFont = 1.8
) => {
  return `
  font-size: calc(${mobileFont} * 1rem);

  @media (min-width: calc(${minScreen} * 10px)) {
    font-size: calc(
      (${minFont} * 1rem) + (${maxFont} - ${minFont}) *
        (((100vw - (${minScreen} * 1rem))) / (${maxScreen} - ${minScreen}))
    );
  }

  @media (min-width: calc(${maxScreen} * 10px)) {
    font-size: calc(${maxFont} * 1rem);
  }
  `
}

const AllPackagesStyled = styled.section`
  .packages__wrapper {
    justify-content: flex-start;
  }

  .package-title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
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
    width: calc(100% - 4rem);
    margin: 2rem;
    text-align: center;

    @media(min-width: 768px) {
      width: calc(50% - 4rem);
    margin: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 2rem);
      margin: 1rem;
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
        ${fontSizer(1.8, 2.4, 76.8, 150, 1.8)}

        @media (min-width: ${props => props.theme.bpDesksm}) {
        }
      }

      p {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 500;
        ${fontSizer(1.6, 1.8, 76.8, 150, 1.6)}
        
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
    const { packages, packageTypes } = this.props.data
    const eventPacks = packages.filter(pack => {
      if (pack.node.package_type[0] === packageTypes[0].node.wordpress_id) {
        return pack
      }
    })

    const foodPacks = packages.filter(pack => {
      if (pack.node.package_type[0] === packageTypes[1].node.wordpress_id) {
        return pack
      }
    })

    const hotelPacks = packages.filter(pack => {
      if (pack.node.package_type[0] === packageTypes[2].node.wordpress_id) {
        return pack
      }
    })

    return (
      <AllPackagesStyled className="packages">
        <StandardWrapper className="packages__wrapper">
          {hotelPacks.length <= 0 && (
            <div className="package-title">
              <h2>There are currently no Hotel packages Available.</h2>
            </div>
          )}
          {hotelPacks.length > 0 && (
            <div className="package-title">
              <h2>Hotel</h2>
            </div>
          )}
          {hotelPacks.map((pack, index) => {
            const heroImage = pack.node.acf._att_page_hero_image ? (
              <Img
                fluid={
                  pack.node.acf._att_page_hero_image.localFile.childImageSharp
                    .fluid
                }
                alt={pack.node.acf._att_page_hero_image.alt_text}
              />
            ) : (
              <HotelDefault />
            )
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
                <div className="packages__item--image">{heroImage}</div>
                <div className="packages__item--background" />
              </Link>
            )
          })}
          {foodPacks.length <= 0 && (
            <div className="package-title">
              <h2>There are currently no Food packages Available.</h2>
            </div>
          )}
          {foodPacks.length > 0 && (
            <div className="package-title">
              <h2>Food</h2>
            </div>
          )}
          {foodPacks.map((pack, index) => {
            const heroImage = pack.node.acf._att_page_hero_image ? (
              <Img
                fluid={
                  pack.node.acf._att_page_hero_image.localFile.childImageSharp
                    .fluid
                }
                alt={pack.node.acf._att_page_hero_image.alt_text}
              />
            ) : (
              <FoodDefault />
            )
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
                <div className="packages__item--image">{heroImage}</div>

                <div className="packages__item--background" />
              </Link>
            )
          })}
          {eventPacks.length <= 0 && (
            <div className="package-title">
              <h2>There are currently no Event packages Available.</h2>
            </div>
          )}
          {eventPacks.length > 0 && (
            <div className="package-title">
              <h2>Events</h2>
            </div>
          )}
          {eventPacks.map((pack, index) => {
            const heroImage = pack.node.acf._att_page_hero_image ? (
              <Img
                fluid={
                  pack.node.acf._att_page_hero_image.localFile.childImageSharp
                    .fluid
                }
                alt={pack.node.acf._att_page_hero_image.alt_text}
              />
            ) : (
              <EventsDefault />
            )
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
                <div className="packages__item--image">{heroImage}</div>
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
