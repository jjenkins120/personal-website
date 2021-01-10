import React from 'react' 
import ReactPlayer from 'react-player'
import ProjectTitle from '../components/ProjectTitle'

const Project = ({ videoUrl, title, gitHubUrl }) => {

  return (
    <div className='project'>
      <ReactPlayer url={videoUrl} controls={true} width={'100%'} height={'45vw'} style={{ marginBottom: '5px', boxShadow: '0 30px 40px 0 rgba(16, 36, 94, 0.25)', border: 'solid 3px', borderRadius: '10px' }}/>
      <ProjectTitle text={title} linkUrl={gitHubUrl}/> 
    </div>
  )
}

export default Project