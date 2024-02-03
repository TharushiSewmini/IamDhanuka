import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import './App.css'
import About from "./pages/About";
function App() {
  return (
   <div className="app">
     <Router >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/about"  Component={About}></Route>
          <Route path="/experience" Component={Experience}></Route>
          <Route path="/project" Component={Project}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </div>
    </Router>

   
   </div>
  );
}

export default App;
