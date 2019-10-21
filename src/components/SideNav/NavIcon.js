import React, { Component } from "react"

import styled from "styled-components"

import HouseIcon from "../../images/icons/AIR-NAV-Icons-01-home.svg"
import MapIcon from "../../images/icons/AIR-NAV-Icons-02-map.svg"
import LogoIcon from "../../images/icons/AIR-NAV-Icons-03-logo.svg"
import CalIcon from "../../images/icons/AIR-NAV-Icons-04-cal.svg"
import PeopleIcon from "../../images/icons/AIR-NAV-Icons-05-people.svg"
import JerseyIcon from "../../images/icons/AIR-NAV-Icons-06-jersey.svg"
import NewsIcon from "../../images/icons/AIR-NAV-Icons-07-news.svg"

const StyledIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.4s ease;
  align-items: center;
  background: rgba(245, 245, 245, 0.95);
  border-bottom: 1px solid #eee;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 10rem;
    height: 9rem;
    padding-top: 5rem;
    text-align: center;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: 10rem;
    height: 9rem;
    padding-top: 5rem;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }

  &::after {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 0;
    left: 50%;
    width: 5rem;
    height: 4rem;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: "";
  }
  &.sidenav__icon--house {
    &::after {
      width: 4rem;
      height: 3rem;
      background-image: url(${HouseIcon});
    }
  }
  &.sidenav__icon--map {
    &::after {
      width: 4rem;
      height: 3rem;
      background-image: url(${MapIcon});
    }
  }
  &.sidenav__icon--logo {
    &::after {
      width: 4rem;
      height: 3rem;
      background-image: url(${LogoIcon});
    }
  }
  &.sidenav__icon--cal {
    &::after {
      width: 4rem;
      height: 4rem;
      background-image: url(${CalIcon});
    }
  }
  &.sidenav__icon--people {
    &::after {
      width: 4rem;
      height: 3rem;
      background-image: url(${PeopleIcon});
    }
  }
  &.sidenav__icon--jersey {
    &::after {
      width: 4rem;
      height: 3rem;
      background-image: url(${JerseyIcon});
    }
  }
  &.sidenav__icon--news {
    &::after {
      width: 4rem;
      height: 4rem;
      background-image: url(${NewsIcon});
    }
  }

  p {
    margin: 0;
    color: #000;
    opacity: 0.6;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 1.2rem;
    }
  }

  &.active-icon {
    background: #fff;
    box-shadow: 0 0 0 transparent;
    z-index: 99999999999;
  }
`

class NavIcon extends Component {
  render() {
    const iconIdentifier = this.props.data.title
      .split(" ")
      .join("")
      .toLowerCase()

    const activeClassName =
      this.props.activeIcon === iconIdentifier ? " active-icon" : ""

    return (
      <StyledIcon
        data-slug={iconIdentifier}
        className={`sidenav__icon sidenav__icon--${
          this.props.data.icon
        }${activeClassName}`}
        onClick={this.props.toggleTheSideNav}
      >
        <p data-slug={iconIdentifier} onClick={this.props.toggleTheSideNav}>
          {this.props.data.title}
        </p>
      </StyledIcon>
    )
  }
}

export default NavIcon
