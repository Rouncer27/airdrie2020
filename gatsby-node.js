const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                slug
                template
                wordpress_id
                parent_element {
                  slug
                }
              }
            }
          }

          allWordpressWpPackages {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }

          allWordpressWpLocalEvents {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }

          allWordpressWpLocalGroups {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }

          allWordpressPost {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === "home") {
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/index.js`),
          })
        } else if (edge.node.template === "tpl-about-page.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/About.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-airdrie2020-page.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Airdrie2020.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (
          edge.node.template === "tpl-airdrie2020-getinvolved-page.php"
        ) {
          let slug = edge.node.slug
          if (edge.node.parent_element.slug !== null) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }

          createPage({
            path: `/${slug}`,
            component: path.resolve(
              `./src/templates/Airdrie2020GetInvolved.js`
            ),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-airdrie2020-coming-page.php") {
          let slug = edge.node.slug
          if (edge.node.parent_element.slug !== null) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }

          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/Airdrie2020Coming.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-airdrie2020-shop-page.php") {
          let slug = edge.node.slug
          if (edge.node.parent_element.slug !== null) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/Airdrie2020Shop.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-airdrie2020-video-page.php") {
          let slug = edge.node.slug
          if (edge.node.parent_element.slug !== null) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/Airdrie2020Video.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-local-events-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/LocalEvents.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-custom-form-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/CustomForm.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-local-groups-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/LocalGroups.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-volunteer-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/Volunteer.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-contact-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/Contact.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-news-blog-page.php") {
          let slug = edge.node.slug
          if (
            edge.node.parent_element &&
            edge.node.parent_element.slug !== null
          ) {
            slug = `${edge.node.parent_element.slug}/${edge.node.slug}`
          }
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/News.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/PageDefault.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        }
      })

      result.data.allWordpressWpPackages.edges.forEach(edge => {
        createPage({
          path: `/packages/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SinglePackage.js`),
          context: {
            id: edge.node.wordpress_id,
          },
        })
      })

      result.data.allWordpressWpLocalEvents.edges.forEach(edge => {
        createPage({
          path: `/local-sports-events/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SingleLocalEvent.js`),
          context: {
            id: edge.node.wordpress_id,
          },
        })
      })

      result.data.allWordpressWpLocalGroups.edges.forEach(edge => {
        createPage({
          path: `/local-sports-groups/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SingleLocalGroup.js`),
          context: {
            id: edge.node.wordpress_id,
          },
        })
      })

      result.data.allWordpressPost.edges.forEach(edge => {
        createPage({
          path: `/news/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SinglePost.js`),
          context: {
            id: edge.node.wordpress_id,
          },
        })
      })
    })
    resolve()
  })
}
