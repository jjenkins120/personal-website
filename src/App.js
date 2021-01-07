import React from 'react' 
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import ProjectsContainer from './containers/ProjectsContainer'
import Resume from './components/Resume'
import { Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import image from './image.jpg'

const App = () => {
  return (
        <ContainerStyle>
          <HeaderStyle>
            <Header/>
          </HeaderStyle>  
          <AboutMeStyle>
            <AboutMe/>
          </AboutMeStyle>
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
`
const HeaderStyle = styled.div`
  width: 100%;
  height: 100vh; 
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  position: static;
`
const AboutMeStyle = styled.div`
  flex: 1 1 150px;
  background-color: purple; 
`
const ProjectsStyle = styled.div`
  flex: 1 1 150px;
  background-color: green;  
`

const ResumeStyle = styled.div`
  flex: 1 1 150px;
  background-color: yellow;   
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