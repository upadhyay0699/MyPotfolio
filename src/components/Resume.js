import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faEnvelopeCircleCheck,faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Resume(){
    return(
        <>
        <Navbar/>
        <span className="backbutton butonpostion-200">
                <Link to="/">Back to home</Link>
            </span>
        <div className="Resumebox">
            <div className="resumeformate">
                <div className="resumdisplay">
                    <span>
                    <h1>Aayushi</h1>
                    <Link to="https://www.linkedin.com/in/aayushi0699/">linkedin.com/in/aayushi0699</Link>
                    </span>
                    <span className="resumelink">
                    <p> <FontAwesomeIcon icon={faLocationDot}/>Location: Delhi, Delhi, India</p>
                    <p>Email: <Link to="aayushiupadhyay0699@gmail.com"> aayushiupadhyay0699@gmail.com</Link> | <FontAwesomeIcon icon={faPhoneVolume}/>:9818157917</p>
                    </span>
                </div>
                <h2 className="associate">ASSOCIATE DEVELOPER</h2>
                <div className="seprater"></div>
                 <span>
                    <h3 className="frontend1">Frontend Developer</h3>
                     <ul className="Frontedbuilt">
                        <li>Frontend Developer with 1.5 years of experience in <b>React.js, React Native, JavaScript, Bootstrap, Typescript, HTML </b>and <b>CSS</b></li>
                        <li>Proficient in version control tools such as <b>Github and Gitbash </b>for efficient code management and collaboration</li>
                        <li>Experienced in using project management tools like <b>Jira</b> to track progress and ensure timely delivery</li>
                        <li>Skilled in using IDEs like <b>VS Studio to develop high-quality</b> , scalable and maintainable code</li>
                        <li>Currently employed at<b>Publicis Sapient</b> , delivering innovative solutions to clients in a fast-paced environment</li>
                        <li>Seeking a new role to leverage skills and experience and advance career</li>
                     </ul>
                 </span>
                 <div className="seprater"></div>
                 <span>
                 <h3 className="frontend1">TECHINICAL SKILLS</h3>
                 <ul className="Frontedbuilt">
                    <li>Proficient in <b>React.js, React Native, Javascript, Bootstrap,</b> and <b>Typescript</b></li>
                    <li>Experience in <b>frontend development</b> for web and <b>mobile applications</b> </li>
                    <li>Knowledge of <b>RESTful APIs( GraphQL) </b> and backend integration</li>
                    <li>Familiarity with <b>version control systems </b>such as<b> Git</b></li>
                    <li>Strong problem-solving and analytical skills</li>
                    
                    <li><b>Visual Studio Code, GIT, Git Bash,Github,Jira </b></li>

                 </ul>


                 </span>
                 <div className="seprater"></div>
                 <span>
                 <h3 className="frontend1">EXPERIENCE</h3>
                 <div className="resumdisplay1">
                    <span>
                    <h3>Frontend Developer</h3>
                    <p>Publicis Sapient</p>
                    </span>
                    <span className="resumelink1">
                    <p>Aug2022 - Present</p>
                    <p><FontAwesomeIcon icon={faLocationDot}/> Gurgaon , Haryana</p>
                    </span>
                </div>
                 <ul className="Frontedbuilt mt-20">
                    <li>Designed and developed dynamic and responsive websites using <b>HTML, CSS, JavaScript and React .JS</b></li>
                    <li>Worked with <b>REST APIs</b> to retrieve and display data from databases</li>
                    <li>Improved <b>website performance</b> and speed through optimization techniques</li>
                </ul>
                
                 </span>
                 <div className="seprater"></div>
                 <div className="download">
                 <Link to="https://drive.google.com/drive/folders/1t4SusrSK5cIgPO9gIuVNgmO1mKNU23yf" download="pdf">Download</Link>
                 </div>
             
                
            </div>
          
        </div>
        </>
    );
}
export default Resume;