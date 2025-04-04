import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../index.css';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
      // fetching the data from movies.json 
        const response = await fetch('/data/movies.json');

        const data = await response.json();
        
        // Extracting the unique categories
        const uniqueCategories = ['All', ...new Set(data.map(movie => movie.category))];
        setCategories(uniqueCategories);
        
        setMovies(data.map(movie => ({ ...movie, liked: false })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleLike = (id) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === id 
          ? { ...movie, liked: !movie.liked } 
          : movie
      )
    );
  };

  const filteredMovies = activeCategory === 'All' 
    ? movies 
    : movies.filter(movie => movie.category === activeCategory);

  if (loading) {
    return <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>Loading awesome movies...</div>
    </div>;
  }

  return (
    <div className="movies-list-page">
      <h1>Recommended Movies</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category} 
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onLike={handleLike} 
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
