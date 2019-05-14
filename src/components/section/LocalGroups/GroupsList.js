import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"

const EventsListStyled = styled.section`
  .grouplist__wrapper {
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

  .grouplist__search {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 5rem 1rem;
    z-index: 499;

    .grouplist__search--categories,
    .grouplist__search--agegroup {
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
        font-size: 1.2rem;
        text-transform: uppercase;
      }

      .select-container {
        position: relative;
        background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
        height: 3rem;
        overflow: hidden;
        width: 25rem;
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
        color: #fff;
      }
    }
  }

  .grouplist__group {
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

      &--age {
        display: inline-block;
        position: absolute;
        top: -2.5rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        text-align: center;
        z-index: 100;
      }

      &--cat {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;

        p {
          display: block;
          color: ${props => props.theme.white} !important;
        }

        p.cat-name-Indoor {
          background: ${props => props.theme.pacificBlue};
        }

        p.cat-name-Outdoor {
          background: ${props => props.theme.mandarinOrange};
        }

        p.cat-name-Team {
          background: ${props => props.theme.persianIndigo};
        }
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
    this.onChangeCats = this.onChangeCats.bind(this)
    this.onChangeAge = this.onChangeAge.bind(this)
    this.updateTheGroupsCats = this.updateTheGroupsCats.bind(this)
    this.updateTheGroupsAge = this.updateTheGroupsAge.bind(this)

    this.state = {
      ageGroup: -1,
      groupsCats: -1,
      allGroups: this.props.data,
      allCategories: this.props.groupCategories.edges,
      allAgeGroups: this.props.groupAge.edges,
      currentlyShowing: this.props.data,
    }
  }

  updateTheGroupsCats() {
    let groupsToDisplayCats = []
    let groupsToDisplay = []
    const allGroups = this.state.allGroups

    allGroups.forEach(group => {
      group.node.group_category.forEach(grCat => {
        if (parseInt(this.state.groupsCats) === -1) {
          groupsToDisplayCats = allGroups
        } else if (parseInt(this.state.groupsCats) === grCat) {
          groupsToDisplayCats.push(group)
        }
      })
    })

    groupsToDisplayCats.forEach(group => {
      group.node.group_age.forEach(grAge => {
        if (
          parseInt(this.state.ageGroup) === -1 ||
          parseInt(this.state.ageGroup) === grAge
        ) {
          groupsToDisplay.push(group)
        }
      })
    })

    this.setState(prevState => {
      return {
        ...prevState,
        currentlyShowing: groupsToDisplay,
      }
    })
  }

  updateTheGroupsAge() {
    let groupsToDisplayAge = []
    let groupsToDisplay = []
    const allGroups = this.state.allGroups

    allGroups.forEach(group => {
      group.node.group_age.forEach(grAge => {
        if (parseInt(this.state.ageGroup) === -1) {
          groupsToDisplayAge = allGroups
        } else if (parseInt(this.state.ageGroup) === grAge) {
          groupsToDisplayAge.push(group)
        }
      })
    })

    groupsToDisplayAge.forEach(group => {
      group.node.group_category.forEach(grCat => {
        if (
          parseInt(this.state.groupsCats) === -1 ||
          parseInt(this.state.groupsCats) === grCat
        ) {
          groupsToDisplay.push(group)
        }
      })
    })

    this.setState(prevState => {
      return {
        ...prevState,
        currentlyShowing: groupsToDisplay,
      }
    })
  }

  onChangeCats(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateTheGroupsCats()
    })
  }

  onChangeAge(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.updateTheGroupsAge()
    })
  }

  render() {
    return (
      <EventsListStyled className="grouplist">
        <StandardWrapper className="grouplist__wrapper">
          <div className="grouplist__search">
            <form className="grouplist__search--categories">
              <label htmlFor="grouplist__search--cats">
                Choose a Group Category:
              </label>
              <div className="select-container">
                <select
                  name="groupsCats"
                  id="groupsCats-secleted"
                  onChange={this.onChangeCats}
                >
                  <option value={0}>--Please choose an Group Category--</option>
                  <option value={-1}>All Group Categories</option>
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
            <form className="grouplist__search--agegroup">
              <label htmlFor="grouplist__search--age">
                Choose a Age Group:
              </label>
              <div className="select-container">
                <select
                  name="ageGroup"
                  id="ageGroup-selected"
                  onChange={this.onChangeAge}
                >
                  <option value={0}>--Please choose an Age Group--</option>
                  <option value={-1}>All Age Groups</option>
                  {this.state.allAgeGroups.map((age, index) => {
                    return (
                      <option
                        key={index}
                        title={age.node.wordpress_id}
                        value={age.node.wordpress_id}
                      >
                        {age.node.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </form>
          </div>

          {this.state.currentlyShowing.map((event, index) => {
            event.groupAge = []
            event.groupCats = []

            event.node.group_age.forEach(age => {
              this.state.allAgeGroups.forEach(gAge => {
                if (gAge.node.wordpress_id === age) {
                  event.groupAge.push(gAge.node.name)
                }
              })
            })

            event.node.group_category.forEach(cat => {
              this.state.allCategories.forEach(gCat => {
                if (gCat.node.wordpress_id === cat) {
                  event.groupCats.push(gCat.node.name)
                }
              })
            })
            const slug = event.node.slug
            const title = event.node.title
            const excerpt = event.node.acf._att_group_excerpt
            const img =
              event.node.acf._att_group_featured_img.localFile.childImageSharp
                .fluid
            const imgAlt = event.node.acf._att_group_featured_img.alt_text
            return (
              <Link
                to={`/local-sports-groups/${slug}`}
                key={index}
                className="grouplist__group"
              >
                <div className="grouplist__group--image">
                  <div className="grouplist__group--image--age">
                    {event.groupAge.length > 0 &&
                      event.groupAge.map((ageGroup, index) => {
                        return <p key={index}>{ageGroup}</p>
                      })}
                  </div>
                  <div className="grouplist__group--image--cat">
                    {event.groupCats.length > 0 &&
                      event.groupCats.map((catGroup, index) => {
                        return (
                          <p className={`cat-name-${catGroup}`} key={index}>
                            {catGroup}
                          </p>
                        )
                      })}
                  </div>
                  <Img fluid={img} alt={imgAlt} />
                </div>
                <div className="grouplist__group--excerpt">
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
