import React, { useState } from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const Bio = () => {
  const [linkedColor, setLinkedColor] = useState('#ffffff')
  const [mediumColor, setMediumColor] = useState('#ffffff')
  const [gitColor, setGitColor] = useState('#ffffff')


  return (
    <div>
      <div className='container'>
        <h1 className='name'>Jeff Jenkins</h1>
        <SocialIcon 
          url="https://www.linkedin.com/in/jeff-jenkins-a08b3b51/" 
          bgColor={linkedColor} 
          onMouseEnter={() => setLinkedColor('#0000FF')} 
          onMouseLeave={() => setLinkedColor('#FFFFFF')} 
          className='linkedin'
        />
        <SocialIcon 
          url="https://jjenkins120.medium.com/" 
          bgColor={mediumColor} 
          onMouseEnter={() => setMediumColor('#0000FF')}
          onMouseLeave={() => setMediumColor('#FFFFFF')}  
          className='medium'
        />
        <SocialIcon 
          url="https://github.com/jjenkins120" 
          bgColor={gitColor} 
          onMouseEnter={() => setGitColor('#0000FF')}
          onMouseLeave={() => setGitColor('#FFFFFF')}  
          className='github'
        />
        <h3 className='sub-text'>jjenkins120@gmail.com<br/>305.968.1809</h3>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}



export default Bio