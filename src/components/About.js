import React from "react";
import './About.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import aboutimg from '../assets/image/about.svg'
import Aayushi from '../assets/image/Aayushi.jpg'
function About(){
    return(
        <>
        <Navbar/>
        
        <span className="backbutton butonpostion-40">
            <Link to="/">Back to home</Link>
            </span>
        <div className="maincontainer">
            <div className="Aboutcontainer">
            <label className='frontend'>About <span className='developer'>Me</span></label>
            <span className="aayupra">
                {/* <img scr={Aayushi}></img> */}
                <img  class="aayuimg"src={Aayushi}/>
                <p className="praabout">Frontend Developer with 1.5 years of experience in <b>React.js, React Native, JavaScript, Bootstrap, Typescript, HTML and CSS</b>. Proficient in version control tools such as <b>Github</b> and <b>Gitbash</b>for efficient code management and collaboration. Currently employed at <b>Publicis Sapient</b>, delivering innovative solutions to clients in a fast-paced environment</p>
            </span>
            
            <div className="experiencewhatskill">
                <div className="experience1">
                <h2>Experience</h2>
                <h3>Publicis Sapient</h3>
                <p>1 yr 4 mos</p>
                <h3>Associate Developer</h3>
                <span>
                    <p>Full-time</p>
                    <p>jan 2022 -Present .16 mos <br></br>Gurugram, Haryana, India</p>
                    <p>*Frontend Developer with 1.5 years of experience in React.js, React Native, JavaScript, Bootstrap, Typescript, HTML and CSS<br></br></p>

                </span>
                <h3>Frontend Developer</h3>
                <p>Internship <br></br> Jan 2022 - Jul 2022 .7 mos <br></br>Gurgaon</p>
                <h3>Skills :</h3><p>Front-End Development . Media Queries Responsive Web Design</p>
                
                </div>
                <div className="whatskill">
                <h2>What Skill Have</h2>
                <span className="skildisplay">
                <div className="skilld"> React Js</div>
                <div className="skilld"> React Native</div>
                <div className="skilld"> JavaScript</div>
                </span>
                <span className="skildisplay">
                <div className="skilld"> HTML</div>
                <div className="skilld">Bootstrap</div>
                <div className="skilld">CSS</div>
                </span>
                <span className="skildisplay">
                <div className="skilld"> Media Query</div>
                <div className="skilld">GIT</div>
                <div className="skilld">JIRA</div>
                </span>
                <span className="skildisplay1">
                <div className="skilld "> HTML</div>
                <div className="skilld mr-27">Bootstrap</div>
                
                </span>
                <span className="skildisplay1">
                <div className="skilld ">Hooks</div>
                <div className="skilld mr-27">npm</div>
                
                </span>
                <span className="skildisplay1">
                <div className="skilld ">Github</div>
                <div className="skilld mr-27">Gitbash</div>
                </span>
                <span className="skildisplay1">
                <div className="skilld ">Ui/Ux</div>
                </span>
                <span className="skildisplay1">
                <div className="skilld ">Redux</div>
                </span>
                
               
                </div>
                <div className="abouti">
               <img src={aboutimg}></img>
                </div>

            </div>
            </div>
           
        </div>
        </>
    );
}
export default About;