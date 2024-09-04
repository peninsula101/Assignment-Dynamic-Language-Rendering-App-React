

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Sports from './pages/Sports';
import Live from './pages/Live';
import Settings from './pages/Settings';
import { translations } from './translation';

const App = () => {
  const [language, setLanguage] = useState('en');  
  const currentTranslation = translations[language];  

  return (
    <Router>
      <div className="app">
        <Menu translation={currentTranslation} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          <Route path="/settings" element={<Settings setLanguage={setLanguage} />} />  
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
