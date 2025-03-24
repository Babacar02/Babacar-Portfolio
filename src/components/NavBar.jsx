import { BiSolidContact } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaArrowCircleRight } from "react-icons/fa";
import {useState} from 'react';

export default function NavBar() {
  const [sidebarIsClose, sidebarSetClose] = useState(false);

  return (
  
    
    <div className={`sidebar ${sidebarIsClose ? "close" : "default"}`} >
    <FaArrowCircleRight className="sidebar-arrow" onClick={() => sidebarSetClose(!sidebarIsClose)}></FaArrowCircleRight>
  
      <div className="profile-container" >
        <img src="public/img/headshot_photo.png" className="profile-image"></img>
        <h1 style={{ display: sidebarIsClose ? "none" : "block" }}>Babacar</h1>
      </div>
      <div className='nav-links'>
        <a href="/moreInfo#about"><CgProfile size="30" color="white" /> <span style={{ display: sidebarIsClose ? "none" : "inline" }}> About Me</span></a>
        <a href="/moreInfo#experience"><FaFolderOpen size="30" color="white" />            <span style={{ display: sidebarIsClose ? "none" : "inline" }}> Experience</span></a>
        <a href="/moreInfo#contact"><BiSolidContact size="30" color="white" /><span style={{ display: sidebarIsClose ? "none" : "inline" }}> Contact</span>
          </a>

      </div>
      </div>
 
  );

}
