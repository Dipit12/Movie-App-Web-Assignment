import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Discover Your Next Favorite Movie</h1>
        <p>Personalized recommendations tailored to your taste. Explore our collection of top-rated films across all genres.</p>
        <div className="cta-buttons">
          <Link to="/movies" className="cta-button primary">Explore Movies</Link>
          <Link to="/about" className="cta-button secondary">Learn More</Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <div className="feature-icon">🎬</div>
          <h3>Curated Collection</h3>
          <p>Carefully selected movies by cinema experts and enthusiasts</p>
        </div>
        <div className="feature">
          <div className="feature-icon">❤️</div>
          <h3>Personal Favorites</h3>
          <p>Save and organize your favorite movies for future viewing</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔍</div>
          <h3>Detailed Information</h3>
          <p>In-depth details about cast, director, plot and more</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
