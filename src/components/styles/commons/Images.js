import styled from "styled-components"
import rippedPaper from "../../../images/ripped/AIR-2020-paper-01.svg"

const HeroWrapper = styled.div`
  position: relative;
  min-height: 45rem;
  max-height: 45rem;
  @media (min-width: ${props => props.theme.bpTablet}) {
    min-height: 65rem;
    max-height: 65rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    min-height: 75rem;
    max-height: 100vh;
  }
  z-index: 100;

  &::after {
    display: block;
    position: absolute;
    right: 0;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    height: 5rem;
    transform: rotate(-180deg);
    background-image: url(${rippedPaper});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    content: "";
    z-index: 15;
  }

  @media (min-width: ${props => props.theme.bpTablet}) {
    &::after {
      bottom: -0.5rem;
      height: 10rem;
    }
  }
`

const HeroImageStyle = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 45rem;
  max-height: 45rem;
  @media (min-width: ${props => props.theme.bpTablet}) {
    min-height: 65rem;
    max-height: 65rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    min-height: 75rem;
    max-height: 100vh;
  }
  z-index: 1;

  img {
    min-height: 45rem;
    max-height: 45rem;
    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 65rem;
      max-height: 65rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      min-height: 75rem;
      max-height: 100vh;
    }
    object-fit: cover;
    object-position: center;
  }
`

export { HeroWrapper, HeroImageStyle }
