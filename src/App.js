import React from 'react' 
import Contact from './components/Contact'
import Bio from './components/Bio'
import ProjectsContainer from './containers/ProjectsContainer'
import Resume from './components/Resume'
import styled from 'styled-components'


const App = () => {
  return (
        <ContainerStyle>
          <ContactStyle>
            <Contact/>
          </ContactStyle>
          <BioStyle>
            <Bio/>
          </BioStyle>  
          <ProjectsStyle>  
            <ProjectsContainer/>
          </ProjectsStyle>
          <ResumeStyle>
            <Resume/>
          </ResumeStyle>
        </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  flex-direction: column;
  height: 1500px;
`


const ContactStyle = styled.div`
  text-align: center;
  background-color: lime;
  height: 375px;
`

const BioStyle = styled.div`
  text-align: center;
  background-color: white;
  height: 375px;
`

const ProjectsStyle = styled.div`
  text-align: center;
  background-color: purple;
  height: 375px;
`

const ResumeStyle = styled.div`
  text-align: center;
  background-color: yellow;
  height: 375px;
`

export default App