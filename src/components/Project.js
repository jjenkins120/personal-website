import React, { useState } from 'react' 
import ReactPlayer from 'react-player'
import { SocialIcon } from 'react-social-icons' 
import SubText from './SubText'
import ProjectTitle from '../components/ProjectTitle'

const Project = ({ videoUrl, title, frontGitHubUrl, backGitHubUrl, gitHubUrl }) => {
  const [gitColor, setGitColor] = useState('#FFFFFF')
  const [frontGitColor, setFrontGitColor] = useState('#FFFFFF')
  const [backGitColor, setBackGitColor] = useState('#FFFFFF')

  const renderFrontBack = () => {
    if (gitHubUrl){
      return (
        <>
          <SocialIcon 
            url={gitHubUrl}
            bgColor={gitColor} 
            onMouseEnter={() => setGitColor('#CEE1F2')}
            onMouseLeave={() => setGitColor('#FFFFFF')}
            style={{ height: '5vw', width: '5vw', marginTop: '5%' }}
          />
        </>
      )
    } else {
      return (
        <>
          <h3>Frontend</h3>
          <SocialIcon 
              url={frontGitHubUrl}
              bgColor={frontGitColor} 
              onMouseEnter={() => setFrontGitColor('#CEE1F2')}
              onMouseLeave={() => setFrontGitColor('#FFFFFF')}
              style={{ height: '5vw', width: '5vw'}}
            />
          <h3>Backend</h3>
          <SocialIcon 
              url={backGitHubUrl}
              bgColor={backGitColor} 
              onMouseEnter={() => setBackGitColor('#CEE1F2')}
              onMouseLeave={() => setBackGitColor('#FFFFFF')}
              style={{ height: '5vw', width: '5vw'}}  
            />
        </>
      )
    }
  }

  return (
    <div className='project'>
      <ReactPlayer url={videoUrl} controls={true} width={'100%'} height={'45vw'} style={{ marginBottom: '5px' }}/>
      <ProjectTitle text={title}/> 
      {renderFrontBack()}
    </div>
  )
}

export default Project