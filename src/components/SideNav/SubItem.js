import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledSub = styled.li`
  display: block;
  transition: 0.5s ease;
  transform: translateX(-10rem);
  text-align: left;
  color: ${props => props.theme.pacificBlue};
  letter-spacing: 0.15rem;
  font-size: 1.6rem;
  border-bottom: 0;
  font-weight: 400;
  line-height: 1.2em;
  opacity: 0;

  a {
    display: block;
    color: ${props => props.theme.pacificBlue};
    transition: all 0.3s ease;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 400;
    font-size: 1em;
    font-style: normal;

    &:hover {
      color: ${props => props.theme.mandarinOrange};
    }
  }

  &.sub-item-active {
    transition: all 0.3s ease-in-out ${props => `${(props.index + 1) / 3}s`} !important;
    opacity: ${props => props.isActive && "1 !important;"};
    transform: ${props => props.isActive && "translateX(0rem) !important;"};
  }
`

class SubItem extends Component {
  render() {
    const slug = this.props.data.slug
    const hash = this.props.data.location_hash
    const activeClassName = this.props.isActive ? " sub-item-active" : ""

    return (
      <StyledSub
        key={this.props.index}
        isActive={this.props.isActive}
        index={this.props.index}
        className={`nav-link-sub${activeClassName}`}
      >
        <Link to={`/${slug}/`}>{this.props.data.title}</Link>
      </StyledSub>
    )
  }
}

export default SubItem
