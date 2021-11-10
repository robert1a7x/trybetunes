import { GET_USER, UPDATE_USER } from "../actions";

const INITIAL_STATE = {
	name: '',
	image: '',
	email: '',
	description: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_USER:
		return {
			...state,
			name: action.payload,
		}
	case UPDATE_USER:
		return {
			...state,
			name: action.payload.name,
			image: action.payload.image,
			email: action.payload.email,
			description: action.payload.description,
		}
	default:
		return state;
	}
}

export default userReducer;
