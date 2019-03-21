import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/section/AboutPage/HeroImage"
import SponsoredTeam from "../components/section/Volunteer/SponsoredTeam"
import FeaturedAmbassador from "../components/section/Volunteer/FeaturedAmbassador"
import FeaturedVolunteer from "../components/section/Volunteer/FeaturedVolunteer"
import BoardPosting from "../components/section/Volunteer/BoardPosting"
import VolunteerPosting from "../components/section/Volunteer/VolunteerPosting"

class Volunteer extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const heroImage = acf._att_page_hero_img
    const heroTitle = acf._att_page_hero_title

    const sponTeamImg = acf._att_spon_team_img
    const sponTeamLogo = acf._att_spon_team_logo
    const sponTeamLogoLink = acf._att_spon_team_logo_link
    const sponTeamName = acf._att_spon_team_name
    const sponTeamSub = acf._att_spon_team_sub_title
    const sponTeamContent = acf._att_spon_team_content

    const ambassadorImg = acf._att_featured_amb_img
    const ambassadorName = acf._att_featured_amb_name
    const ambassadorSub = acf._att_featured_amb_sub
    const ambassadorContent = acf._att_featured_amb_content

    const volunteerImg = acf._att_featured_vol_img
    const volunteerName = acf._att_featured_vol_name
    const volunteerSub = acf._att_featured_vol_sub
    const volunteerContent = acf._att_featured_vol_content

    const boardTitle = acf._att_board_postings_title
    const boardPostings = acf._att_board_postings

    const volunteerTitle = acf._att_volunteer_postings_title
    const volunteerPostings = acf._att_volunteer_postings

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImage data={{ heroImage, heroTitle }} />
        <SponsoredTeam
          data={{
            sponTeamImg,
            sponTeamLogo,
            sponTeamLogoLink,
            sponTeamName,
            sponTeamSub,
            sponTeamContent,
          }}
        />
        <FeaturedAmbassador
          data={{
            ambassadorImg,
            ambassadorName,
            ambassadorSub,
            ambassadorContent,
          }}
        />
        <FeaturedVolunteer
          data={{
            volunteerImg,
            volunteerName,
            volunteerSub,
            volunteerContent,
          }}
        />
        <BoardPosting data={{ boardTitle, boardPostings }} />
        <VolunteerPosting data={{ volunteerTitle, volunteerPostings }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query VolunteerQuery($id: Int!) {
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

        _att_spon_team_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_spon_team_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_spon_team_logo_link
        _att_spon_team_name
        _att_spon_team_sub_title
        _att_spon_team_content

        _att_featured_amb_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_featured_amb_name
        _att_featured_amb_sub
        _att_featured_amb_content

        _att_featured_vol_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _att_featured_vol_name
        _att_featured_vol_sub
        _att_featured_vol_content

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
      }
    }
  }
`

export default Volunteer
