import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const EventsDefault = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          eventsDefault: file(relativePath: { eq: "eventsDefault.jpg" }) {
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
              fluid={data.eventsDefault.childImageSharp.fluid}
              alt="Airdrie Games"
            />
          </>
        )
      }}
    />
  )
}

export default EventsDefault
