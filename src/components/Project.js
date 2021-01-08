import React, { useState } from 'react' 
import ReactPlayer from 'react-player'
import { SocialIcon } from 'react-social-icons' 
import SubText from './SubText'

const Project = ({ videoUrl, title, frontGitHubUrl, backGitHubUrl, gitHubUrl }) => {
  const [gitColor, setGitColor] = useState('#FFFFFF')

  const renderFrontBack = () => {
    if (gitHubUrl){
      return (
        <>
          <SocialIcon 
            url={gitHubUrl}
            bgColor={gitColor} 
            onMouseEnter={() => setGitColor('#CEE1F2')}
            onMouseLeave={() => setGitColor('#FFFFFF')}  
          />
        </>
      )
    } else {
      return (
        <>
          <h3>Frontend</h3>
          <SocialIcon 
              url={frontGitHubUrl}
              bgColor={gitColor} 
              onMouseEnter={() => setGitColor('#CEE1F2')}
              onMouseLeave={() => setGitColor('#FFFFFF')}  
            />
          <h3>Backend</h3>
          <SocialIcon 
              url={backGitHubUrl}
              bgColor={gitColor} 
              onMouseEnter={() => setGitColor('#CEE1F2')}
              onMouseLeave={() => setGitColor('#FFFFFF')}  
            />
        </>
      )
    }
  }

  return (
    <div>
      <ReactPlayer url={videoUrl} controls={true} width={'25vw'} height={'15vw'} style={{ marginBottom: '5px' }}/>
      <SubText text={title}/>
      {renderFrontBack()}
    </div>
  )
}

export default Project