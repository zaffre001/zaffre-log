import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
    <Layout>
        <h1>Hello 희정!</h1>
        <h2>{data.allMarkdownRemark.totalCount} 글 목록</h2>

        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <Link to={node.fields.slug} css={css`text-decoration: none;color: inherit;`}>
                    <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                        {node.frontmatter.title}{" "}
                        <span css={css`color: #bbb;`}>
                            — {node.frontmatter.date}
                        </span>
                    </h3>
                    <p>{node.excerpt}</p>
                </Link>
            </div>
        ))}
    </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt

          fields {
            slug
          }
        } 
      }
    }
  }
`