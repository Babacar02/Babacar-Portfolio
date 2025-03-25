import { useState } from "react";
import '../css/index.css';
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    
    <div className="sidebar" >
        <div className="home-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen}
        /></div>
      <div className="profile-container" >
        <img src="/img/headshot_photo.png" className="profile-image"></img>
        <h1 className="active">Babacar</h1>
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/moreInfo">Portfolio</a>
        <a href="https://www.linkedin.com/in/b-dia" target="_blank">Linkedln</a>
        <a href="https://github.com/Babacar02" target="_blank">Github</a>
      </nav>
      </div>
 
  );

}
