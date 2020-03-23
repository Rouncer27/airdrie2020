import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { NormalAchor } from "../../../styles/commons/Buttons"

const ShopLinkStyled = styled.section`
  padding: 5rem 0;

  .shoplink__wrapper {
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

  .shoplink__img {
    width: calc(100% - 4rem);
    margin: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 2rem);
      margin: 1rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.33% - 6rem);
      margin: 3rem;
    }
  }

  .shoplink__button {
    a {
      margin: 2rem;
    }
  }
`

class ShopLink extends Component {
  render() {
    const { menImg, womenImg, childImg, shopLink, ticLink } = this.props.data

    const menFluid = menImg.localFile.childImageSharp.fluid
    const menAlt = menImg.alt_text

    const womenFluid = womenImg.localFile.childImageSharp.fluid
    const womenAlt = womenImg.alt_text

    const childFluid = childImg.localFile.childImageSharp.fluid
    const childAlt = childImg.alt_text

    return (
      <ShopLinkStyled className="shoplink">
        <StandardWrapper className="shoplink__wrapper">
          <div className="shoplink__img">
            <Img fluid={menFluid} alt={menAlt} />
          </div>
          <div className="shoplink__img">
            <Img fluid={womenFluid} alt={womenAlt} />
          </div>
          <div className="shoplink__img">
            <Img fluid={childFluid} alt={childAlt} />
          </div>
          <div className="shoplink__button">
            <NormalAchor target="_blank" href={shopLink}>
              Shop
            </NormalAchor>
          </div>
        </StandardWrapper>
      </ShopLinkStyled>
    )
  }
}

export default ShopLink
