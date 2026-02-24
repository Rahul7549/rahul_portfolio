// import React from "react";

// const ProjectContent = ({ project }) => {
//   return (
//     <div className="project-content">
//       <h2>{project.title}</h2>

//       <p>{project.description}</p>

//       <div className="project-actions">
//         {project.live && (
//           <a href={project.live} target="_blank" rel="noreferrer" className="btn">
//             Live Demo
//           </a>
//         )}

//         {project.github && (
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="btn btn-light"
//           >
//             GitHub
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectContent;

import React from "react";

const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      <h2 className="project-title">{project.title}</h2>

      {/* TECH BADGES */}
      <div className="project-tech-badges">
        {project.tech?.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* PERIOD */}
      <div className="project-period">{project.period}</div>

      <p className="project-description">{project.description}</p>

      <div className="project-actions">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn">
            Live Demo
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-light">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;