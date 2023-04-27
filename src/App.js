import React from "react";
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";
import AllMeetups from "./components/AllMeetups";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './App.css'



function App(){
  return (
    <div className="App">
      
    <Router>
    <Routes>
      
     
    <Route path="/" element={<><Navbar/> <AllMeetups/> </>} />
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/skills" element={<Skills/>}/>
   <Route path="/resume" element={<Resume/>}/>
   <Route path="/project" element={<Project/>}/>
   <Route path="/education" element={<Education/>}/>

   
  </Routes>
  </Router>
  </div>
  )
}
export default App;