import React from 'react' 
import ReactPlayer from 'react-player'
import ProjectTitle from '../components/ProjectTitle'

const Project = ({ videoUrl, title, gitHubUrl }) => {

  
  return (
    <div className='project'>
      <ReactPlayer url={videoUrl} controls={true} width={'100%'} height={'45vw'} style={playerStyle}/>
      <ProjectTitle text={title} linkUrl={gitHubUrl}/> 
    </div>
  )
}

const playerStyle = { 
  marginBottom: '5px', 
  boxShadow: '0 30px 40px 0 rgba(16, 36, 94, 0.30)', 
  border: 'solid 5px white', 
  borderRadius: '5px' 
}

export default Project