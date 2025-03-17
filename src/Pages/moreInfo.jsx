import React from "react";
import { useState } from "react";
import '../css/index.css';
import Hamburger from "hamburger-react";

const MoreInfo = () => {
  const [isOpen,setOpen] = useState(false);
  return (
    <>

<section >

<div className="top-nav-container">
<a href="#" className="name"><span>Baba</span>car</a>
      <div className="nav-elements">
      <div className="top-hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen}/></div>
      <nav className={`moreInfo-nav-links ${isOpen ? "open" : ""}`}>
          <a href="#" className="active">Portfolio</a>
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
          <a href="/" className="home-link">Home</a>
      </nav>
        </div>
    </div>
</section>

    
    <section className="About">
        <div className="about-text"> 
          <h1>It's</h1>
          <h2>Babacar</h2>
          <h3> a ITI & CS Major</h3>
          <p> Currently studying Information technology with
            a minor in Computer Science.
          </p>
          <div className="btn-box">
            <a href= "https://www.linkedin.com/in/b-dia/" target="_blank" className="btn-1">Linkedln</a>
          </div>
        </div>
        
        <div className="img-container">
            <img src="/img/headshot photo.png" alt="image of me"></img>          
        </div>
    </section>

    <section className="projects">


    </section>
   


    </> /*wraps everying in one div**/
  );

}
export default MoreInfo;