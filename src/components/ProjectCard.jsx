import React from "react";
import "./ProjectCard.css";
import habourimg from "../assets/habour.jpg";
const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card-topper">
        <img src={habourimg} className="habour-project-img" />
      </div>
      <div className="project-card-lower">
        <div className="project-topic">
        Saving electricity by using containers power
        </div>
        <div className="project-subtopic">
        the process in here i have discussed
        </div>
        <div className="project-card-button">
          <button className="project-btn"> View Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
