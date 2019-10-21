let BASE_URL = ""
let PORTOCOL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "database.airdrie2020.com"
  PORTOCOL = "https"
} else {
  BASE_URL = "database.airdrie2020.com"
  PORTOCOL = "https"
}

module.exports = {
  siteMetadata: {
    title: `Airdrie 2020`,
    description: `Excitement is in the air! February 14-17, 2020 over 2,800 athletes, coaches and officials from across Alberta will be in Airdrie to compete, learn and share experiences of a lifetime at the 2020 Alberta Winter Games.`,
    author: `@switchback4ever`,
    metaImg: `src/images/default-social-media.png`,
    siteLogo: `src/images/airdrie2020logo.jpg`,
    siteUrl: `https://airdriesport.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F05C3B`,
        theme_color: `#00ABC8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `${BASE_URL}`,
        protocol: `${PORTOCOL}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/media",
          "**/pages",
          "**/wp-api-menus/v2",
          "**/wp-api-menus/v2/menus",
          "**/packages",
          "**/local_events",
          "**/local_groups",
          "**/taxonomies",
          "**/group_age",
          "**/group_category",
          "**/event_category",
          "**/package_type",
        ],
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
