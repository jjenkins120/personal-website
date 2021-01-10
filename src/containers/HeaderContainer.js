import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import SectionTitle from '../components/SectionTitle'

const HeaderContainer = () => {
  const [linkedColor, setLinkedColor] = useState('#ffffff')
  const [mediumColor, setMediumColor] = useState('#ffffff')
  const [gitColor, setGitColor] = useState('#ffffff')
  const [phoneColor, setPhoneColor] = useState('#ffffff')
  const [emailColor, setEmailColor] = useState('#ffffff')


  return (
    <div>
      <div className='header-container'>
        <SectionTitle text='Jeff Jenkins'/>
        <SocialIcon 
          url="https://www.linkedin.com/in/jeff-jenkins-a08b3b51/" 
          bgColor={linkedColor} 
          onMouseEnter={() => setLinkedColor('#CEE1F2')} 
          onMouseLeave={() => setLinkedColor('#FFFFFF')} 
          className='linkedin'
        />
        <SocialIcon 
          url="https://jjenkins120.medium.com/" 
          bgColor={mediumColor} 
          onMouseEnter={() => setMediumColor('#CEE1F2')}
          onMouseLeave={() => setMediumColor('#FFFFFF')}  
          className='medium'
        />
        <SocialIcon 
          url="https://github.com/jjenkins120" 
          bgColor={gitColor} 
          onMouseEnter={() => setGitColor('#CEE1F2')}
          onMouseLeave={() => setGitColor('#FFFFFF')}  
          className='github'
        />
        <h3 className='sub-text'>
          <a
            href='mailto:jjenkins120@gmail.com'
            style={{color: emailColor}} 
            onMouseEnter={() => setEmailColor('#CEE1F2')} 
            onMouseLeave={() => setEmailColor('#FFFFFF')}  
          >
            jjenkins120@gmail.com
          </a>
          <br/>
          <a 
            href='tel:305-968-1809' 
            style={{color: phoneColor}} 
            onMouseEnter={() => setPhoneColor('#CEE1F2')} 
            onMouseLeave={() => setPhoneColor('#FFFFFF')} 
          >
            305.968.1809
          </a>
        </h3>
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



export default HeaderContainer