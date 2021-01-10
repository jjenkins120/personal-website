import React from 'react' 
import AboutMeContainer from './containers/AboutMeContainer'
import HeaderContainer from './containers/HeaderContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import styled from 'styled-components'
import nzImage from './nz-image.jpg'

const App = () => {
  return (
        <ContainerStyle>
          <HeaderStyle>
            <HeaderContainer/>
          </HeaderStyle>  
          <AboutMeStyle>
            <AboutMeContainer/>
          </AboutMeStyle>
          <ProjectsStyle>  
            <ProjectsContainer/>
          </ProjectsStyle>
          <ResumeStyle>
            <ResumeContainer/>
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
  background-image: url(${nzImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: static;
`
const AboutMeStyle = styled.div`
  flex: 1 1 150px;
  background-color: #FAB78E;
`
const ProjectsStyle = styled.div`
  flex: 1 1 150px;
  background-color: #36454f;
`
  const ResumeStyle = styled.div`
  flex: 1 1 150px; 
  background-color: #FFDD3C;  
`
export default App