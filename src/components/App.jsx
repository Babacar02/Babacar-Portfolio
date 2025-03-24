
import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/home';
import MoreInfo from '../Pages/moreInfo';
function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/moreInfo" element={<MoreInfo/>}></Route>
      </Routes>
   
  
  )
}

export default App;
