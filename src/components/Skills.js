import React from "react";
import { Link } from "react-router-dom";
import './Skills.css'
import Navbar from "./Navbar";
import skill from '../assets/image/skills.svg'
import Aayushi from '../assets/image/Aayushi.jpg'
function Skills(){
    return(
        <>
        <Navbar/>
        <div className="maincontainer1">
           

            <span className="backbutton butonpostion-40">
            <Link to="/">Back to home</Link>
            </span>
            <div className="skillcontainer">
                <div className="skiimg">
              
                <img  class="skillop" src={skill}/>
                <h2 className="testshadow">Skills & Experience</h2>

                <p className="skillpraa">Main area of my expertise is Frontend  Development Client side of the web .<br></br> HTML ,CSS ,REACT .JS , JAVASCRIPT , building small and medium web apps with React .Js</p>
                </div>
           
            </div>
        </div>
        </>
    );
}
export default Skills;