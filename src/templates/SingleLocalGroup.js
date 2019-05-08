import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StandardWrapper } from "../components/styles/commons/Wrappers"
import { NormalAchor } from "../components/styles/commons/Buttons"

class SingleLocalGroup extends Component {
  render() {
    const acf = this.props.data.wordpressWpLocalGroups.acf
    const heroTitle = this.props.data.wordpressWpLocalGroups.title

    const mainContent = acf._att_group_content
    const learnMore = acf._att_group_website

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <article>
          <StandardWrapper>
            <div dangerouslySetInnerHTML={{ __html: mainContent }} />
            {learnMore && (
              <NormalAchor target="_blank" href={learnMore}>
                Learn More
              </NormalAchor>
            )}
          </StandardWrapper>
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query LocalGroup($id: Int!) {
    wordpressWpLocalGroups(wordpress_id: { eq: $id }) {
      title
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
  }
`

export default SingleLocalGroup
