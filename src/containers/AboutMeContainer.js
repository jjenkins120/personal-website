import React from 'react'
import { Image } from 'semantic-ui-react'
import face from '../face.jpg'
import SectionTitle from '../components/SectionTitle'
import SubText from '../components/SubText'

const AboutMeContainer = () => {

  const description = "I am an aspiring software engineer passionate about building scalable, modular code for web and mobile applications. I have a background in international development, higher education, and international education. My long list of interests include, but aren't limited to, science, education, bourbon, basketball, politics, urban farming, and exercise."

  const skills =" Skills - React, React Native, Redux, Javascript, Rails, Ruby, Git, HTML, CSS, Semantic UI, Bootstrap"

  return (
    <div>
      <div className='section-title'>
      <SectionTitle 
        text='About Me'
        className='section-title'
        />
      </div>
      <Image 
        circular
        src={face}
        className='image'
      />
      <div className='description-container'>
        <SubText text={description} style={{float: 'right'}}/>
        <SubText text={skills}/>
      </div>
    </div>
  )
}

export default AboutMeContainer