import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import DatePicker from "react-datepicker"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"
import "react-datepicker/dist/react-datepicker.css"

const EventsListStyled = styled.section`
  .date-picker-model {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 10000;

    &__content {
      align-self: center;
      max-width: 40rem;
      padding: 3rem;
      margin: 0 auto;
      background: ${props => props.theme.white};
      text-align: center;
      z-index: 10;

      p {
        color: ${props => props.theme.black};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      button {
        display: inline-block;
        padding: 0 2rem;
        border: 0.3rem solid ${props => props.theme.pacificBlue};
        transition: all 0.3s ease;
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.fontSec};
        font-size: 2.8rem;
        line-height: 1.4;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }

        &:hover {
          border: 0.3rem solid ${props => props.theme.mandarinOrange};
          color: ${props => props.theme.mandarinOrange};
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.mandarinOrange};
      opacity: 0.75;
      z-index: 1;
    }
  }

  .eventlist__wrapper {
    justify-content: flex-start;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 110rem;
    }
  }

  .eventlist__search {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 5rem 1rem;
    z-index: 499;

    .eventlist__search--categories {
      width: 100%;
      margin: 0 auto 5rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(100%);
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 33%;
        margin: 0 auto;
      }

      label {
        color: #000;
        font-size: 1.2rem;
        text-transform: uppercase;
      }

      .select-container {
        position: relative;
        height: 3rem;
        overflow: hidden;
        width: 27.5rem;
        margin: auto;
        border-radius: 0;
        background-color: ${props => props.theme.pacificBlue};
      }

      select {
        background: transparent;
        border: none;
        font-size: 14px;
        height: 29px;
        padding: 5px;
        width: 268px;
        color: #000;
        font-weight: 900;
      }
    }

    .eventlist__search--dates {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: calc(100%);

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50%);
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 33%;
        margin: 0 auto;
      }

      p {
        margin: 0;
        font-size: 1.2rem;
        text-transform: uppercase;
      }

      input {
        width: 100%;
        padding: 1rem;
        border: solid 0.1rem ${props => props.theme.navyBlue};

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        &:focus {
          outline: none;
          border: solid 0.1rem ${props => props.theme.deepYellow};
        }
      }

      &--start {
        width: 50%;
      }

      &--end {
        width: 50%;
      }

      &--button {
        width: 100%;
        margin-top: 1rem;
        margin: 1rem auto;
        text-align: center;
      }
    }
  }

  .eventlist__event {
    display: block;
    position: relative;
    width: calc(100% - 4rem);
    margin: 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 5rem 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      margin: 5rem 2rem;
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

        p {
          font-size: 1.4rem;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.2rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.4rem;
          }
        }
      }

      p {
        display: inline-block;
        margin: 0 auto;
        padding: 1rem 2rem;
        background: ${props => props.theme.white};
        color: ${props => props.theme.black};
      }

      &--cat {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;

        p {
          display: block;
          color: ${props => props.theme.white};
        }

        p.cat-name-Fundraisers {
          background: ${props => props.theme.pacificBlue};
        }

        p.cat-name-Games {
          background: ${props => props.theme.mandarinOrange};
        }

        p.cat-name-Live {
          background: ${props => props.theme.persianIndigo};
        }

        p.cat-name-Registration {
          background: ${props => props.theme.chathamsBlue};
        }
      }
    }

    &--excerpt {
      width: 100%;

      h3 {
        color: ${props => props.theme.pacificBlue};
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }

      p {
        color: ${props => props.theme.black};
        font-size: 1.8rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.4rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`

class EventsList extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.handleDateStart = this.handleDateStart.bind(this)
    this.handleDateEnd = this.handleDateEnd.bind(this)
    this.updateTheEventsDisplayed = this.updateTheEventsDisplayed.bind(this)
    this.updateEventsByDate = this.updateEventsByDate.bind(this)
    this.closeDateModel = this.closeDateModel.bind(this)

    this.state = {
      "event-cats": 0,
      allEvents: this.props.data,
      allCategories: this.props.eventCategories,
      currentlyShowing: this.props.data,
      startDate: "",
      endDate: "",
      dataModelActive: false,
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        startDate: new Date(),
      }
    })
  }

  handleDateStart(date) {
    this.setState({
      startDate: date,
    })
  }

  handleDateEnd(date) {
    this.setState({
      endDate: date,
    })
  }

  updateEventsByDate() {
    let eventsToDisplay = []
    const startSec = Date.parse(this.state.startDate)
    const endSec = Date.parse(this.state.endDate)

    this.state.currentlyShowing.forEach(event => {
      const eventStart = Date.parse(event.node.acf._att_event_cal_start)

      if (startSec <= eventStart && endSec >= eventStart) {
        eventsToDisplay.push(event)
      }
    })

    if (eventsToDisplay.length > 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          currentlyShowing: eventsToDisplay,
          startDate: new Date(),
          endDate: "",
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          dataModelActive: true,
        }
      })
    }
  }

  closeDateModel() {
    this.setState(prevState => {
      return {
        ...prevState,
        dataModelActive: false,
        startDate: new Date(),
        endDate: "",
      }
    })
  }

  updateTheEventsDisplayed() {
    let eventsToDisplay = []
    this.state.allEvents.forEach(event => {
      event.node.event_category.forEach(evCat => {
        if (parseInt(this.state["event-cats"]) === -1) {
          eventsToDisplay = this.state.allEvents
        } else if (parseInt(this.state["event-cats"]) === evCat) {
          eventsToDisplay.push(event)
        }
      })
    })

    this.setState(prevState => {
      return {
        ...prevState,
        currentlyShowing: eventsToDisplay,
      }
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateTheEventsDisplayed()
    })
  }

  render() {
    return (
      <EventsListStyled className="eventlist">
        {this.state.dataModelActive && (
          <div className="date-picker-model">
            <div className="date-picker-model__content">
              <p>Sorry, no events found within those dates</p>
              <button onClick={this.closeDateModel}>Close</button>
            </div>
            <div
              onClick={this.closeDateModel}
              className="date-picker-model__background"
            />
          </div>
        )}
        <StandardWrapper className="eventlist__wrapper">
          <div className="eventlist__search">
            <form className="eventlist__search--categories">
              <label htmlFor="eventlist__search--cats">
                Choose a Event Category:
              </label>
              <div className="select-container">
                <select
                  name="event-cats"
                  onChange={this.onChange}
                  id="event-secleted"
                  value={this.state.eventCats}
                >
                  <option value={0}>--Please choose an Event Category--</option>
                  <option value={-1}>All Events</option>
                  {this.state.allCategories.map((cat, index) => {
                    return (
                      <option
                        key={index}
                        title={cat.node.wordpress_id}
                        value={cat.node.wordpress_id}
                      >
                        {cat.node.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </form>
            <div className="eventlist__search--dates">
              <div className="eventlist__search--dates--start">
                <p>Start Date</p>
                <DatePicker
                  onChange={this.handleDateStart}
                  maxDate={this.state.endDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  selected={this.state.startDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
              <div className="eventlist__search--dates--end">
                <p>End Date</p>
                <DatePicker
                  onChange={this.handleDateEnd}
                  minDate={this.state.startDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  selected={this.state.endDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  placeholderText="Choose an end date"
                />
              </div>
              <div className="eventlist__search--dates--button">
                <NormalButton
                  onClick={() => {
                    this.updateEventsByDate()
                  }}
                  disabled={this.state.endDate === ""}
                >
                  Search Dates
                </NormalButton>
              </div>
            </div>
          </div>

          {this.state.currentlyShowing.map((event, index) => {
            event.node.groupCategories = []
            event.node.event_category.forEach(eventCat => {
              this.state.allCategories.forEach(ec => {
                if (eventCat === ec.node.wordpress_id) {
                  event.node.groupCategories.push(ec.node.name)
                }
              })
            })
            const slug = event.node.slug
            const title = event.node.title
            const excerpt = event.node.acf._att_event_excerpt

            const startDate = event.node.acf._att_event_cal_start
            const date = event.node.acf._att_event_date
            const img =
              event.node.acf._att_event_img.localFile.childImageSharp.fluid
            const imgAlt = event.node.acf._att_event_img.alt_text
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
                  <div className="eventlist__event--image--cat">
                    {event.node.groupCategories.map((cat, index) => {
                      return (
                        <p className={`cat-name-${cat}`} key={index}>
                          {cat}
                        </p>
                      )
                    })}
                  </div>
                  <Img fluid={img} alt={imgAlt} />
                </div>
                <div className="eventlist__event--excerpt">
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
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
