import React, { useState } from "react";
import { BiSolidContact} from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function NavBar(){

  return(
    <div className="navbar">
      <div className="profile-container" >
          <img src="img\headshot photo.png" className="profile-image"></img>
          <h1>Babacar</h1>
          {/* <h2>Babadias0215@gmail.com</h2> */}
      </div>
        <div className='nav-links'>
        <a href="/moreInfo"><CgProfile size="30" color="white"/>About Me</a>
        <a href="/moreInfo"><FaFolderOpen size="30" color="white" />Projects</a>
        <a href="/moreInfo"><BiSolidContact size="30" color="white" />Contact</a>
        
      </div>
    </div>
  );
 
}
