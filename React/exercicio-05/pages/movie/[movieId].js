import axios from "axios";

function Movie({ movie }) {
	return (
		<>
			<h1>{movie.title}</h1>
			<section>
				<p>{movie.overview}</p>
			</section>

		</>
	);
}

Movie.getInitialProps = async (context) => {
	const { movieId } = context.query;
	const { data } = await axios(`http://localhost:3000/api/movie/${movieId}`);

	return { movie: data }
}

export default Movie;
