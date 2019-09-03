import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"

import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"
import rippedPaperBottom from "../../../images/ripped/AIR-2020-paper-03-rough.svg"

const AthleteFormStyled = styled.section`
  position: relative;
  padding: 15rem 0;
  background: #000;

  .form-send-modal,
  .submitting-the-forms {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 501;

    &__message {
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 50rem;
      padding: 7.5rem;
      transform: translate(-50%, -50%);
      background: ${props => props.theme.white};
      text-align: center;
      z-index: 5;

      p {
        font-weight: bold;
      }

      &--button {
        display: block;
        margin-top: 4rem;
        margin-right: auto;
        margin-left: auto;
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.pacificBlue};
      opacity: 0.75;
      z-index: 1;
    }
  }

  .form-error-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 501;

    &__message {
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 50rem;
      padding: 7.5rem;
      transform: translate(-50%, -50%);
      background: ${props => props.theme.white};
      text-align: center;
      z-index: 5;

      p {
        font-weight: bold;
      }

      &--button {
        display: block;
        margin-top: 4rem;
        margin-right: auto;
        margin-left: auto;
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

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 65rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 75rem;
    }

    &--field {
      width: 100%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 1rem);
        margin: 2rem 0;
      }

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
      margin-top: 5rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin: 2rem 0;
      }

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

const TextFieldStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 2.5rem;

  p.error-warning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    color: red;
    font-size: 1.2rem;
  }

  input {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.1rem;
    border: none;
    color: ${props => props.theme.grey};
    box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem ${props => props.theme.mandarinOrange};
    }
  }
`

const TextAreaStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 2.5rem;

  p.error-warning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    color: red;
    font-size: 1.2rem;
  }

  textarea {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.1rem;
    border: none;
    color: ${props => props.theme.black};
    font-weight: bold;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem ${props => props.theme.mandarinOrange};
    }
  }
`

class AthleteForm extends Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.formHaveErrors = this.formHaveErrors.bind(this)
    this.formSentSuccess = this.formSentSuccess.bind(this)
    this.closeSentModal = this.closeSentModal.bind(this)
    this.handleFiles = this.handleFiles.bind(this)
    this.closeErrorModal = this.closeErrorModal.bind(this)

    this.state = {
      yourName: "",
      yourEmail: "",
      athleteName: "",
      athleteSport: "",
      athleteBio: "",
      athletePhoto: "",
      submitting: false,
      formSent: false,
      formHasErrors: false,
      errors: [],
    }
  }

  submit(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting,
      }
    })

    const bodyFormData = new FormData()
    bodyFormData.append("yourName", this.state.yourName)
    bodyFormData.append("yourEmail", this.state.yourEmail)
    bodyFormData.append("athleteName", this.state.athleteName)
    bodyFormData.append("athleteSport", this.state.athleteSport)
    bodyFormData.append("athleteBio", this.state.athleteBio)
    bodyFormData.append("athletePhoto", this.state.athletePhoto)

    const baseURL = "https://database.airdrie2020.com/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/796/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            this.formSentSuccess(res.data.message)
          }, 1000)
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            this.formHaveErrors(res.data.message, res.data.invalidFields)
          }, 1000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  formSentSuccess(mess) {
    this.setState(prevState => {
      return {
        ...prevState,
        formSent: true,
        submitting: false,
      }
    })
  }

  closeSentModal() {
    console.log("closed!!")
    this.setState(prevState => {
      return {
        ...prevState,
        yourName: "",
        yourEmail: "",
        athleteName: "",
        athleteSport: "",
        athleteBio: "",
        athletePhoto: "",
        submitting: false,
        formSent: false,
        formHasErrors: false,
        errors: [],
      }
    })
  }

  formHaveErrors(mess, fields) {
    console.log(mess)
    console.log(fields)
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        formHasErrors: true,
        errors: fields,
      }
    })
  }

  closeErrorModal() {
    this.setState(prevState => {
      return {
        ...prevState,
        formHasErrors: false,
      }
    })
  }

  handleFiles(e) {
    let file = e.target.files[0]
    this.setState(prevState => {
      return {
        ...prevState,
        athletePhoto: file,
      }
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const title = this.props.data.athletsFormTitle
    const content = this.props.data.athletsFormContent
    const active = this.props.data.athletsFormActive

    let errorYourName = false
    let errorYourEmail = false
    let errorAthleteName = false
    let errorAthleteSport = false
    let errorAthleteBio = false

    if (this.state.errors.length > 0) {
      this.state.errors.forEach(error => {
        if (error.idref === "yourName") {
          errorYourName = error.message
        } else if (error.idref === "yourEmail") {
          errorYourEmail = error.message
        } else if (error.idref === "athleteName") {
          errorAthleteName = error.message
        } else if (error.idref === "athleteSport") {
          errorAthleteSport = error.message
        } else if (error.idref === "athleteBio") {
          errorAthleteBio = error.message
        }
      })
    }

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
                <label htmlFor="yourName">Your Name</label>
                <TextFieldStyled>
                  {errorYourName && (
                    <p className="error-warning">{errorYourName}</p>
                  )}
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={this.state.yourName}
                    onChange={this.onChange}
                    required={false}
                  />
                </TextFieldStyled>
              </div>
              <div className="athleteform__form--field">
                <label htmlFor="yourEmail">Your Email</label>
                <TextFieldStyled>
                  {errorYourEmail && (
                    <p className="error-warning">{errorYourEmail}</p>
                  )}
                  <input
                    type="email"
                    id="yourEmail"
                    name="yourEmail"
                    value={this.state.yourEmail}
                    onChange={this.onChange}
                    required={false}
                  />
                </TextFieldStyled>
              </div>
              <div className="athleteform__form--field">
                <label htmlFor="athleteName">Athlete's Name</label>
                <TextFieldStyled>
                  {errorAthleteName && (
                    <p className="error-warning">{errorAthleteName}</p>
                  )}
                  <input
                    type="text"
                    id="athleteName"
                    name="athleteName"
                    value={this.state.athleteName}
                    onChange={this.onChange}
                    required={false}
                  />
                </TextFieldStyled>
              </div>

              <div className="athleteform__form--field">
                <label htmlFor="athleteSport">Athlete's Sport</label>
                <TextFieldStyled>
                  {errorAthleteSport && (
                    <p className="error-warning">{errorAthleteSport}</p>
                  )}
                  <input
                    type="text"
                    id="athleteSport"
                    name="athleteSport"
                    value={this.state.athleteSport}
                    onChange={this.onChange}
                    required={false}
                  />
                </TextFieldStyled>
              </div>

              <div className="athleteform__form--field">
                <label htmlFor="athleteBio">Bio &#42;</label>
                <TextAreaStyled>
                  {errorAthleteBio && (
                    <p className="error-warning">{errorAthleteBio}</p>
                  )}
                  <textarea
                    cols="40"
                    rows="8"
                    name="athleteBio"
                    id="athleteBio"
                    onChange={this.onChange}
                    value={this.state.athleteBio}
                    required={false}
                  />
                </TextAreaStyled>
              </div>

              <div className="athleteform__form--field">
                <label htmlFor="athletePhoto">Athlete's Photo</label>
                <div>
                  <input
                    type="file"
                    id="athletePhoto"
                    name="athletePhoto"
                    onChange={this.handleFiles}
                    accept=".jpg, .png, .jpeg"
                    required={false}
                  />
                </div>
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
        {/* <div className="athleteform__rip athleteform__rip--bot" /> */}

        {this.state.submitting && (
          <div className="submitting-the-forms">
            <div className="submitting-the-forms__message">
              <p>Submitting The Form. Please wait...</p>
            </div>
            <div className="submitting-the-forms__background" />
          </div>
        )}

        {this.state.formSent && (
          <div onClick={this.closeSentModal} className="form-send-modal">
            <div className="form-send-modal__message">
              <p>Success! Your Form Have Been Sent.</p>
              <NormalButton
                className="form-send-modal__message--button"
                onClick={this.closeSentModal}
              >
                Close
              </NormalButton>
            </div>
            <div className="form-send-modal__background" />
          </div>
        )}

        {this.state.formHasErrors && (
          <div onClick={this.closeErrorModal} className="form-error-modal">
            <div className="form-error-modal__message">
              <p>
                Your Form Has Errors. Please fix the required fields to submit
                form.
              </p>
              <NormalButton
                className="form-error-modal__message--button"
                onClick={this.closeErrorModal}
              >
                Close
              </NormalButton>
            </div>
            <div className="form-error-modal__background" />
          </div>
        )}
      </AthleteFormStyled>
    )
  }
}

export default AthleteForm
