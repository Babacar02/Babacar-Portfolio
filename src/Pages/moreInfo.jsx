import React from "react";
import '../css/index.css';

const MoreInfo = () => {
  return (
    <>
    <div className="moreInfo-nav-container">
        <a href="#" className="name"><span>Baba</span>car</a>
    <nav className="moreInfo-nav-links">
        <a href="#" className="active">Portfolio</a>
        <a href="#">About Me</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
    </nav>
       <a href="/" className="home-link">Home</a>
    </div>

    
    <section className="About">
      <div className="about-section">
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

      </div>
      
    </section>

    <section className="projects">


    </section>
   
    </> /*wraps everying in one div**/
  );

}
export default MoreInfo;