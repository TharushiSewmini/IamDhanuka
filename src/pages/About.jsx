import React from "react";
import img from "../assets/dhanuka.avif";
import "./About.css";
import { motion, px } from "framer-motion";
const About = () => {
  return (
    <div className="container-about">
      <div className="title-about"> ABOUT</div>
      <div className="content-container">
        <div className="content-about">
          <div className="first" style={{}}>
            Hello, I'm Dhanuka Ranasinghe, and I'm thrilled to welcome you to my
            corner of the web...
          </div>
          <br />
          <div>
            I am an undergraduate electrical engineering student currently
            pursuing my degree through Open University Sri Lanka. My journey
            into the realm of engineering began at Kingswood College Kandy,
            where I developed a deep appreciation for science and technology.
          </div>
          <br />
          <div>
            I'm fascinated by the intricate world of electrical engineering,
            from the fundamentals of circuit analysis to the complexities of
            power systems. Each day, I immerse myself in the wonders of this
            field, driven by a relentless curiosity and a passion for
            innovation.
          </div>
          <br />
          <div>
            Beyond my academic pursuits, I pride myself on my talents and
            creativity. Whether I'm tinkering with circuits or brainstorming
            solutions to real-world problems, I approach each challenge with
            enthusiasm and determination.
          </div>
          <br />
          <div>
            Join me as I embark on this journey to explore the frontiers of
            electrical engineering and make a meaningful impact in the world
            around us. Together, let's illuminate the path to a brighter, more
            electrifying future.
          </div>
          <br />
        </div>
        <div className="img-container-about">
          <img
           className="img-about"
            src={img}
            alt="dhanuka"
           
          />
        </div>
      </div>
    </div>
  );
};

export default About;
