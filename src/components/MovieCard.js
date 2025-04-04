import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function MovieCard({ movie, onLike }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <div className="card-image-container">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="movie-poster" 
          />
          <div className="card-overlay">
            <div className="movie-rating">{movie.rating}</div>
          </div>
        </div>
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-year">{movie.year}</div>
      </Link>
      <div className="card-actions">
        <button 
          className={`like-button ${movie.liked ? 'liked' : ''}`}
          onClick={() => onLike(movie.id)}
        >
          {movie.liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;