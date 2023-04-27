import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Project.css'
import project from '../assets/image/project.svg'
function Project(){
    return(
        <>
       
        <Navbar/>
        <span className="backbutton butonpostion-40">
            <Link to="/">Back to home</Link>
            </span>
        <div className="maincontainer">
          <div className="project333">
            <div className="prodis">
                <h2 className="projhead2">1:- Project - Redeginton -Project 96</h2>
                <ul className="projectlist">
                    <li>
                    Learned Spryker and developed the Back office (Admin Portal) using React .JS , CSS and Media Query
                    </li>
                    <li>fixed bugs and issues in the backend UI to ensure smooth operation of the applications</li>
                    <li>fixed bugs and issues in the backend UI to ensure smooth operation of the applications</li>
                    <li>Used React Router to turn application into Single Page Application</li>
                    <li>Worked with team developer for frontend and issue</li>
                    <li>Worked on React . JS Hooks ,rendering using components which contains additional components called custom
HTML ,React .JS ,tags</li>
                </ul>
                <h2 className="projhead2">2:-Project - E-Commerce Groceries Website </h2>
                <ul className="projectlist">
                    <li>Developed a pages for E-Commerce website using React .js CSS and JavaScript and ensured mobile functionality</li>
                    <li>Optimized UI of web applications and websites to benefit end users</li>
                    

                </ul>
                <h2 className="projhead2">Frontend Developer Intern Jan 2022 – july 2022</h2>
                <ul className="projectlist">
                    <li>LearnedHTML, CSS and JavaScript, Media Query,Bootstrap ,React JS ,GIT</li>
                    <li>Design, develop and code user interfaces for E-commerce websites usingReact JS</li>
                    <li>Implemented a responsive designs feature to improve website functionality across browsers and mobile devices.</li>
                </ul>
            </div>
           <img src={project} className="proimg"/>
          </div>
        </div>
        </>
    );
}
export default Project;