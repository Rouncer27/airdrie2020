import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./Footer"

import theme from "./styles/Theme"
import GlobalStyle from "./styles/Global"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <div className="swbwrapper">
              <Header siteTitle={data.site.siteMetadata.title} />
              <main>{children}</main>
              <Footer />
            </div>
          </React.Fragment>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
