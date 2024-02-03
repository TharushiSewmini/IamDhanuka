import React from "react";
import img from "../assets/dhanuka.avif";
import "../pages/Home.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion, px } from "framer-motion";
const Home = () => {
  return (
    <div className="container">
      {/* <div className="image-container">
        <motion.img
          src={img}
          alt="dhanuka"
          className="img-pic"
          whileHover={{
            scale: 1.1,
            rotateX: 10,
            rotateY: 10,
            translatZ: -5,
            boxShadow: "0 0 30px rgba(0 , 0 , 0 , 0.4)",
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        />
      
      </div> */}

      <div className="details">
        <h2 className="name">Hi, I’m Dhanuka Ranasinghe</h2>
        <h2 className="thinker"> I am an Innovative Electrical engineer </h2>
        <KeyboardDoubleArrowDownIcon style={{ height: 60, width: 60 }} />
      </div>
    </div>
  );
};

export default Home;
