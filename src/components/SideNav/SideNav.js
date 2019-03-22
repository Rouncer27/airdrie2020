import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import $ from "jquery"

import NavIcon from "./NavIcon"
import NavItem from "./NavItem"

const StyledSideNav = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 0;
  width: 10rem;
  transition: all 0.4s ease;
  transform: translateY(-50%);
  z-index: 500;

  @media (min-width: 768px) {
    display: block;
  }

  .sidenav__icons {
    position: relative;
    margin: auto;
    background: $white;

    @media (min-width: 1024px) {
      max-width: 10rem;
    }
  }

  .sidenav__inside {
    position: absolute;
    top: -7.5%;
    left: -36rem;
    width: 36rem;
    height: 115%;
    padding-top: 8rem;
    padding-right: 5rem;
    background: #fff;
    border-radius: 0 0.4rem 0.4rem 0;
    border-bottom: 0.6rem solid #000;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  }

  &.menu-active-open {
    transform: translate(36rem, -50%);
  }

  .close-nav {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    transition: all 0.3s ease;
    border-radius: 50%;
    border: 0.1rem solid ${props => props.theme.teal};

    &::after {
      font-family: ${props => props.theme.fontAwesome};
      position: absolute;
      top: 50%;
      left: 50%;
      transition: all 0.3s ease;
      transform: translate(-50%, -50%);
      color: ${props => props.theme.grey};
      font-weight: 100;
      font-size: 2rem;
      content: "\f00d";
      opacity: 0.6;
    }

    &:hover {
      border: 0.1rem solid ${props => props.theme.teal};
      cursor: pointer;
      opacity: 1;

      &::after {
        color: ${props => props.theme.teal};
        opacity: 1;
      }
    }
  }
`

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.toggleTheSideNav = this.toggleTheSideNav.bind(this)
    this.closeTheSideNav = this.closeTheSideNav.bind(this)
    this.smoothScroll = this.smoothScroll.bind(this)
    this.state = {
      isSideNavOpen: false,
      activeIcon: "",
    }
  }

  componentDidMount() {}

  smoothScroll(e) {}

  closeTheSideNav() {
    this.setState(() => {
      return {
        isSideNavOpen: false,
        activeIcon: "",
      }
    })
  }

  toggleTheSideNav(e) {
    const clickedTarget = e.target.dataset.slug ? e.target.dataset.slug : ""

    if (clickedTarget === this.state.activeIcon) {
      this.setState(() => {
        return {
          isSideNavOpen: false,
          activeIcon: "",
        }
      })
    } else {
      this.setState(() => {
        return {
          isSideNavOpen: true,
          activeIcon: clickedTarget,
        }
      })
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    _att_main_navigation_items {
                      title
                      icon
                      link {
                        post_name
                      }
                      sub_items {
                        title
                        link {
                          post_name
                          post_parent
                        }
                      }
                    }
                  }
                }
              }
            }

            allWordpressPage {
              edges {
                node {
                  wordpress_id
                  slug
                }
              }
            }
          }
        `}
        render={data => {
          const navItems =
            data.allWordpressAcfOptions.edges[0].node.options
              ._att_main_navigation_items

          const allPages = data.allWordpressPage.edges

          const activeClass = this.state.isSideNavOpen
            ? " menu-active-open"
            : ""

          return (
            <StyledSideNav className={`sidenav${activeClass}`}>
              <div className="sidenav__icons">
                {navItems.map((item, index) => {
                  return (
                    <NavIcon
                      key={index}
                      data={item}
                      toggleTheSideNav={this.toggleTheSideNav}
                      activeIcon={this.state.activeIcon}
                    />
                  )
                })}
              </div>
              <div className="sidenav__inside">
                {navItems.map((item, index) => {
                  return (
                    <NavItem
                      key={index}
                      data={item}
                      pages={allPages}
                      activeIcon={this.state.activeIcon}
                      smoothScroll={this.smoothScroll}
                    />
                  )
                })}
                <button onClick={this.closeTheSideNav} className="close-nav" />
              </div>
            </StyledSideNav>
          )
        }}
      />
    )
  }
}

export default SideNav
