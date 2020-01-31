import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const HotelDefault = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          hotelDefault: file(relativePath: { eq: "hotelDefault.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Img
              fluid={data.hotelDefault.childImageSharp.fluid}
              alt="Airdrie Games"
            />
          </>
        )
      }}
    />
  )
}

export default HotelDefault
