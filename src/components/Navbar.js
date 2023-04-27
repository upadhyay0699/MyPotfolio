import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser,faAddressCard,faPencil,faDiagramProject,faPhoneVolume,faBuildingColumns,faBars} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter,Route,Router,Link ,NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <div>
       <div className="navigation1">
        <input type="checkbox" id="check"/>
              <label for="check" className='checkbtn'>
                <FontAwesomeIcon icon={faBars}/>
              </label>
               <nav className="navigation">
                   <label className='frontend'>Frontend <span className='developer'>Developer</span></label>
                   <span className='navigate'>
                  
                    <NavLink to="/about" className="about">About <FontAwesomeIcon icon={faAddressCard}/></NavLink>
                   <NavLink to="/skills">Skills <FontAwesomeIcon icon={faPencil}/></NavLink>
                   <NavLink to="/project"className="project">Project <FontAwesomeIcon icon={faDiagramProject}/></NavLink>
                   <NavLink to="/education">Education <FontAwesomeIcon icon={faBuildingColumns}/></NavLink>
                   <NavLink to="/contact">Contact <FontAwesomeIcon icon={faPhoneVolume}/></NavLink>
                   </span>

               </nav>
        </div>
    </div>
  )
}

export default Navbar;