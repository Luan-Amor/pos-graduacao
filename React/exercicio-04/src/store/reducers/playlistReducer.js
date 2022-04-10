import { ADD_MOVIE, REMOVE_MOVIE } from "../actions/playlist";

const initialState = {
	items: [],
};

export const playlist = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			if (state.items.some(({ id }) => id === action.payload.id)) {
				return state;
			}

			return {
				...state,
				items: state.items.concat(action.payload),
			};

		case REMOVE_MOVIE:
			return {
				...state,
				items: state.items.filter(({ id }) => id !== action.payload),
			};

		default:
			return state;
	}
};
