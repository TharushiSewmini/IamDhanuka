import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import "./Experience.css";
import habour from "../assets/habour.jpg";
const Experience = () => {
  return (
    <div
      className="container-ex"
      style={{display: 'flex' , height : '90vh' , width : '100vw'}}
    >
      <div className="img-ex" >
        <img
          src={habour}
          alt="habour"
          
          className="img-habour"
          // style={{ objectFit: "cover" }}
        />
      </div>
      <div className="content-ex" >
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
