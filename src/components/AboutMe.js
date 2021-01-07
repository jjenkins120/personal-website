import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import face from '../face.jpg'

const AboutMe = () => {
  return (
    <div>
      <h1 className='name'>About Me</h1>
      <Image 
        circular
        size='medium'
        src={face} 
      />
    </div>
  )
}

export default AboutMe