
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            url
          }
        }
      }
    }
  `)

  console.log(data)
  data.allMarkdownRemark.nodes.forEach(node => {
    const { category, url } = node.frontmatter;
    actions.createPage({
      path: `/${category}/${url}`,
      component: require.resolve("./src/templates/SinglePost.js"),
      context: { url }
    })
  })
}