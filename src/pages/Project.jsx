import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Project.css";

const Project = () => {

  const newlist = Array(2).fill().map((_, index) => (
    <ProjectCard key={index + 1} />
  ));

  return (
    <div className="container-project">
      {newlist}
    </div>
  );
};

export default Project;
