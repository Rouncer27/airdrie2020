import styled from "styled-components"
import { Link } from "gatsby"

const NormalButton = styled.button`
  display: inline-block;
  padding: 0 2rem;
  border: 0.3rem solid ${props => props.theme.pacificBlue};
  transition: all 0.3s ease;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-size: 2.8rem;
  line-height: 1.4;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 2rem;
  }

  &:hover {
    border: 0.3rem solid ${props => props.theme.mandarinOrange};
    color: ${props => props.theme.mandarinOrange};
    cursor: pointer;
  }

  &:disabled {
    border: 0.3rem solid ${props => props.theme.grey};
    color: ${props => props.theme.grey};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`

const NormalAchor = styled.a`
  display: inline-block;
  padding: 0 5rem;
  border: 0.1rem solid ${props => props.theme.pacificBlue};
  transition: all 0.3s ease;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-size: 2.8rem;
  line-height: 1.4;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 2.4rem;
  }

  &:hover {
    border: 0.1rem solid ${props => props.theme.mandarinOrange};
    color: ${props => props.theme.mandarinOrange};
  }
`

const NormalLink = styled(Link)`
  display: inline-block;
  padding: 0 5rem;
  border: 0.1rem solid ${props => props.theme.pacificBlue};
  transition: all 0.3s ease;
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSec};
  font-size: 2.8rem;
  line-height: 1.4;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    font-size: 2.4rem;
  }

  &:hover {
    border: 0.1rem solid ${props => props.theme.mandarinOrange};
    color: ${props => props.theme.mandarinOrange};
  }
`

export { NormalButton, NormalAchor, NormalLink }
