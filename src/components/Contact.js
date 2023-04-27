import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";
import contact from '../assets/image/Contactus.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faEnvelopeCircleCheck,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";
import phn from '../assets/image/contact2.svg'




function Contact(){
    return(
 <>
        <Navbar/>
            <span className="backbutton butonpostion-40">
                <Link to="/">Back to home</Link>
            </span>
    <div className="maincontainer">
        
        <div className="combineimg">
              <img src={contact} className="contactimg"></img>
           <div className="infocontact">
            <div className="background-20">
              <span className="linkdinapp">
              <Link to="https://www.linkedin.com/in/aayushi0699/"><h1>linkedin.com/in/aayushi0699</h1></Link>
              </span>
               
            </div>
                    
            </div>
       </div>
       <div className="contactform">
       <div className="phoneinfo">
                         <h1>Aayushi</h1>
                    
                                <span className="icontesxt">
                                    <h2><FontAwesomeIcon icon={faPhoneVolume}/></h2>
                                    <h3>(+91) 9818157917</h3>
                                </span>
                                
                                <span className="icontesxt">
                                    <h2><FontAwesomeIcon icon={faEnvelopeCircleCheck}/></h2>
                                    <h3> aayushiupadhyay0699@gmail.com</h3>
                                </span>

                                <span className="icontesxt">
                                        <h2><FontAwesomeIcon icon={faLocationDot}/></h2>
                                        <h3>
                                        Delhi Shiv Vihar (110094)
                                        </h3>
                                </span>

                    </div>
       </div>
       <img src={phn} className="contact2"></img>
      
            
    </div>
 </>
    );
}
export default Contact;