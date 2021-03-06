import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import BoardPosting from "../components/section/Volunteer/BoardPosting"
import VolunteerPosting from "../components/section/Volunteer/VolunteerPosting"
import LocalAthlets from "../components/section/Airdrie2020/LocalAthlets"
import AthleteForm from "../components/section/Airdrie2020/AthleteForm"
import JobPostingForm from "../components/section/Volunteer/JobPostingForm"

class Volunteer extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf

    const metaTitle = acf._att_meta_title
    const metaDescription = acf._att_meta_description
    const metaImage = acf._att_meta_image.localFile.publicURL

    const heroImage = acf._att_page_hero_ath
    const heroTitle = acf._att_page_hero_title

    const localAthletsTitle = acf._att_local_athletes_title
    const localAthletsBg = acf._att_local_athletes_bg
    const localAthletsIntro = acf._att_local_athletes_intro
    const localAthlets = acf._att_local_athletes

    const athletsFormTitle = acf._att_athletes_form_title
    const athletsFormContent = acf._att_athletes_form_content
    const athletsFormActive = acf._att_athletes_form

    const boardTitle = acf._att_board_postings_title
    const boardPostings = acf._att_board_postings

    const volunteerTitle = acf._att_volunteer_postings_title
    const volunteerPostings = acf._att_volunteer_postings

    const jobPostingTitle = acf._att_job_form_title
    const jobPostingContent = acf._att_job_form_content
    const jobPostingActive = acf._att_job_form_active

    return (
      <Layout>
        <SEO
          title={metaTitle}
          description={metaDescription}
          metaImg={metaImage}
          location={this.props.location.pathname}
        />
        <HeroImage data={{ heroImage, heroTitle }} />
        <LocalAthlets
          data={{
            localAthletsTitle,
            localAthletsBg,
            localAthletsIntro,
            localAthlets,
          }}
        />
        <AthleteForm
          data={{ athletsFormTitle, athletsFormContent, athletsFormActive }}
        />
        <BoardPosting data={{ boardTitle, boardPostings }} />
        <VolunteerPosting data={{ volunteerTitle, volunteerPostings }} />
        <JobPostingForm
          data={{ jobPostingTitle, jobPostingContent, jobPostingActive }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query VolunteerQuery($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _att_meta_title
        _att_meta_description
        _att_meta_image {
          localFile {
            publicURL
          }
        }

        _att_page_hero_title

        _att_page_hero_ath {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _att_local_athletes_title
        _att_local_athletes_bg
        _att_local_athletes_intro
        _att_local_athletes {
          name
          bio_title
          bio_content
          action_word
          image {
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

        _att_athletes_form_title
        _att_athletes_form_content
        _att_athletes_form

        _att_board_postings_title
        _att_board_postings {
          org_name
          email
          phone
          website
        }

        _att_volunteer_postings_title
        _att_volunteer_postings {
          team_name
          position
          website
        }

        _att_job_form_title
        _att_job_form_content
        _att_job_form_active
      }
    }
  }
`

export default Volunteer
