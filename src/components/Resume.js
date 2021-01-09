import React from 'react'

import SubText from './SubText'
import { Document, Page } from 'react-pdf'

const Resume = ({file, title}) => {
  return (
    <div>
      <SubText text={title}/>
      <Document 
        file={file}
      />
        
      {/* <h3>{url}</h3> */}
    </div>
  )
}

export default Resume

