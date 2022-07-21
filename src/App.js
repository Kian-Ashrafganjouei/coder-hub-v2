import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Langauges from './components/pages/Langauges';
import Charts from './components/pages/Charts';
import Videos from './components/pages/Videos';
import Courses from './components/pages/Courses';
import Ide from './components/pages/Ide';
import Illegal from './components/pages/Illegal';



import './components/pages/Courses.css'
function App() {
  return (
    <BrowserRouter>



      <Navbar />
      <Routes>
        <Route path='coder-hub' element={<Home/>} />
        <Route path='pages/Home.js' element={<Home/>} />
        <Route path='pages/Langauges.js' element={<Langauges/>} />
        <Route path='pages/Charts.js' element={<Charts/>} />
        <Route path='pages/Videos.js' element={<Videos/>} />
        <Route path='pages/Courses.js' element={<Courses/>} />
        <Route path='pages/Ide.js' element={<Ide/>} />
        <Route path='*' element={<Illegal/>} />
        

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
