import React, { useId, useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import ProjectContent from "./ProjectContent";
import "./project-row.css";
import { newProjectCardData } from "../../assets/ProjectData";

const PortfolioRow = () => {
  // const isReverse = index % 2 !== 0 ||0;
  // const [index,setIindex]=useState(0);
  const useCarouselKey = useId();
  const useDescKey = useId();


  // return (
  //   newProjectCardData.map((project, ind) => {
  //     const isReverse = ind % 2 !== 0 || 0;

  //     return (

  //       <div>

  //         {
  //           isReverse && <section className="project-row-wrapper" >
  //             <div className={`project-row`}>
  //               <ProjectCarousel images={project.images} key={useCarouselKey +'pro'+ ind} />
  //               <ProjectContent project={project} key={useDescKey+'con' + ind} />
  //             </div>
  //           </section>
  //         }

  //         {
  //           !isReverse && <section className="project-row-wrapper">
  //             <div className={`project-row`}>

  //               <ProjectContent project={project} key={useDescKey +'rev-pro'+ ind} />
  //               <ProjectCarousel images={project.images} key={useCarouselKey + 'rev-conk'+ind} />
  //             </div>
  //           </section>
  //         }
  //       </div>

  //     )
  //   })



  // );

  return newProjectCardData.map((project, ind) => {
    const isReverse = ind % 2 !== 0;

    return (
      <section className="project-row-wrapper" key={project.id ?? ind}>
        <div  className={!isReverse ? 'project-row reverse':'project-row'}>
          <>
              <ProjectCarousel images={project.images} />
              <ProjectContent project={project} />
            </>
          {/* {isReverse ? (
            <>
              <ProjectCarousel images={project.images} />
              <ProjectContent project={project} />
            </>
          ) : (
            <>
              <ProjectContent project={project} />
              <ProjectCarousel images={project.images} />
            </>
          )} */}
        </div>
      </section>
    );
  });
};

export default PortfolioRow;