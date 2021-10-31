import { GET_USER } from "../actions";

const INITIAL_STATE = {
	name: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_USER:
		return {
			...state,
			name: action.payload,
		}
	default:
		return state;
	}
}

export default userReducer;
