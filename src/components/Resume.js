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
            size='large' 
            onClick={minusScale}
            style={{marginRight: '20px'}}
          />
          <Icon 
            name='minus'
            size='large'  
            onClick={minusPage}
            style={{marginRight: '20px'}}
          />
          {pageNumber}&nbsp; of &nbsp;{numPages} 
          <Icon 
            name='plus'
            size='large' 
            onClick={plusPage}
            style={{marginRight: '20px', marginLeft: '20px'}}
          />
          <Icon 
            name='magnify'
            size='large'  
            onClick={plusScale}
          />
          <a
            href={file}
            download
          >
            <Icon 
              name='download'
              size='large'
              color='black'
              style={{ marginLeft: '30px'}}
            />
          </a>
        </div>
      )
    } else {
      return (
        <div className='resume-controls'>  
          <Icon 
            name='search minus'
            size='large'  
            onClick={minusScale}
            style={{marginRight: '100px'}}
          />
          <Icon 
            name='magnify'
            size='large'  
            onClick={plusScale}
          />
          <a
            href={file}
            download
          >
            <Icon 
              name='download'
              size='large'
              color='black'
              style={{ marginLeft: '90px'}}
            />
          </a>
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
      {/* <embed src={file} width="500" height="700px" className='resume'/> */}
    </div>
  );
}

export default Resume

