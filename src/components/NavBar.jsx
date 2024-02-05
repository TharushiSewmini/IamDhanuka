import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Update the import path for your stylesheet

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <Link to="/" className="tags" smooth={true} duration={500}>
          Home |
        </Link>
        <Link to="/about" className="tags" smooth={true} duration={500}>
          About |
        </Link>
        <Link to="/experience" className="tags" smooth={true} duration={500}>
          Experience |
        </Link>
        <Link to="/project" className="tags" smooth={true} duration={500}>
          Project |
        </Link>
        <Link to="/contact" className="tags" smooth={true} duration={500}>
          Contact 
        </Link>
      </nav>
      <div className="buttons">
        <button className="btn">Resume</button>
        <button className="btn">Hire Me</button>
      </div>
    </div>
  );
};

export default NavBar;
