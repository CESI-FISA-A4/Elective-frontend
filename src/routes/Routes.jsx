import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home-page">home-page</Link></li>
        <li><Link to="/restaurant-list">restaurant-list</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;