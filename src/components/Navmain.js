import React, { useEffect, useState } from 'react';
import './Navmain.css';

const Navmain = ({ apiUrl, apiKey }) => {
  const [highlight, setHighlight] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${apiUrl}now_playing?api_key=${apiKey}&language=pt-BR`);
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          const movie = data.results[0];
          setHighlight(movie);
          fetchTrailer(movie.id);
        }
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    const fetchTrailer = async (movieId) => {
      try {
        const res = await fetch(`${apiUrl}${movieId}/videos?api_key=${apiKey}&language=pt-BR`);
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
          if (trailer) {
            setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
          }
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchMovie();
  }, [apiUrl, apiKey]);

  if (!highlight) {
    return null;
  }

  return (
    <div className="highlight-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${highlight.backdrop_path})` }}>
      <div className="highlight-overlay">
        <div className="logo">MovieMania</div>
        <div className="highlight-content">
          <h1>{highlight.title}</h1>
          <p className="highlight-description">{highlight.overview}</p>
          <div className="highlight-details">
            <span className="highlight-rating">IMDb: {highlight.vote_average} / 10</span>
            <span className="highlight-votes">{highlight.vote_count} votos</span>
          </div>
          {trailerUrl && (
            <a href={trailerUrl} className="highlight-button" target="_blank" rel="noopener noreferrer">
              Assistir Trailer
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navmain;
