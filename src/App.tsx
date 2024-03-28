import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
// import CvHeader from './Components/CV/CvHeader/CvHeader';

import Profile from './Components/HomeProfile/Profile';
// import HeaderMenu from './Components/HeaderMenu';

// import Describtion from './Components/Describtion';

import Blog from './Components/Blog/Blog';


import Cvdetail from './Components/CvDetail/Cvdetail';

function App() {
  return (
  
    
    <Routes>
      <Route path="/" element={<Profile />} />
        <Route index element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        {/* Assuming Cvdetail is meant for CV, it's better to use a different path */}
        <Route path="/cv" element={<Cvdetail />} />
    </Routes>
    




  

   
  );
}

export default App;
