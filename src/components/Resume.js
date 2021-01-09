import React, { useState } from 'react'
import SubText from './SubText'
import { Icon } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf'
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
        <div>  
          <Icon name='minus' onClick={() => minusPage()}/>
          {pageNumber} of {numPages}
          <Icon name='plus'onClick={() => plusPage()}/>
        </div>
      )
    }
  }

  const plusPage = () => {
    if (pageNumber <= numPages){
      setPageNumber(pageNumber + 1)
    }
  }

  const minusPage = () => {
    if (pageNumber !== 1){
      setPageNumber(pageNumber - 1)
    }
  }

  return (
    <div className='resume'>
      <SubText text={title}/>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading='Loading...'
      >
        <Page 
          pageNumber={pageNumber} 
          width='500'
          scale={scale}
        />
      </Document>
      <Icon 
        name='search minus' 
        onClick={() => setScale(scale - 0.1)}
      />
      <Icon 
        name='magnify' 
        onClick={() => setScale(scale + 0.1)}
      />
      {displayPages()}
    </div>
  );
}

export default Resume

