import { MovieService } from "../../../services/MoviesService";

export default async function handler(req, res) {
	const { id } = req.query

	const {
		data: movie,
	} = await MovieService.getMovie(id);

	res.status(200).json({ ...movie });
}