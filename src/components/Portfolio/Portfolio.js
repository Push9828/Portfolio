import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div id="projects" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-56 before:hidden before:lg:block">
            Projects
          </h2>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
