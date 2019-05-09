import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"

import TextField from "./FormParts/TextField"
import TextArea from "./FormParts/TextArea"
import SelectField from "./FormParts/SelectField"

const FormFieldsStyled = styled.section`
  padding: 5rem 0;

  .customform__wrapper {
    width: 100%;
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
  }

  .customform__field {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

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
    this.state = {
      submitting: false,
      fullName: "",
      email: "",
      eventName: "",
      dateTime: "",
      location: "",
      groupName: "",
      eventCats: "",
      description: "",
      link: "",
    }
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
    bodyFormData.append("fullName", this.state.fullName)
    bodyFormData.append("email", this.state.email)
    bodyFormData.append("eventName", this.state.eventName)
    bodyFormData.append("dateTime", this.state.dateTime)
    bodyFormData.append("location", this.state.location)
    bodyFormData.append("groupName", this.state.groupName)
    bodyFormData.append("eventCats", this.state.eventCats)
    bodyFormData.append("description", this.state.description)
    bodyFormData.append("link", this.state.link)

    console.log(bodyFormData)

    //const baseURL = "http://localhost/gatsby-airdrieangel";
    const baseURL = "https://database.airdrie2020.com/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/774/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            // this.emailWasSent(res.data.message);
            console.log("SUCCESS!!!!")
            console.log(res.data.message)
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

  formHaveErrors(message, fields) {
    console.log(message)
    console.log(fields)
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
      }
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
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
              const { type, name, label, placeholder, options } = field
              let inputFieldType = ""
              if (type === "text") {
                inputFieldType = (
                  <TextField
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                  />
                )
              } else if (type === "textarea") {
                inputFieldType = (
                  <TextArea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                  />
                )
              } else if (type === "email") {
                inputFieldType = (
                  <TextField
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                  />
                )
              } else if (type === "select") {
                inputFieldType = (
                  <SelectField
                    name={name}
                    onChange={this.onChange}
                    value={value}
                    options={options}
                  />
                )
              } else if (type === "upload") {
                inputFieldType = ""
              }

              const value = this.state[name] ? this.state[name] : ""
              return (
                <div
                  key={index}
                  className={`customform__field customform__field--${type}`}
                >
                  <label htmlFor={name}>{label}</label>
                  {inputFieldType}
                </div>
              )
            })}
            <div className="athleteform__form--button">
              <NormalButton disabled={this.state.submitting}>
                Submit
              </NormalButton>
            </div>
          </form>
        </StandardWrapper>
      </FormFieldsStyled>
    )
  }
}

export default FormFields
