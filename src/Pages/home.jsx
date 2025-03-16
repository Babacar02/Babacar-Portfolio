import React from "react";
import NavBar from '../components/NavBar';
import ThreeModel from '../components/ThreeModel';
import '../css/index.css';
export default function Home(){
  console.log("home");
    return(
           <div className ="App">
              <NavBar />
              <ThreeModel />
            </div>
    )
}
