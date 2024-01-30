import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import './AnimeList.css';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('http://localhost:3000/anime-list');
        const data = await response.json();
        console.log(data);
        setAnimes(data.animeList);
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="anime-container">
      {animes.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
