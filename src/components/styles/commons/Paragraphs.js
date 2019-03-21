import styled from "styled-components"

const StandardParagraphs = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 90rem;
  }

  p {
    font-weight: 300;
  }
`

export { StandardParagraphs }
