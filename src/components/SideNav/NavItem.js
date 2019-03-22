import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import SubItem from "./SubItem"

const StyledSubMenu = styled.ul`
  position: absolute;
  top: 50%;
  left: 0;
  width: 90%;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translate(-100rem, -50%);
  visibility: hidden;

  &.active-inside-menu {
    transform: translate(0rem, -50%);
    opacity: 1;
    visibility: visible;
  }

  li {
    padding-left: 3rem;
  }

  li.nav-link-title {
    margin-bottom: 4rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.1rem solid ${props => props.theme.greyLight};
    transition: 0.5s ease;
    color: ${props => props.theme.persianIndigo};
    font-size: 2rem;
    font-weight: 700;
    font-family: ${props => props.theme.fontPrim};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    line-height: 1;

    a {
      color: ${props => props.theme.persianIndigo};
    }
  }
`

class NavItem extends Component {
  render() {
    const subMenuItems = this.props.data.sub_items
    const iconIdentifier = this.props.data.title
      .split(" ")
      .join("")
      .toLowerCase()

    const mainTitleSlug =
      this.props.data.link.post_name === "home"
        ? "/"
        : `/${this.props.data.link.post_name}`

    const pages = this.props.pages

    const isActiveMenu = this.props.activeIcon === iconIdentifier ? true : false

    const activeClassName =
      this.props.activeIcon === iconIdentifier ? " active-inside-menu" : ""

    return (
      <StyledSubMenu className={activeClassName} data-slug={iconIdentifier}>
        <li className="nav-link-title">
          <Link to={mainTitleSlug}>{this.props.data.title}</Link>
        </li>
        {subMenuItems.map((subItem, index) => {
          return (
            <SubItem
              key={index}
              data={subItem}
              pages={pages}
              isActive={isActiveMenu}
              index={index}
              smoothScroll={this.props.smoothScroll}
            />
          )
        })}
      </StyledSubMenu>
    )
  }
}

export default NavItem
