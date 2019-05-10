import React, { Component } from "react"
import styled from "styled-components"

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

class TextArea extends Component {
  render() {
    let errorMessage = false
    this.props.errors.forEach(error => {
      if (error.idref === this.props.name) {
        errorMessage = `${error.message} -- ${this.props.label}`
      }
    })

    return (
      <TextAreaStyled>
        {errorMessage && <p className="error-warning">{errorMessage}</p>}
        <textarea
          cols="40"
          rows="8"
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
          required={this.props.required}
        />
      </TextAreaStyled>
    )
  }
}

export default TextArea
