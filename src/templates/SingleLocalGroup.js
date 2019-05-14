import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor, NormalLink } from "../components/styles/commons/Buttons"

const SingleSportGroupsStyled = styled.article`
  padding: 2rem 0;
  .group-wrapper {
    flex-direction: row;

    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: row-reverse;
      max-width: 55rem;
    }

    @media (min-width: 800px) {
      max-width: 65rem;
    }

    @media (min-width: 850px) {
      max-width: 70rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 100rem;
    }
  }

  .group-featured-image {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto 5rem;

    p {
      margin: 2rem auto 0;
      font-family: ${props => props.theme.fontSec};
      text-align: center;
      font-size: 5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin: 2rem auto;
        font-size: 7rem;
      }
    }
  }

  .group-main-content {
    width: 100%;
    margin-bottom: 7.5rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50%);
      margin-bottom: 0;
      text-align: left;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(60%);
    }

    .group-main-learn-more {
      margin-bottom: 2rem;
    }

    .group-main-back-btn,
    .group-main-learn-more {
      padding: 1rem 2rem;
      text-align: center;
      font-size: 2.2rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.8rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        padding: 0 5rem;
        font-size: 2.8rem;
      }
    }
  }

  .group-meta-descriptions {
    position: relative;
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 5rem);
      margin: 0 2.5rem 0 0;
      text-align: left;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(40% - 10rem);
      margin: 0 5rem 0 5rem;
    }

    .group-name {
      h1 {
        margin: 0;
        font-family: ${props => props.theme.fontSec};
        line-height: 1.13;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.8rem;
        }
      }
    }

    .host-group {
      padding-top: 1rem;
      h2 {
        margin: 0;
        text-transform: uppercase;
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.6rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }
    }

    .group-ages,
    .group-cats {
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

    .group-location {
      position: relative;
      margin-top: 1rem;
      padding-top: 2rem;
      padding-bottom: 1rem;

      p {
        font-weight: 300;

        &:last-of-type {
          margin: 0;
        }

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 14rem;
        height: 0.9rem;
        margin: auto;
        background: ${props => props.theme.pacificBlue};
        content: "";
      }

      @media (min-width: ${props => props.theme.bpTablet}) {
        &::after {
          right: auto;
        }
      }
    }
  }
`

class SingleLocalGroup extends Component {
  render() {
    const thisGroup = this.props.data.wordpressWpLocalGroups
    const heroTitle = thisGroup.title
    const acf = thisGroup.acf
    const featuredImg = acf._att_group_featured_img
    const mainContent = acf._att_group_content
    const learnMore = acf._att_group_website

    const allAgeGroups = this.props.data.allWordpressWpGroupAge.edges
    const allGroupsCats = this.props.data.allWordpressWpGroupCategory.edges
    const thisGroupAge = this.props.data.wordpressWpLocalGroups.group_age
    const thisGroupCats = this.props.data.wordpressWpLocalGroups.group_category

    thisGroup.ageGroupNames = []
    thisGroup.groupCatNames = []

    thisGroupAge.forEach(age => {
      allAgeGroups.forEach(ageGroup => {
        if (ageGroup.node.wordpress_id === age) {
          thisGroup.ageGroupNames.push(ageGroup.node.name)
        }
      })
    })

    thisGroupCats.forEach(cat => {
      allGroupsCats.forEach(groupCat => {
        if (groupCat.node.wordpress_id === cat) {
          thisGroup.groupCatNames.push(groupCat.node.name)
        }
      })
    })

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SingleSportGroupsStyled>
          <StandardWrapper className="group-wrapper">
            <div className="group-featured-image">
              <Img
                fluid={featuredImg.localFile.childImageSharp.fluid}
                alt={featuredImg.alt_text}
              />
              <p>Sport Groups</p>
            </div>

            <div className="group-main-content">
              <div dangerouslySetInnerHTML={{ __html: mainContent }} />

              {learnMore && (
                <NormalAchor
                  className="group-main-learn-more"
                  target="_blank"
                  href={learnMore}
                >
                  Learn More
                </NormalAchor>
              )}
              <NormalLink
                className="group-main-back-btn"
                to="/local-sports-groups/"
              >
                Back To Sport Groups Page
              </NormalLink>
            </div>

            <div className="group-meta-descriptions">
              <div className="group-name">
                <h1>{heroTitle}</h1>
              </div>
              {thisGroup.acf._att_group_host_org && (
                <div className="host-group">
                  <h2>{thisGroup.acf._att_group_host_org}</h2>
                </div>
              )}
              <div className="group-location">
                <a
                  target="_blank"
                  href={thisGroup.acf._att_group_address_google}
                  dangerouslySetInnerHTML={{
                    __html: thisGroup.acf._att_group_location,
                  }}
                />
              </div>

              {thisGroup.ageGroupNames.length > 0 && (
                <div className="group-ages">
                  <h4>Age Group</h4>
                  {thisGroup.ageGroupNames.map((age, index) => {
                    return <p key={index}>{age}</p>
                  })}
                </div>
              )}

              {thisGroup.groupCatNames.length > 0 && (
                <div className="group-cats">
                  <h4>Group Category</h4>
                  {thisGroup.groupCatNames.map((cat, index) => {
                    return <p key={index}>{cat}</p>
                  })}
                </div>
              )}
            </div>
          </StandardWrapper>
        </SingleSportGroupsStyled>
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalGroup($id: Int!) {
    wordpressWpLocalGroups(wordpress_id: { eq: $id }) {
      title
      group_category
      group_age
      acf {
        _att_group_host_org
        _att_group_location
        _att_group_address_google
        _att_group_content
        _att_group_services {
          service_point
        }
        _att_group_contact_email
        _att_group_website
        _att_group_featured_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allWordpressWpGroupAge {
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

    allWordpressWpGroupCategory {
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

export default SingleLocalGroup
