import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import MadeBy from './Pages/MadeBy';
import EnergiesPage from './Pages/EnergiesPage';
import MainContent from './Pages/MainContent';
import About from './Elements/About';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Cards' element={<EnergiesPage />} />
          <Route path='/Credits' element = {<MadeBy />}  />
          <Route path='/Explore' element = {<MainContent />} />
          <Route path='/About' element = {<About />} />
        </Routes>
      </ScrollToTop>
      
    </div>
  );
}

export default App;