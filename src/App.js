import React from 'react' 
import Contact from './components/Contact'
import Bio from './components/Bio'
import ProjectsContainer from './containers/ProjectsContainer'
import Resume from './components/Resume'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import image from './image.jpg'

const App = () => {
  return (
        <ContainerStyle>
          <BioStyle>
            <Bio/>
          </BioStyle>  
          <ContactStyle>
            <Contact/>
          </ContactStyle>
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
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: solid;
`

const ContactStyle = styled.div`
  flex: 1 1 150px; 
  border: solid;
`

const BioStyle = styled.div`
  width: 100%;
  height: 100vh; 
  border: solid;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
`

const ProjectsStyle = styled.div`
  flex: 1 1 150px; 
  border: solid;
`

const ResumeStyle = styled.div`
  flex: 1 1 150px; 
  border: solid;
`
// const ContainerStyle = styled.div`
//   flex-direction: column;
//   height: 1500px;
// `

// const ContactStyle = styled.div`
//   text-align: center;
//   background-color: lime;
//   height: 375px;
// `

// const BioStyle = styled.div`
//   background-image: url("${image}");
//   background-size: cover; 
//   text-align: center;
//   height: 1000px;
// `

// const ProjectsStyle = styled.div`
//   text-align: center;
//   background-color: purple;
//   height: 375px;
// `

// const ResumeStyle = styled.div`
//   text-align: center;
//   background-color: yellow;
//   height: 375px;
// `

export default App