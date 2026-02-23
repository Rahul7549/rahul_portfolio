import React from 'react'
import Footer from '../components/footer/Footer'
import BackGroundImg from '../components/background-image/BackGroundImg'
// import ProjectCard from '../components/project-card/ProjectCard'
import PortfolioRow from '../components/project/PortfolioRow'
export default function Project() {
  return (
    
     <div>
        <BackGroundImg heading="PROJECTS." 
        text="Some of my most recent projects include..."/>
        {/* <ProjectCard/> */}
        <PortfolioRow/>
        <Footer/>
     </div>
    
  )
}
