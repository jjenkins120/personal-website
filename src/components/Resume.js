import React, { useState } from 'react'
import SubText from './SubText'
import { Icon } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf'
import ControlPanel from './ControlPanel'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = ({file, title}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const displayPages = () => {
    if (numPages > 1){
      return (
        <div className='resume-controls'>  
          <Icon 
            name='search minus' 
            onClick={minusScale}
            style={{marginRight: '10px'}}
          />
          <Icon 
            name='minus' 
            onClick={minusPage}
            style={{marginRight: '10px'}}
          />
          {pageNumber}&nbsp; of &nbsp;{numPages} 
          <Icon 
            name='plus'
            onClick={plusPage}
            style={{marginRight: '10px', marginLeft: '10px'}}
          />
          <Icon 
            name='magnify' 
            onClick={plusScale}
          />
        </div>
      )
    } else {
      return (
        <div className='resume-controls'>  
          <Icon 
            name='search minus' 
            onClick={minusScale}
            style={{marginRight: '10px'}}
          />
          <Icon 
            name='magnify' 
            onClick={plusScale}
          />
        </div>  
      )
    }
  }

  const plusScale = () => {
    if (scale < 2){
      setScale(scale + 0.1)
    }
  }

  const minusScale = () => {
    if (scale > 1){
      setScale(scale - 0.1)
    }
  }

  const plusPage = () => {
    if (pageNumber < numPages){
      setPageNumber(pageNumber + 1)
    }
  }

  const minusPage = () => {
    if (pageNumber !== 1){
      setPageNumber(pageNumber - 1)
    }
  }

  return (
    <div>
      <SubText text={title}/>
      <ControlPanel displayPages={displayPages}/>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading='Loading...'
        className='resume'
      >
        <Page 
          pageNumber={pageNumber} 
          width='500'
          scale={scale}
        />
      </Document>
    
    </div>
  );
}

export default Resume

