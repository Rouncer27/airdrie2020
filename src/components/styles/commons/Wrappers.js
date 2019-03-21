import styled from "styled-components"

const StandardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 95rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100rem;
  }

  @media (min-width: 1325px) {
    max-width: 115rem;
  }
`

export { StandardWrapper }
