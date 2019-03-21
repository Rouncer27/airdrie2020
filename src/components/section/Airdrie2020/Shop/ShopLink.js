import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../styles/commons/Wrappers"
import { NormalAchor } from "../../../styles/commons/Buttons"

const ShopLinkStyled = styled.section`
  padding: 5rem 0;
  .shoplink__img {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.33% - 6rem);
      margin: 3rem;
    }
  }
`

class ShopLink extends Component {
  render() {
    const { menImg, womenImg, childImg, shopLink } = this.props.data

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
