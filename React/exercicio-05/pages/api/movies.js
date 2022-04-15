import { MovieService } from "../../services/MoviesService";

export default async function handler(_, res) {
	const {
		data: { results },
	} = await MovieService.getMovies();

	res.status(200).json({ results });
}
