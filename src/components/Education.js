import React from "react";
import './Education.css'
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import  education from '../assets/image/Education.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons';
function Education(){
    return(
        <>
        <Navbar/>
        <span className="backbutton butonpostion-40">
            <Link to="/">Back to home</Link>
            </span>
        <div className="maincontainer1">
        <h1 className="educationhead"><FontAwesomeIcon icon={faMedal}/> Education</h1>
            <div  class="educationContainer">
                
                <div class="classsection">
                <span className="medal">
                       <FontAwesomeIcon icon={faMedal} className="famedal"/>
                    <span>
                        <h2 className="font-35">2022</h2>
                        <p className="font-25">Master Computer Application</p>
                    </span>
                </span>
                <span className="medal1">
                       <FontAwesomeIcon icon={faMedal} className="famedal1"/>
                    <span>
                        <h2 className="font-35">2020</h2>
                        <p className="font-25"> Bachelor Computer Application</p>
                    </span>
                </span>
                <span className="medal2">
                       <FontAwesomeIcon icon={faMedal} className="famedal"/>
                    <span>
                        <h2 className="font-35">2017</h2>
                        <p className="font-25">Higher Secondary Certificate</p>
                    </span>
                </span>
                <span className="medal1">
                       <FontAwesomeIcon icon={faMedal} className="famedal1"/>
                    <span>
                        <h2 className="font-35">2015</h2>
                        <p className="font-25"> Secondary  School Certificate</p>
                    </span>
                </span>
                    
                </div>

            
            <img src={education} className="eduimg"/>
            </div>
     
        </div>
        </>
    );
}
export default Education;