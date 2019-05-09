import React, { Component } from "react"
import styled from "styled-components"

const TextFieldStyled = styled.input`
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
`

class TextField extends Component {
  render() {
    return (
      <>
        <TextFieldStyled
          type={this.props.type}
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    )
  }
}

export default TextField
