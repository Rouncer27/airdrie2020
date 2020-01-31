import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const FoodDefault = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          foodDefault: file(relativePath: { eq: "foodDefault.jpg" }) {
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
              fluid={data.foodDefault.childImageSharp.fluid}
              alt="Airdrie Games"
            />
          </>
        )
      }}
    />
  )
}

export default FoodDefault
