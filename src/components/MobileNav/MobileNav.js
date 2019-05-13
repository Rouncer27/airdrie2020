import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const MobileNavWrapper = styled.div`
  @media (min-width: ${props => props.theme.bpTablet}) {
    display: none;
  }
  .mobile-toggle-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0.25rem;
    left: 0.25rem;
    width: 7.5rem;
    height: 7.5rem;
    margin: 0 auto;
    padding: 0;
    background: ${props => props.theme.pacificBlue};
    border: 0.1rem solid ${props => props.theme.white};
    box-shadow: 0.25rem 0.25rem 0.25rem ${props => props.theme.black};
    color: ${props => props.theme.white};
    text-align: center;
    z-index: 99999999;

    &::before,
    &::after {
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      width: 80%;
      height: 0.2rem;
      margin: 0 auto;
      transform: rotate(0);
      transform-origin: center center;
      transition: all 0.2s ease;
      background-color: ${props => props.theme.white};
      content: "";
    }

    &::before {
      top: 1rem;
    }

    &::after {
      bottom: 1rem;
    }

    &:hover {
      cursor: pointer;
      &::before {
        top: 0.5rem;
      }

      &::after {
        bottom: 0.5rem;
      }
    }

    &:focus {
      outline: none;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: none;
    }
  }
`

const MobileNavStyled = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  background: ${props => props.theme.grey};
  transition: all 0.3s ease;
  transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(calc(-100% - 2rem))"};
  overflow-y: scroll;
  z-index: 9999999;

  .mobileNav__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
  }

  .mobileNav__items {
    width: 100%;
  }

  .mobileNav__item {
    width: 100%;

    a {
      display: block;
      width: 100%;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid ${props => props.theme.white};
      color: ${props => props.theme.pacificBlue};
      font-size: 3rem;
      text-align: center;

      &:hover {
        color: ${props => props.theme.white};
      }

      &:last-of-type {
        border-bottom: 0 solid transparent !important;
      }
    }

    [aria-current="page"] {
      color: ${props => props.theme.white};
      background: ${props => props.theme.pacificBlue};
    }
  }
`

class MobileNav extends Component {
  constructor(props) {
    super(props)

    this.toggleMobileNav = this.toggleMobileNav.bind(this)

    this.state = {
      isNavOpen: false,
    }
  }

  toggleMobileNav() {
    this.setState(prevState => {
      return {
        ...prevState,
        isNavOpen: !prevState.isNavOpen,
      }
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: { eq: "Mobile Navigation" }) {
              name
              items {
                wordpress_id
                title
                object_slug
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.wordpressWpApiMenusMenusItems.items
          return (
            <MobileNavWrapper>
              <button
                className="mobile-toggle-button"
                onClick={this.toggleMobileNav}
              >
                Menu
              </button>
              <MobileNavStyled
                isOpen={this.state.isNavOpen}
                className="mobileNav"
              >
                <div className="mobileNav__wrapper">
                  <ul className="mobileNav__items">
                    {menuItems.map((item, index) => {
                      return (
                        <li key={index} className="mobileNav__item">
                          <Link
                            to={
                              item.object_slug === "home"
                                ? "/"
                                : `/${item.object_slug}`
                            }
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </MobileNavStyled>
            </MobileNavWrapper>
          )
        }}
      />
    )
  }
}

export default MobileNav