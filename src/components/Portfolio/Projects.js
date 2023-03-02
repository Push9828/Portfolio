import React from "react";
import { projectData } from "../../data";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <Project projectInfo={project} />
      ))}
    </div>
  );
};

export default Projects;
