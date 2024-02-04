import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = () => {
  const UserSkills = [
    "System Analysis and Troubleshooting",
    "Collaborative Teamwork",
    "Regulatory Compliance",
    "Documentation and Reporting",
  ];
  return (
    <div className="container-excard">
      <div className="topper">
        <h2 > Sri Lankan Habour</h2>
        <p>
          I actively participated in the planning and execution of electrical
          engineering projects critical to the efficient functioning of the
          harbor. My involvement ranged from the installation of electrical
          systems to troubleshooting and maintenance. A significant part of my
          responsibilities included conducting thorough analyses of electrical
          systems and equipment. I gained valuable experience in identifying and
          resolving issues promptly, ensuring minimal downtime and optimal
          performance.
        </p>
       
      </div>
      <div className="footer">
        {UserSkills.map((skill, index) => (
          <h4 key={index} className="skills">
            {" "}
            {skill}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
