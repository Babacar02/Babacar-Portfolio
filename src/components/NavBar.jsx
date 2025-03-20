import { BiSolidContact} from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function NavBar(){

  return(
    <div className="navbar">
      <div className="profile-container" >
          <img src="img\headshot photo.png" className="profile-image"></img>
          <h1>Babacar</h1>
      </div>
        <div className='nav-links'>
        <a href="/moreInfo#about"><CgProfile size="30" color="white"/>About Me</a>
        <a href="/moreInfo#experience"><FaFolderOpen size="30" color="white" />Experience</a>
        <a href="/moreInfo"><BiSolidContact size="30" color="white" />Contact</a>
       
      </div>
    </div>
  );
 
}
