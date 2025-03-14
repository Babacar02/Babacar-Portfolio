import React, { useState } from "react";
import Hamburger from 'hamburger-react'



export default function NavBar(){
  const [isOpen,setOpen]= useState(false);
  
  //  const toggleMenu = () =>{setOpen(!isOpen);}

 

  return(
    <div className="navbar">
      <div className="left-text">Babacar</div>

      <div className="hamburger" onClick={() => setOpen(!isOpen)}>
      <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
    
        <div className='nav-links'>
        <a href="#home">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
    </div>
  );
 
}
