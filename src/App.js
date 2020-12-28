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
    <Grid divided='vertically'>
      <Grid.Row>
        <Contact/>
      </Grid.Row>
      <Grid.Row>
        <Image src={image} rounded style={styles.image}/>
        <Bio/>
      </Grid.Row>
      <Grid.Row>
        <ProjectsContainer/>
      </Grid.Row>
      <Grid.Row>
        <Resume/>
      </Grid.Row>
    </Grid> 
  )
}

const styles = {
  grid:{

  },
  contactRow: {

  },
  image: { 

  },
  bioRow: {
    display: 'flex'
  },
  projectsRow: {

  }, 
  resumeRow: {

  }
}



// const App = () => {
//   return (
//         <ContainerStyle>
//           <ContactStyle>
//             <Contact/>
//           </ContactStyle>
//           <BioStyle>
//             <Bio/>
//           </BioStyle>  
//           <ProjectsStyle>  
//             <ProjectsContainer/>
//           </ProjectsStyle>
//           <ResumeStyle>
//             <Resume/>
//           </ResumeStyle>
//         </ContainerStyle>
//   )
// }

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
//   background-image: url("${Image}");
//   background-size: 800px; 
//   text-align: center;
//   height: 500px;
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