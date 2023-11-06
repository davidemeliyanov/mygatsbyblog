import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  // console.log(site.siteMetadata.title)

  return (
    
      <header>
        
          {siteTitle}
        
      </header>
    
  )
}

export default Header
