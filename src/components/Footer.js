import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CineFlix - Your Movie Recommendation Hub</p>
    </footer>
  );
}

export default Footer;
