import React from 'react'


const ProjectTitle = ({ text, linkUrl }) => {
    return <a href={linkUrl}><h1 className='project-title'>{text}</h1></a>
}

export default ProjectTitle