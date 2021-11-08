import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import './AlbumDetail.css';

const AlbumDetail = ({ musics, loading }) => {
	return (
		<div>
			<Header />
			<div>
				{ !loading && (
					<div className="album-detail-header">
						<h4>{musics[0]?.collectionName}</h4>
						<img src={ musics[0]?.artworkUrl100 } alt={musics[0]?.collectionName} />
					</div>
				) }
				{ loading ? <CircularProgress color='success' /> : musics.slice(1).map((music) => (
					<MusicCard key={ music.trackId } music={ music } loading={ loading } />
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
