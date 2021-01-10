import React from 'react'
import Resume from '../components/Resume'
import SectionTitle from '../components/SectionTitle'
import TechResume from '../tech-resume.pdf' 
import CompResume from '../comp-resume.pdf' 

const ResumeContainer = () => {
  return (
    <div>
        <div className='section-title'>
            <SectionTitle text='Resumes'/>
        </div>
        <div className='resume-grid'>
        <Resume
            file={TechResume}
            title='Technical Resume'
        />
        <Resume
            file={CompResume}
            title='Complete Resume'
        />
        </div>
    </div>
  )
}

export default ResumeContainer