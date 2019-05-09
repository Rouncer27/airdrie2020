import React, { Component } from "react"
import styled from "styled-components"

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

class TextField extends Component {
  render() {
    let errorMessage = false
    this.props.errors.forEach(error => {
      if (error.idref === this.props.name) {
        errorMessage = `${error.message} -- ${this.props.label}`
      }
    })

    return (
      <TextFieldStyled>
        {errorMessage && <p className="error-warning">{errorMessage}</p>}
        <input
          type={this.props.type}
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </TextFieldStyled>
    )
  }
}

export default TextField
