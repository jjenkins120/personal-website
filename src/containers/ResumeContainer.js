import React from 'react'
import { Icon } from 'semantic-ui-react'
import Resume from '../components/Resume'
import SectionTitle from '../components/SectionTitle'
import TechResume from '../tech-resume.pdf' 
import CompResume from '../comp-resume.pdf' 

const ResumeContainer = () => {
  return (
    <div>
        <SectionTitle text='Resumes'/>
        <Resume
            file={TechResume}
            title='Technical Resume'
        />
        <Resume
            file={CompResume}
            title='Comprehensive Resume'
        />
    </div>
  )
}

export default ResumeContainer