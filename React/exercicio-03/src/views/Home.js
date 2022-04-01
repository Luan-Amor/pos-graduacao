import { MoviesList } from "../components/MoviesList";
import { useMovies } from "../hooks/useMovies";

export const Home = () => {
	const movies = useMovies();

	return (
		<>
			<section>
				<h1>Home page</h1>

				<div className="home-container">
					<MoviesList movies={movies} />
				</div>
			</section>
		</>
	);
};
