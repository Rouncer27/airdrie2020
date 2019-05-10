import React, { Component } from "react"
import styled from "styled-components"

const SelectFieldStyled = styled.div`
  position: relative;
  background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
  height: 29px;
  overflow: hidden;
  width: 240px;
  border-radius: 0;
  background-color: ${props => props.theme.pacificBlue};

  select {
    background: transparent;
    border: none;
    font-size: 14px;
    height: 29px;
    padding: 5px;
    width: 268px;
    color: #fff;
  }
`

class SelectField extends Component {
  render() {
    return (
      <SelectFieldStyled>
        <select
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          required={this.props.required}
        >
          <option value=""> -- select an option -- </option>
          {this.props.options.map((option, index) => {
            return (
              <option key={index} title={option.option} value={option.option}>
                {option.option}
              </option>
            )
          })}
        </select>
      </SelectFieldStyled>
    )
  }
}

export default SelectField
