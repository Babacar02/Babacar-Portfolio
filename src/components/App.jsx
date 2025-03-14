
import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Pages/home';
import MoreInfo from '../Pages/moreInfo';
function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/moreInfo" element={<MoreInfo/>}></Route>
      </Routes>
    </Router>
  
  )
}

export default App;
