import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./App.css";
import About from "./pages/About";
import { Element } from "react-scroll";


function App() {
  return (
    <div className="app">
      <Router>
        <div>
        <div className="nav-bar-app">
        <NavBar/>
        </div>
          <div className="routing-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Element name="home">
                    <Home />
                  </Element>
                }
              />
              <Route
                path="/about"
                element={
                  <Element name="about">
                    <About />
                  </Element>
                }
              />
              <Route
                path="/experience"
                element={
                  <Element name="experience">
                    <Experience />
                  </Element>
                }
              />
              <Route
                path="/project"
                element={
                  <Element name="project">
                    <Project />
                  </Element>
                }
              />
              <Route
                path="/contact"
                element={
                  <Element name="contact">
                    <Contact />
                  </Element>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
