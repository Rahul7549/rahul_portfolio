import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import BackGroundImg from '../components/background-image/BackGroundImg'
import ProjectCard from '../components/project-card/ProjectCard'
export default function Project() {
  return (
    
     <div>
        <Navbar/>
        <BackGroundImg heading="PROJECTS." 
        text="some of project my most recent works"/>
        <ProjectCard/>
        <Footer/>
     </div>
    
  )
}