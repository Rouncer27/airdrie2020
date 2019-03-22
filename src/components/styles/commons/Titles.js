import styled from "styled-components"

const HeroTitle = styled.div`
  position: absolute;
  right: 0;
  bottom: 5rem;
  left: 0;
  width: 100%;
  max-width: 45rem;
  margin: auto;
  text-align: center;
  z-index: 101;

  @media (min-width: ${props => props.theme.bpTablet}) {
    bottom: 10rem;
    max-width: 75rem;
  }

  h1 {
    position: relative;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontSec};
    font-size: 4rem;
    line-height: 1;
    z-index: 5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 10rem;
    }
  }
`

const BackgroundTitle = styled.div`
  position: relative;
  width: 100%;
  padding: 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0;
  }
  h2 {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    font-family: ${props => props.theme.fontSec};
    font-size: 3.4rem;
    text-align: center;
    line-height: 1;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 75rem;
      font-size: 6rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 75rem;
      font-size: 6rem;
    }

    span {
      display: block;
    }
  }

  p {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 100%;
    margin: auto;
    padding: 0;
    transform: translateY(-50%);
    color: ${props => props.theme.pacificBlue};
    font-family: ${props => props.theme.fontSec};
    font-size: 7.5rem;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.25;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 18rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 18rem;
    }
  }
`

export { HeroTitle, BackgroundTitle }
