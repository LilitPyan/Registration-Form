 import { SIGN_UP, LOG_IN } from '../_actions/user.actions.js';

const initialState = {
	users: [],
	loggedInUser: null,
	isLoggedIn: false,
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
					loggedInUser: user,
				}
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