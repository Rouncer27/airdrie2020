import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalButton } from "../../styles/commons/Buttons"

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

    label {
      display: block;
      width: 100%;
      margin-bottom: 0.3rem;
      color: ${props => props.theme.black};
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
      box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem ${props => props.theme.mandarinOrange};
      }
    }
  }
`

class FormFields extends Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
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
    const fields = this.props.data
    return (
      <FormFieldsStyled className="customform">
        <StandardWrapper className="customform__wrapper">
          <div className="customform__title">
            <h2>Submit an event</h2>
          </div>
          <form onSubmit={this.submit} className="customform__form">
            {fields.map((field, index) => {
              const { type, name, label, placeholder } = field
              const value = this.state[name] ? this.state[name] : ""
              return (
                <div key={index} className="customform__field">
                  <label htmlFor={name}>{label}</label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.onChange}
                  />
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
