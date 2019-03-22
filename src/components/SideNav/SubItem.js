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
    transition: all 0.3s ease-in-out ${props => `${(props.index + 1) / 5}s`} !important;
    opacity: ${props => props.isActive && "1 !important;"};
    transform: ${props => props.isActive && "translateX(0rem) !important;"};
  }
`

class SubItem extends Component {
  render() {
    const insideOutside = this.props.data.inside_outside
    let subMenuItemLink = false

    if (insideOutside === "inside") {
      let slug = ""
      const mainTitleSlug =
        this.props.data.link.post_name === "home"
          ? ""
          : `${this.props.data.link.post_name}`

      if (this.props.data.link.post_parent > 0) {
        const parentPage = this.props.pages.filter(page => {
          if (page.node.wordpress_id === this.props.data.link.post_parent) {
            return page
          }
        })
        const parentSlug = parentPage[0].node.slug
        slug = `/${parentSlug}/${mainTitleSlug}`
      } else {
        slug = `/${mainTitleSlug}`
      }

      subMenuItemLink = <Link to={slug}>{this.props.data.title}</Link>
    } else {
      subMenuItemLink = (
        <a target="_blank" href={this.props.data.other}>
          {this.props.data.title}
        </a>
      )
    }

    const activeClassName = this.props.isActive ? " sub-item-active" : ""

    return (
      <StyledSub
        key={this.props.index}
        isActive={this.props.isActive}
        index={this.props.index}
        className={`nav-link-sub${activeClassName}`}
      >
        {subMenuItemLink}
      </StyledSub>
    )
  }
}

export default SubItem
