import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import getMusics from '../../services/getMusics';
export const GET_USER = 'GET_USER';
export const GET_ARTIST_ALBUM = 'GET_ARTIST_ALBUM';
export const SET_LOADING = 'SET_LOADING';
export const GET_MUSICS = 'GET_MUSICS';

export const getUserAction = (payload) => ({
	type: GET_USER,
	payload,
});

const getArtistAlbum = (payload) => ({
	type: GET_ARTIST_ALBUM,
	payload,
});

const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
});

const getAlbumMusics = (payload) => ({
	type: GET_MUSICS,
	payload,
});

export const getArtistAlbumThunk = (artist) => async (dispatch) => {
	dispatch(setLoading(true));

	const albums = await searchAlbumsAPI(artist);

	dispatch(getArtistAlbum(albums));
	dispatch(setLoading(false));
};

export const getAlbumMusicsThunk = (albumID) => async (dispatch) => {
	dispatch(setLoading(true));

	const musics = await getMusics(albumID);

	dispatch(getAlbumMusics(musics));
	dispatch(setLoading(false));
};
