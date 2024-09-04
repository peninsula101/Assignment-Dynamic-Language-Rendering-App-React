
import React from 'react';
import './Page.css';

const TVShows = () => {
  return (
    <div className="fullscreen-image" style={{ backgroundImage: `url('/images/tvshows.jpg')` }}>
      <div className="shadow-top"></div>
      <h1 className="page-title">TV Shows</h1>
    </div>
  );
};

export default TVShows;
