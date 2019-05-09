import React, { Component } from "react"
import styled from "styled-components"

const TextAreaStyled = styled.textarea`
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
`

class TextArea extends Component {
  render() {
    return (
      <>
        <TextAreaStyled
          cols="40"
          rows="8"
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />
      </>
    )
  }
}

export default TextArea
