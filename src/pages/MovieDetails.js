import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch('./data/movies.json');
        const data = await response.json();
        const foundMovie = data.find(m => m.id.toString() === id);
        setMovie(foundMovie);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>Loading movie details...</div>
    </div>;
  }

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  return (
    <div className="movie-details-page">
      <div className="movie-backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }}></div>
      <div className="movie-details-content">
        <div className="movie-poster-container">
          <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="year">{movie.year}</span>
            <span className="rating">{movie.rating}</span>
            <span className="duration">{movie.duration}</span>
            <span className="category">{movie.category}</span>
          </div>
          <div className="movie-score">
            <div className="score">{movie.score}</div>
            <div className="score-label">User Score</div>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-details-section">
            <h3>Director</h3>
            <p>{movie.director}</p>
          </div>
          <div className="movie-details-section">
            <h3>Cast</h3>
            <p>{movie.cast}</p>
          </div>
          <div className="movie-actions">
            <Link to="/movies" className="back-button">Back to Movies</Link>
            <button className="watch-button">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;