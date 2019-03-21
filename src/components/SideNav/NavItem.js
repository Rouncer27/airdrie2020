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
    const fullURL = this.props.data.link
    const fullURLParts = fullURL.split("/")
    const domainIndex = fullURLParts.indexOf("airdrie2020")
    const newSlugs = fullURLParts.slice(
      `${domainIndex + 1}`,
      fullURLParts.length
    )
    const slug = newSlugs.join("/") === "" ? "airdrie2020" : newSlugs.join("/")
    const subMenuItems = this.props.data.sub_items
    const slugWithoutSlash = slug.split("/")[0]

    const linkSlug = newSlugs.join("/") === "" ? "/" : newSlugs.join("/")

    const isActiveMenu =
      this.props.activeIcon === slugWithoutSlash ? true : false

    const activeClassName =
      this.props.activeIcon === slugWithoutSlash ? " active-inside-menu" : ""

    return (
      <StyledSubMenu className={activeClassName} data-slug={slugWithoutSlash}>
        <li className="nav-link-title">
          <Link to={linkSlug}>{this.props.data.title}</Link>
        </li>
        {subMenuItems.map((subItem, index) => {
          return (
            <SubItem
              key={index}
              data={subItem}
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
