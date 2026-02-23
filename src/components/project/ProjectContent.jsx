import React from "react";

const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <div className="project-actions">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn">
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;