import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Update the import path for your stylesheet

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <Link to="/" className="tags">
          Home
        </Link>
        <Link to="/about" className="tags">
          About
        </Link>
        <Link to="/experience" className="tags">
          Experience
        </Link>
        <Link to="/project" className="tags">
          Project
        </Link>
        <Link to="/contact" className="tags">
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
