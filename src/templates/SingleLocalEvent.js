import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor, NormalLink } from "../components/styles/commons/Buttons"

const SingleLocalEventStyled = styled.article`
  padding: 2rem 0;
  .event-wrapper {
    flex-direction: row;

    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: row-reverse;
    }
  }

  .event-featured-image {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto 5rem;

    p {
      margin: 2rem auto;
      font-family: ${props => props.theme.fontSec};
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 7rem;
      }
    }
  }

  .event-main-content {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(60%);
    }

    .event-main-learn-more {
      margin-bottom: 2rem;
    }
  }

  .event-meta-descriptions {
    position: relative;
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(40% - 10rem);
      margin: 0 10rem 0 0;
    }

    .event-name {
      h1 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};
        line-height: 1.13;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 3rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.8rem;
        }
      }
    }

    .event-group {
      padding-top: 1rem;
      h2 {
        margin: 0;
        text-transform: uppercase;
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 3rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }
    }

    .event-category {
      margin: 2rem 0;

      h4 {
        font-size: 1.4rem;
      }

      p {
        margin: 0;
        margin-bottom: 0.5rem;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    .event-group-description {
      position: relative;
      margin-bottom: 1rem;
      padding-top: 1rem;
      padding-bottom: 2rem;

      p {
        font-weight: 300;

        &:last-of-type {
          margin: 0;
        }

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.6rem;
        }
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 14rem;
        height: 0.9rem;
        background: ${props => props.theme.pacificBlue};
        content: "";
      }
    }
  }
`

class SingleLocalEvent extends Component {
  render() {
    const acf = this.props.data.wordpressWpLocalEvents.acf
    const featuredImg = acf._att_event_img
    const mainContent = acf._att_event_main_content
    const learnMore = acf._att_event_learn_more

    const allEventCategories = this.props.data.allWordpressWpEventCategory.edges
    const thisEventsCategories = []
    this.props.data.wordpressWpLocalEvents.event_category.forEach(evCat => {
      allEventCategories.forEach(cat => {
        if (cat.node.wordpress_id === evCat) {
          thisEventsCategories.push(cat.node.name)
        }
      })
    })

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SingleLocalEventStyled>
          <StandardWrapper className="event-wrapper">
            <div className="event-featured-image">
              <Img
                fluid={featuredImg.localFile.childImageSharp.fluid}
                alt={featuredImg.alt_text}
              />
              <p>Sporting Events</p>
            </div>
            <div className="event-main-content">
              <div dangerouslySetInnerHTML={{ __html: mainContent }} />

              {learnMore && (
                <NormalAchor
                  className="event-main-learn-more"
                  target="_blank"
                  href={learnMore}
                >
                  Learn More
                </NormalAchor>
              )}
              <NormalLink to="/local-sports-events/">
                Back To Events Page
              </NormalLink>
            </div>
            <div className="event-meta-descriptions">
              <div className="event-name">
                <h1>{this.props.data.wordpressWpLocalEvents.title}</h1>
              </div>
              <div className="event-group">
                <h2>
                  {this.props.data.wordpressWpLocalEvents.acf._att_event_group}
                </h2>
                <div
                  className="event-group-description"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.wordpressWpLocalEvents.acf
                      ._att_event_group_description,
                  }}
                />
              </div>
              <div className="event-location">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.wordpressWpLocalEvents.acf
                      ._att_event_date,
                  }}
                />
                <a
                  href={
                    this.props.data.wordpressWpLocalEvents.acf
                      ._att_event_location_google
                  }
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.wordpressWpLocalEvents.acf
                      ._att_event_location,
                  }}
                />
              </div>

              {thisEventsCategories.length > 0 && (
                <div className="event-category">
                  <h4>Event category</h4>
                  {thisEventsCategories.map((cat, index) => {
                    return <p key={index}>{cat}</p>
                  })}
                </div>
              )}
            </div>
          </StandardWrapper>
        </SingleLocalEventStyled>
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalEvent($id: Int!) {
    wordpressWpLocalEvents(wordpress_id: { eq: $id }) {
      title
      event_category
      acf {
        _att_event_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_event_date
        _att_event_location
        _att_event_location_google
        _att_event_main_content
        _att_event_learn_more
        _att_event_group
        _att_event_group_description
      }
    }

    allWordpressWpEventCategory {
      edges {
        node {
          wordpress_id
          name
          count
          taxonomy {
            name
          }
        }
      }
    }
  }
`

export default SingleLocalEvent
