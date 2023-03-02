import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = ({ projectInfo }) => {
  const { id, img, title, description, repoLink, techStack, demoLink } =
    projectInfo;

  return (
    <div
      className={`flex items-center lg:space-x-32 flex-col lg:flex-row justify-center mt-12 ${
        id % 2 === 0 ? "lg:flex-row-reverse lg:space-x-0" : ""
      }`}
    >
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        className="object-cover mb-4 mr-5 max-h-64 w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
        src={img}
        alt="project img"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`mx-auto max-w-md flex flex-col text-center ${
          id % 2 === 0 ? "lg:!mr-40" : ""
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4 lg:text-left">{title}</h2>
        <p className="text-lg mb-4 mr-4 lg:text-left">{description}</p>
        {repoLink && (
          <div className="text-center lg:text-left mb-4">
            <a
              className="text-lg font-medium w-36 lg:w-32 lg:text-base"
              href={repoLink}
              rel="noreferrer"
              target="_blank"
            >
              🔗 GitHub Repo
            </a>
          </div>
        )}
        <div className="grid grid-cols-2 mb-4">
          {techStack.map((techItem) => (
            <div key={techItem} className="flex">
              <span className="mr-4 mt-1 text-accent">
                <BsFillCheckCircleFill />
              </span>
              <div className="mb-4">{techItem}</div>
            </div>
          ))}
        </div>
        <a className="mb-4" href={demoLink} rel="noreferrer" target="_blank">
          <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
            Demo
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Project;
