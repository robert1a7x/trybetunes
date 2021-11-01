import React, { useState } from 'react';
import { getArtistAlbumThunk, getAlbumMusicsThunk } from '../redux/actions';
import { connect } from 'react-redux';
import { TextField, Button } from '@mui/material';
import Header from '../components/Header';
import {
  Grid,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = ({ getArtistAlbum, albums, loading, getAlbumMusics }) => {
  const [search, setSearch] = useState('');

  const getArtistAlbumFromApi = () => {
    getArtistAlbum(search);
    setSearch('');
  };

	const handleAlbumId = (albumId) => {
		getAlbumMusics(albumId);
	}

  return (
    <div>
      <Header />
      <div className='serch-container'>
        <TextField
          fullWidth
          style={{ marginRight: 40 }}
          label='Nome do artista'
          variant='outlined'
          size='small'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant='contained'
          color='success'
          size='small'
          onClick={getArtistAlbumFromApi}
        >
          Procurar
        </Button>
      </div>
      <div className='albums-container'>
        {loading ? (
          <CircularProgress color='success' />
        ) : (
          <div className='albums-container'>
            <Grid container spacing={3} display='flex' justifyContent='center'>
              {albums.map((album) => (
                <div style={{ margin: 25 }} key={album.collectionId}>
                  <Link
                    to={`/album/${album.collectionId}`}
										onClick={ () => handleAlbumId(album.collectionId) }
                  >
                    <Grid item>
                      <Card
                        sx={{
                          width: 250,
                          height: 450,
                        }}
                        style={{ backgroundColor: 'rgb(32, 32, 32)' }}
                      >
                        <CardMedia
                          component='img'
                          height='250'
                          image={album.artworkUrl100}
                          alt={album.collectionName}
                        />
                        <CardContent>
                          <Typography
                            color='white'
                            textAlign='center'
                            gutterBottom
                            variant='h5'
                            component='div'
                          >
                            {album.collectionName}
                          </Typography>
                          <Typography
                            color='white'
                            textAlign='center'
                            gutterBottom
                            variant='h6'
                            component='div'
                          >
                            {album.artistName}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Link>
                </div>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  albums: state.musicReducer.albums,
  loading: state.musicReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getArtistAlbum: (payload) => dispatch(getArtistAlbumThunk(payload)),
	getAlbumMusics: (payload) => dispatch(getAlbumMusicsThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
