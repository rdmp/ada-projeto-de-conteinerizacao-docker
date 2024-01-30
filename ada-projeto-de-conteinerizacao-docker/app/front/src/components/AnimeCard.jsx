import React from 'react';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <img class="anime-image" src={anime.imageUrl} alt={anime.title} />
        <div class="anime-info">
          <h3>{anime.title}</h3>
          <p><strong>Japanese Title:</strong> {anime.titleJapanese}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Status:</strong> {anime.status}</p>
          <p><strong>Score:</strong> {anime.score}</p>
          <p><strong>Synopsis:</strong> {anime.synopsis}</p>
          <p><strong>Year:</strong> {anime.year}</p>
          <p><strong>Producer:</strong> {anime.producer}</p>
          <p><strong>Studio:</strong> {anime.studio}</p>
          <p><strong>Genres:</strong> {anime.genres}</p>
        </div>
    </div>
  );
};

export default AnimeCard;
