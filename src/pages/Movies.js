
import React from 'react';
import './Page.css';

const Movies = () => {
  return (
    <div className="fullscreen-image" style={{ backgroundImage: `url('/images/movies.jpg')` }}>
      <div className="shadow-top"></div>
      <h1 className="page-title">Movies</h1>
    </div>
  );
};

export default Movies;
