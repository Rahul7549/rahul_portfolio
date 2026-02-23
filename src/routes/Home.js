import React from 'react'
import HomeBackGroundImage from '../../src/components/background-image/HomeBackGroundImage'
import Footer from '../../src/components/footer/Footer'
// import ProjectCard from '../components/project-card/ProjectCard'
import PortfolioRow from '../components/project/PortfolioRow';
export default function Home() {
  document.title='Home';
  return (
    <>
     <HomeBackGroundImage/>
     {/* <ProjectCard/> */}
     <PortfolioRow/>
     <Footer/>
    </>
  )
}
