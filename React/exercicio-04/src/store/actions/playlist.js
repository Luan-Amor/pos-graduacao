export const ADD_MOVIE = "ADD_ITEM";
export const REMOVE_MOVIE = "REMOVE_ITEM";

export const addMovie = (payload) => ({
	type: ADD_MOVIE,
	payload, // Product
});

export const removeMovie = (payload) => ({
	type: REMOVE_MOVIE,
	payload, // id: number
});
