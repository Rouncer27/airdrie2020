import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { NormalAchor, NormalLink } from "../../styles/commons/Buttons"

import clipboard from "../../../images/icons/formLink/Icons-sitewide-events-01.svg"
import calendar from "../../../images/icons/formLink/Icons-sitewide-groups-01.svg"
import shoes from "../../../images/icons/formLink/Icons-sitewide-volunteer.svg"

const FormLinksStyled = styled.section`
  .formlinks__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 55rem;
    }

    @media (min-width: 900px) {
      max-width: 75rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
    }

    @media (min-width: 1200px) {
      max-width: 110rem;
    }
  }

  .formlinks__item {
    position: relative;
    width: calc(100%);
    margin: 2rem;
    padding-top: 7rem;
    padding-bottom: 4rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      padding-bottom: 8rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.3333% - 4rem);
      padding-bottom: 8rem;
    }

    &::after {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 5rem;
      height: 5rem;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      content: "";
    }

    &--title {
      h3 {
        margin: 0 auto;
        font-family: ${props => props.theme.fontSec};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.4rem;
        }
      }
    }

    &--content {
      p {
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }

    &--button {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
    }

    &--clipboard {
      &::after {
        width: 5rem;
        height: 5rem;
        background-image: url(${clipboard});
      }
    }

    &--calendar {
      &::after {
        width: 5rem;
        height: 5rem;
        background-image: url(${calendar});
      }
    }

    &--shoes {
      &::after {
        width: 7rem;
        height: 7rem;
        background-image: url(${shoes});
      }
    }
  }
`

class FormLinks extends Component {
  render() {
    const formLinks = this.props.data

    return (
      <FormLinksStyled className="formlinks">
        <StandardWrapper className="formlinks__wrapper">
          {formLinks.map((link, index) => {
            let formLinkButton = false

            if (link.internal_external === "internal") {
              formLinkButton = (
                <NormalLink to={link.wordpress_internal}>Go to form</NormalLink>
              )
            } else {
              formLinkButton = (
                <NormalAchor
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.external}
                >
                  Visit Website
                </NormalAchor>
              )
            }

            return (
              <div
                key={index}
                className={`formlinks__item formlinks__item--${link.icon}`}
              >
                <div className="formlinks__item--title">
                  <h3>{link.title}</h3>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: link.content }}
                  className="formlinks__item--content"
                />
                <div className="formlinks__item--button">{formLinkButton}</div>
              </div>
            )
          })}
        </StandardWrapper>
      </FormLinksStyled>
    )
  }
}

export default FormLinks
