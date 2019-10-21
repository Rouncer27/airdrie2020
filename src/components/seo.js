import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, metaImg, location }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLogo
            metaImg
            siteUrl
          }
        }

        siteLogo: file(relativePath: { eq: "airdrie2020logo.jpg" }) {
          publicURL
        }

        defaultFb: file(relativePath: { eq: "default-social-media.png" }) {
          publicURL
        }
      }
    `
  )

  const isBlogPost = false
  const siteLogoUrl = `${site.siteMetadata.siteUrl}/${siteLogo.publicURL}`
  const metaDescription = description || site.siteMetadata.description

  const backupDefaultFBImgUrl = defaultFb.publicURL
  const pageSpecificityFBImgUrl = metaImg
  const imgToUse =
    pageSpecificityFBImgUrl !== undefined
      ? pageSpecificityFBImgUrl
      : backupDefaultFBImgUrl
  const image = `${site.siteMetadata.siteUrl}${imgToUse}`
  const canonicalUrl = `${site.siteMetadata.siteUrl}${location}`

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang }}>
        {/* General tags */}
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={image} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={metaDescription} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={`en_US`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
