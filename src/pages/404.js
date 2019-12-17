import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const NotFound = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 95rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100rem;
  }

  @media (min-width: 1325px) {
    max-width: 115rem;
  }

  h1,
  p {
    width: 100%;
    text-align: center;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NotFound>
  </Layout>
)

export default NotFoundPage
