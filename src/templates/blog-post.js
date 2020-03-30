import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div style={{margin:'5rem auto'}}>
        <div style={{margin:'0px auto 0px auto', maxWidth:'39rem'}}>
            <h1>{post.frontmatter.title}</h1>
            <span style={{float:'right'}}>{post.frontmatter.date}</span>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`