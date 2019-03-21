import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const EventsListStyled = styled.section`
  .eventlist__wrapper {
    justify-content: flex-start;
  }

  .eventlist__event {
    display: block;
    position: relative;
    width: calc(50%);
    text-align: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      margin: 2rem;
    }

    &--image {
      position: relative;
      width: 100%;

      &--date {
        display: inline-block;
        position: absolute;
        top: -2.5rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        text-align: center;
        z-index: 100;
      }

      p {
        display: inline-block;
        margin: 0 auto;
        padding: 1rem 2rem;
        background: ${props => props.theme.white};
        color: ${props => props.theme.black};
      }
    }

    &--excerpt {
      width: 100%;

      h3 {
        color: ${props => props.theme.pacificBlue};
        font-weight: 500;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p {
        color: ${props => props.theme.black};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`

class EventsList extends Component {
  render() {
    const events = this.props.data
    return (
      <EventsListStyled className="eventlist">
        <StandardWrapper className="eventlist__wrapper">
          {events.map((event, index) => {
            const slug = event.node.slug
            const title = event.node.acf._att_event_title
            const excerpt = event.node.acf._att_event_excerpt
            const date = event.node.acf._att_event_date
            const img =
              event.node.acf._att_page_hero_img.localFile.childImageSharp.fluid
            const imgAlt = event.node.acf._att_page_hero_img.alt_text
            return (
              <Link
                to={`/local-sports-events/${slug}`}
                key={index}
                className="eventlist__event"
              >
                <div className="eventlist__event--image">
                  <div className="eventlist__event--image--date">
                    <p>{date}</p>
                  </div>
                  <Img fluid={img} alt={imgAlt} />
                </div>
                <div className="eventlist__event--excerpt">
                  <h3>{title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                </div>
              </Link>
            )
          })}
        </StandardWrapper>
      </EventsListStyled>
    )
  }
}

export default EventsList
