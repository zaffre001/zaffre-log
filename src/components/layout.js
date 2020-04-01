import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import RecentItem from "./recentItem"
import Octicon, {iconsByName} from '@primer/octicons-react'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
       childImageSharp {
          fixed(width: 100, height: 100) {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
            originalName
          }
        }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit:3) {
      edges{
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`)

  return (
    <div>
      <div style={{margin: '0px auto 0px auto', maxWidth: '56rem', boxShadow: '0px 0px 30px #eeeeee', border: '1px solid #eeee' }}>
        
        <div style={{width: '200px', position:'absolute'}}>
        <Link to={'/'} style={{textDecoration:'none', color:'inherit'}}>
          <Image 
          fixed={data.avatar.childImageSharp.fixed} 
          style={{marginTop: 50,minWidth: 100, minHeight:100,borderRadius: `12px`, marginLeft:'50px'}}
          imgStyle={{
            borderRadius: `12px`,
          }}
          ></Image>
          </Link>
          <div style={{textAlign:'center'}}>
            <h4 style={{marginBottom:'5px'}}>zaffre</h4>
            <p style={{color:'grey', marginBottom:'30px'}}>덕업일치 프로그래머</p>
            <h4 style={{marginBottom:'15px'}}>최근 게시글</h4>

            {data.allMarkdownRemark.edges.map(({ node }) => (
            <RecentItem key={node.id}>
                <Link to={node.fields.slug} style={{textDecoration:'none', color:'inherit'}}>
                    {node.frontmatter.title}
                </Link>
            </RecentItem>
          ))}
            
            <br/>
            <br/>

            <a href='https://github.com/zaffre001/' style={{textDecoration:'none', color:'inherit'}}>
              <RecentItem>
                <span style={{color:'#7661dd'}}><Octicon icon={iconsByName['mark-github']} size='small'/></span>
                <span style={{verticalAlign:'top', marginLeft:'8px'}}>깃허브</span>
              </RecentItem>
            </a>

            <Link to='/about' style={{textDecoration:'none', color:'inherit'}}>
              <RecentItem>
                <span style={{color:'#7661dd'}}><Octicon icon={iconsByName['person']} size='small'/></span>
                <span style={{verticalAlign:'top', marginLeft:'8px'}}>저에 대해서는 이곳으로</span>
              </RecentItem>
            </Link>
          </div>
        </div>

        <div style={{ marginLeft: '200px', backgroundColor: '#f8f8f8', padding: '30px', minHeight:'600px'}}>
          {children}
        </div>

      </div>
    </div>
  )
}