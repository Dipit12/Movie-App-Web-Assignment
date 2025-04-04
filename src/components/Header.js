import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CineFlix</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;