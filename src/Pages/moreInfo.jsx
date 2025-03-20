import React from "react";
import { useState } from "react";
import '../css/index.css';
import Hamburger from "hamburger-react";
import ContactForm from "../components/ContactForm";

const MoreInfo = () => {
  const [isOpen,setOpen] = useState(false);
  return (
    <>


<div className="top-nav-container">
<a href="#" className="name"><span>Baba</span>car</a>
      <div className="nav-elements">
      <div className="top-hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen}/></div>
      <nav className={`moreInfo-nav-links ${isOpen ? "open" : ""}`}>
          <a href="#" className="active">Portfolio</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#">Contact Me</a>
          <a href="/" className="home-link">Home</a>
      </nav>
        </div>
    </div>


<section id="about" className="About">
        <div className="about-text"> 
          <h1>It's</h1>
          <h2>Babacar</h2>
          <h3>a ITI & CS Major</h3>
          <p>Current student studying Information Technology with a minor in Computer Science. 
          Im interested in web development, cloud computing and learning more aboutsecurity frameworks.</p>
          
          <div className="btn-box">
            <a href= "https://www.linkedin.com/in/b-dia/" target="_blank" className="btn-1">Linkedln</a>
          </div>
        </div>
        
        <div className="img-container">
            <img src="/img/headshot photo.png" width="350" height="280" alt="image of me"></img>          
        </div>
    </section>

    <section id="experience" className="experience">
      <div className="experience-content">
      <div className="header-rsm">
        <h1>IT ServiceNow Intern, RSM, Mineapolis, MN</h1>
        <h2>June 2024 - Present </h2>
      </div>
          <div className="rsm-list">
            <ul>
              <li>Developed and maintained ServiceNow dashboards, 
              widgets, and analytics graphs to improve IT service 
              management</li>
              <li>Worked on UI enhancements and front-end accessibility 
              to ensure a seamless user experience.</li>
              <li>Assisted in troubleshooting incidents and Developing 
              ServiceNow user stories to meet business requirements</li>
            </ul>

            <div className="club-header">
              <h1> Front-End Developer, UMN Social Coding Club, Minneapolis, MN </h1>
              <h2>Jan 2023 - Present</h2>
            </div>
            <div className="club-list"> 
              <ul>
                <li>Front-end developer for Gopher X Metro, integrating Google API to optimize a transit web  
                application with improved route efficiency.</li>
                <li>Developed a search feature, enhancing user experience with React components, Node.js, and TypeScript.</li>
                <li>Collaborated in an agile team, refining front-end components and optimizing back-end performance.</li>
              </ul>
          </div>
          </div>
      </div>
    </section>

  <section className="contact">

    <div className="contact-content">
      <ContactForm/>
    </div>
   
  </section>
 
   


    </> /*wraps everying in one div**/
  );

}
export default MoreInfo;