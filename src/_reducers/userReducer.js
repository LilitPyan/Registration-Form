 import { SIGN_UP, LOG_IN, LOG_OUT } from '../_actions/user.actions.js';

const initialState = {
	users: [],
	loggedInUser: null,
	isLoggedIn: false,
	isLoggedOut: true,
	errorMessage: '',
};

function userReducer(state = initialState, action) {
	switch(action.type) {
		case SIGN_UP:
			return {
				...state,
				users: [...state.users, action.payload.user],
			}

		case LOG_IN:
			const user = state.users.find(stateUser => stateUser.email === action.payload.email && stateUser.password === action.payload.password);

			if (user) {
				return {
					...state,
					errorMessage: '',
					isLoggedIn: true,
					isLoggedOut: false,
					loggedInUser: user,
				}
			}

		case LOG_OUT:
				return {
					isLoggedOut: true,
					isLoggedIn: false,
				}
		
			return {
				...state,
				errorMessage: 'User with this credentials does not exist'
			}

		default:
			return state;
	}
};

export default userReducer;