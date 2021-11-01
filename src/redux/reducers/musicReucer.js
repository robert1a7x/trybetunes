import { GET_ARTIST_ALBUM, SET_LOADING, GET_MUSICS } from "../actions";

const INITIAL_STATE = {
	albums: [],
	musics: [],
	loading: false,
};

const musicReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case SET_LOADING:
		return {
			...state,
			loading: action.payload,
		}
	case GET_ARTIST_ALBUM:
		return {
			...state,
			albums: action.payload,
		}
	case GET_MUSICS:
		return {
			...state,
			musics: action.payload,
		}
	default:
		return state;
	};
};

export default musicReducer;
