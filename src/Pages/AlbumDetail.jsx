import React, { useState, useEffect } from 'react';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import './AlbumDetail.css';

const AlbumDetail = ({ musics, loading }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    const favorites = getFavoriteSongs();
    setFavorites(favorites);
  }

  const handleChange = ({ target }, music) => {
    target.checked ? addSong(music) : removeSong(music);
    getFavorites();
  }
	return (
		<div>
			<Header />
			<div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' } }>
				{ !loading && (
					<div className="album-detail-header">
						<h4>{musics[0]?.collectionName}</h4>
						<img src={ musics[0]?.artworkUrl100 } alt={musics[0]?.collectionName} />
					</div>
				) }
				{ loading ? <CircularProgress color='success' /> : musics.slice(1).map((music) => (
					<MusicCard
						key={ music.trackId }
						music={ music }
						loading={ loading }
						handleChange={ handleChange }
						checked={ favorites.some((song) => song.trackId === music.trackId) }
					/>
				)) }
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
  musics: state.musicReducer.musics,
  loading: state.musicReducer.loading,
});

export default connect(mapStateToProps)(AlbumDetail);
