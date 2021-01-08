import React from 'react' 
import Project from '../components/Project'
import SectionTitle from '../components/SectionTitle'

const ProjectsContainer = () => {
  return (
    <div>
      <div className='section-title'>
        <SectionTitle text='Projects'/>
      </div>
      <div className='project-grid'>
        <Project 
          title='Muse'
          videoUrl={'https://youtu.be/stl8TwQoS98'}
          frontGitHubUrl={'https://github.com/jjenkins120/muse-frontend'}
          backGitHubUrl={'https://github.com/jjenkins120/muse-backend'}
        />
        <Project 
          title='Veggie Delight'
          videoUrl={'https://youtu.be/5cQxizZCYBs'}
          gitHubUrl={'https://github.com/joannabpark/veggie-delight'}
        />
        <Project 
          title='To-Do'
          videoUrl={'https://youtu.be/J8zXyZMGXNs'}
          frontGitHubUrl={'https://github.com/jjenkins120/to-do-frontend'}
          backGitHubUrl={'https://github.com/jjenkins120/to-do-backend'}
        />
        <Project 
          title='KJ Cafe'
          videoUrl={'https://youtu.be/uclJCRjCvR8'}
          gitHubUrl={'https://github.com/jjenkins120/mod1-project-coffeeapp'}
        />
      </div>
    </div>
  )
}

export default ProjectsContainer