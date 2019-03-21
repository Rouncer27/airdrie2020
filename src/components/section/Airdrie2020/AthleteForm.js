import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const AthleteFormStyled = styled.section`
  position: relative;
  padding: 15rem 0;
  background: #000;

  .athleteform__wrapper {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 75rem;
    }
  }

  .athleteform__title {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 2rem);
      margin-right: 2rem;
    }
    h2 {
      margin: 0;
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.6rem;
      }
    }
  }

  .athleteform__content {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 2rem);
      margin-left: 2rem;
    }

    p {
      margin: 0;
      color: ${props => props.theme.white};
    }
  }

  .athleteform__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;

    &--field {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(50% - 4rem);
        margin: 2rem 0;
      }

      label {
        display: block;
        width: 100%;
        margin-bottom: 0.3rem;
        color: ${props => props.theme.white};
        font-size: 1.4rem;
      }

      textarea,
      input {
        display: block;
        width: 100%;
        padding: 1rem;
        border-radius: 0.1rem;
        border: none;
        color: ${props => props.theme.grey};

        &:focus {
          outline: none;
          box-shadow: 0 0 0 0.2rem ${props => props.theme.mandarinOrange};
        }
      }
    }

    &--button {
      text-align: center;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(100% - 4rem);
        margin: 2rem 0;
      }

      button {
        padding: 0.5rem 4rem;
        background: transparent;
        color: ${props => props.theme.white};

        &:hover {
          color: ${props => props.theme.mandarinOrange};
        }
      }
    }
  }

  .athleteform__rip {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${props => props.theme.bpTablet}) {
      height: 10rem;
    }

    &--top {
      top: -0.75rem;
      background-image: url(${rippedPaper});
      background-position: center top;

      @media (min-width: ${props => props.theme.bpTablet}) {
        top: -0.5rem;
      }
    }

    &--bot {
      bottom: -1.8rem;
      transform: rotate(-180deg);
      background-image: url(${rippedPaperBottom});
      background-position: center top;
    }
  }
`

class AthleteForm extends Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      name: "",
      email: "",
      bio: "",
      bioimage: "",
      submitting: false,
    }
  }

  submit(e) {
    e.preventDefault()
    console.log("submit!")
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const title = this.props.data.athletsFormTitle
    const content = this.props.data.athletsFormContent
    const active = this.props.data.athletsFormActive
    return (
      <AthleteFormStyled className="athleteform">
        <StandardWrapper className="athleteform__wrapper">
          <div className="athleteform__title">
            <h2>{title}</h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="athleteform__content"
          />
          {active === "yes" && (
            <form onSubmit={this.submit} className="athleteform__form">
              <div className="athleteform__form--field">
                <label for="bioimage">Choose a profile picture:</label>
                <input
                  type="file"
                  id="bioimage"
                  name="bioimage"
                  accept="image/png, image/jpeg"
                  value={this.state.bioimage}
                  onChange={this.onChange}
                />
              </div>
              <div className="athleteform__form--field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="athleteform__form--field">
                <label htmlFor="name">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="athleteform__form--field">
                <label htmlFor="bio">Bio &#42;</label>
                <textarea
                  cols="40"
                  rows="4"
                  name="bio"
                  id="bio"
                  onChange={this.onChange}
                  value={this.state.bio}
                />
              </div>
              <div className="athleteform__form--button">
                <NormalButton disabled={this.state.submitting}>
                  Submit
                </NormalButton>
              </div>
            </form>
          )}
        </StandardWrapper>
        <div className="athleteform__rip athleteform__rip--top" />
        <div className="athleteform__rip athleteform__rip--bot" />
      </AthleteFormStyled>
    )
  }
}

export default AthleteForm
