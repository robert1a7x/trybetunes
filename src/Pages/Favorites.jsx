import React, { useState, useEffect } from 'react';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    const favorites = getFavoriteSongs();
    setFavorites(favorites);
  };

  const removeFavorite = (_e, music) => {
    removeSong(music);
    getFavorites();
  };

  return (
    <div>
      <Header />
      {favorites.length && (
        <div className='album-detail-header'>
          <h4>Músicas favoritas:</h4>
        </div>
      )}
      {favorites.length ? (
        favorites.map((music) => (
          <MusicCard
            key={music.trackId}
            music={music}
            handleChange={removeFavorite}
            checked={favorites.some((song) => song.trackId === music.trackId)}
          />
        ))
      ) : (
        <div className='album-detail-header'>
          <h4>Nenhuma música favoritada</h4>
        </div>
      )}
    </div>
  );
};

export default Favorites;
