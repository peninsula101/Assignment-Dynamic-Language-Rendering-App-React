

import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ translation }) => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/home">{translation.home}</Link></li>
        <li><Link to="/movies">{translation.movies}</Link></li>
        <li><Link to="/tv-shows">{translation.tvShows}</Link></li>
        <li><Link to="/sports">{translation.sports}</Link></li>
        <li><Link to="/live">{translation.live}</Link></li>
        <li><Link to="/settings">{translation.settings}</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
