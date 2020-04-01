import React from "react"

export default ({ children }) => {
  return (
    <div style={{fontSize:'0.65rem', overflow:'hidden', whiteSpace:'nowrap', maxWidth:'100%', height:'2rem', textOverflow:'ellipsis',  backgroundColor:'#f8f8f8', textAlign:'left', color:'grey',padding:'10px', borderRadius:'12px', margin:'0px 12px 10px 12px'}}>{children}</div>
  )
}