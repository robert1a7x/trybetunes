import React, { useState, useEffect } from 'react';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI'
import { Card, Box, CardContent, Typography } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MusicCard = ({ music }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    const favorites = getFavoriteSongs();
    setFavorites(favorites);
  }

  const handleChange = ({ target }) => {
    target.checked ? addSong(music) : removeSong(music);
    getFavorites();
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ display: 'flex', margin: 2, width: 430 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              {music.trackName}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {music.artistName}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <audio
              data-testid='audio-component'
              src={music.previewUrl}
              controls
            >
              <track kind='captions' />O seu navegador não suporta o elemento
              <code>audio</code>.
            </audio>
            <Checkbox
              color='secondary'
              sx={{ marginLeft: 6 }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={ favorites.some((song) => song.trackId === music.trackId) }
              onChange={ handleChange }
            />
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default MusicCard;
