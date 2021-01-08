import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import face from '../face.jpg'
import SectionTitle from '../components/SectionTitle'
import SubText from '../components/SubText'

const AboutMeContainer = () => {

  const description = 'My name is Jeff Jenkins and I am an aspiring software engineer with a background in international development, higher education, and international education.'

  return (
    <div>
      <SectionTitle text='About Me'/>
      <SubText text={description}/>
      <Image 
        circular
        size='medium'
        src={face} 
      />
    </div>
  )
}

export default AboutMeContainer