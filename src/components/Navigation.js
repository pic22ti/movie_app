import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return(
    <div className="nav">
      <Link className="nav_link" to="/">Home</Link>
      <Link className="nav_link" to="/about">About</Link>
    </div>
  );
}

export default Navigation;