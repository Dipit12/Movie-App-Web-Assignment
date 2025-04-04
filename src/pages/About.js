import React from 'react';
import '../index.css';

function About() {
  return (
    <div className="about-page">
      <h1>About CineFlix</h1>
      <div className="about-content">
        <p>
          CineFlix is a platform designed to help movie enthusiasts discover great films
          and keep track of their favorites. Our curated collection includes classics,
          new releases, and hidden gems across various genres.
        </p>
        <p>
          Our mission is to connect people with movies that resonate with their tastes and
          introduce them to new cinematic experiences they might have overlooked.
        </p>
        <p>
          This application was built using React and React Router, providing a
          seamless and responsive user experience. Our team of film buffs and web developers
          work together to create the perfect movie discovery platform.
        </p>
        <p>
          We're constantly updating our database with new recommendations, so check
          back often to discover your next favorite film!
        </p>
        
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="team-member-avatar">JD</div>
              <h3>Dipit Madan</h3>
              <p>23BCE0813</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">JS</div>
              <h3>XYZ Person</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">AR</div>
              <h3>ABC Person</h3>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;