import React from 'react'
import {Link ,NavLink} from 'react-router-dom'
import baner from '../assets/image/resume.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faFileArrowUp,faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import './AllMeetups.css'


export default function AllMeetups() {
  return (
    
    <div className='banerimage' >
     
     
    <div className='banerimg'>
   <img src={baner} className="baner"></img>
   </div>
   <div className='aboutexplain'>
     <h1 className='aboutheading'>About</h1>
 
     <ul className='abtul'>
        <li>Frontend Developer with 1.5 years of experience in <b>React.js, React Native, JavaScript, Bootstrap, Typescript, HTML and CSS</b></li>
         <li>Proficient in version control tools such as <b>Github</b> and <b>Gitbash</b>for efficient code management and collaboration</li>
         <li>Experienced in using project management tools like Jira to track progress and ensure <b>timely delivery</b></li>
         <li>Skilled in using IDEs like <b>VS Studio </b>to develop high-quality, scalable and maintainable code</li>
         <li>Currently employed at <b>Publicis Sapient</b>, delivering innovative solutions to clients in a fast-paced environment</li>
         <li>Seeking a new role to leverage skills and experience and advance career</li>
     </ul>

    <div className='herresume'>
        
        <div  className='hereme'>
        <Link to="/about">HERE ME  <FontAwesomeIcon icon={faFileArrowUp}/></Link>
        </div>
       <div className='Resumedown'>
       <Link to ="/resume">Resume  <FontAwesomeIcon icon={faEnvelope}/></Link>
       </div>
       
    </div>
    <div className='reactbutton'>
      <button>React.Js <i class="fa-brands fa-reacteurope"></i></button>
      <button>React Native</button>
      <button>JavaScript</button>
     
      <button class="mt-bt">CSS</button>
      <button>GIT</button>

    </div>

   </div>
</div>

  )
}