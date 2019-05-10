import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import Intro from "../components/section/CustomForm/Intro"
import FormFields from "../components/section/CustomForm/FormFields"

class CustomForm extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf

    // Hero Image data feidls. //
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const introTitle = acf._att_intro_content_title
    const introContent = acf._att_intro_content

    const formFields = acf._att_form_fields
    const formId = acf._att_contact_form_7_id

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <Intro data={{ introTitle, introContent }} />
        <FormFields data={formFields} formId={formId} />
      </Layout>
    )
  }
}

export const query = graphql`
  query CustomForm($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _att_page_hero_title
        _att_page_hero_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_intro_content_title
        _att_intro_content

        _att_contact_form_7_id
        _att_form_fields {
          type
          name
          label
          placeholder
          options {
            option
          }
        }
      }
    }
  }
`

export default CustomForm
