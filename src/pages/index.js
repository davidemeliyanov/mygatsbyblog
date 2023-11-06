import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = ({data}) => {

  const { nodes } = data.allMarkdownRemark;
  // console.log('nodes', nodes)

  return (
  <Layout>
      <div>
      <h1>Hi people</h1>

    </div>

    <div className="posts">
      {nodes.map(post => {
        const { category, title, url, image } = post.frontmatter;
        const img = getImage(image)
        return (
          <div className="post" key={post.id}>
            <GatsbyImage image={img} alt={title} />
            <div>
              <div className="link">
                <Link to={`/${category}/${url}`}>{title}</Link>
              </div>
              <div>
                  {/* <p>text</p> */}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
 query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: [AUTO, AVIF], placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
 }
`