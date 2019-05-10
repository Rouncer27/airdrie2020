import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"

import TextField from "./FormParts/TextField"
import TextArea from "./FormParts/TextArea"
import SelectField from "./FormParts/SelectField"
import UploadField from "./FormParts/UploadField"

const FormFieldsStyled = styled.section`
  position: relative;
  padding: 5rem 0;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 60rem;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

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

  .customform__wrapper {
    width: 100%;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 75rem;
    }
  }

  .customform__title {
    width: 100%;

    h2 {
      margin: 0;
      color: ${props => props.theme.pacificBlue};
      font-family: ${props => props.theme.fontSec};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 3rem;
      }
    }
  }

  .customform__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    &--button {
      margin-top: 5rem;
      width: 100%;
    }
  }

  .customform__field {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 2rem 0;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(50% - 4rem);
      margin: 2rem 0;
    }

    &--select {
      display: block;
      justify-content: flex-start;
    }

    label {
      display: block;
      width: 100%;
      margin-bottom: 0.3rem;
      color: ${props => props.theme.black};
      font-size: 1.4rem;
    }
  }
`

class FormFields extends Component {
  constructor(props) {
    super(props)
    this.submitTheForm = this.submitTheForm.bind(this)
    this.onChange = this.onChange.bind(this)
    this.formHaveErrors = this.formHaveErrors.bind(this)
    this.closeErrorModal = this.closeErrorModal.bind(this)
    this.formSentSuccess = this.formSentSuccess.bind(this)
    this.closeSentModal = this.closeSentModal.bind(this)
    this.handleFiles = this.handleFiles.bind(this)
    this.state = {
      cf7ID: "",
      submitting: false,
      formHasErrors: false,
      errors: [],
      totalFeilds: [],
      formSent: false,
    }
  }

  componentDidMount() {
    let fieldsSet = {}
    this.props.data.forEach(fields => {
      fieldsSet[fields.name] = ""
    })

    this.setState(prevState => {
      return {
        ...prevState,
        ...fieldsSet,
        cf7ID: this.props.formId,
        totalFeilds: this.props.data,
      }
    })
  }

  submitTheForm(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting,
      }
    })

    const bodyFormData = new FormData()

    this.state.totalFeilds.forEach(field => {
      bodyFormData.append(field.name, this.state[field.name])
    })
    const baseURL = "https://database.airdrie2020.com/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    const formID = this.state.cf7ID

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`,
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

  formSentSuccess() {
    this.setState(prevState => {
      return {
        ...prevState,
        formSent: true,
        submitting: false,
      }
    })
  }

  closeSentModal() {
    let fieldsToReset = {}
    this.state.totalFeilds.forEach(fields => {
      fieldsToReset[fields.name] = ""
    })

    this.setState(prevState => {
      return {
        ...prevState,
        ...fieldsToReset,
        submitting: false,
        formHasErrors: false,
        errors: [],
        formSent: false,
      }
    })
  }

  formHaveErrors(message, fields) {
    console.log(message)
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFiles(e) {
    let file = e.target.files[0]
    this.setState(prevState => {
      return {
        ...prevState,
        photo: file,
      }
    })
  }

  render() {
    const fields = this.props.data
    return (
      <FormFieldsStyled className="customform">
        <StandardWrapper className="customform__wrapper">
          <div className="customform__title">
            <h2>Submit an event</h2>
          </div>
          <form onSubmit={this.submitTheForm} className="customform__form">
            {fields.map((field, index) => {
              const requiredField = field.required === "yes" ? true : false
              const { type, name, label, placeholder, options } = field
              const value = this.state[name] ? this.state[name] : ""

              const labelMessage = requiredField
                ? `${label} * Required`
                : `${label}`

              let inputFieldType = ""
              if (type === "text") {
                inputFieldType = (
                  <TextField
                    label={label}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                    errors={this.state.errors}
                    required={requiredField}
                  />
                )
              } else if (type === "textarea") {
                inputFieldType = (
                  <TextArea
                    label={label}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                    errors={this.state.errors}
                    required={requiredField}
                  />
                )
              } else if (type === "email") {
                inputFieldType = (
                  <TextField
                    label={label}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                    errors={this.state.errors}
                    required={requiredField}
                  />
                )
              } else if (type === "select") {
                inputFieldType = (
                  <SelectField
                    label={label}
                    name={name}
                    value={value}
                    options={options}
                    onChange={this.onChange}
                    errors={this.state.errors}
                    required={requiredField}
                  />
                )
              } else if (type === "upload") {
                inputFieldType = (
                  <UploadField
                    type={type}
                    label={label}
                    name={name}
                    value={value}
                    options={options}
                    onChange={this.handleFiles}
                    errors={this.state.errors}
                    required={requiredField}
                  />
                )
              }

              return (
                <div
                  key={index}
                  className={`customform__field customform__field--${type}`}
                >
                  <label htmlFor={name}>{labelMessage}</label>
                  {inputFieldType}
                </div>
              )
            })}
            <div className="customform__form--button">
              <NormalButton disabled={this.state.submitting}>
                Submit
              </NormalButton>
            </div>
          </form>
        </StandardWrapper>
        {this.state.submitting && (
          <div className="submitting-the-forms">
            <div className="submitting-the-forms__message">
              <p>Submitting The Form. Please wait...</p>
            </div>
            <div className="submitting-the-forms__background" />
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
      </FormFieldsStyled>
    )
  }
}

export default FormFields
