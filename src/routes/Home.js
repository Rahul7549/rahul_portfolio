import React, { useEffect } from 'react'
import HomeBackGroundImage from '../../src/components/background-image/HomeBackGroundImage'
import Footer from '../../src/components/footer/Footer'
// import ProjectCard from '../components/project-card/ProjectCard'
import PortfolioRow from '../components/project/PortfolioRow';
export default function Home() {
  document.title = 'Home';
  // useEffect

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }, []);
  return (
    <>
      <HomeBackGroundImage />
      {/* <ProjectCard /> */}
      <PortfolioRow />
      <Footer />
    </>
  )
}
