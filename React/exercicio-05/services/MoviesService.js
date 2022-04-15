import axios from "axios";

const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: API_KEY
	},
	timeout: 1000,
});

export class MovieService {
	static getMovies() {
		return instance.get("movie/popular");
	}

	static getMovie(id) {
		return instance.get(`movie/${id}`);
	}
}