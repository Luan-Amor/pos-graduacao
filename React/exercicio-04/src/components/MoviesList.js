import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from '../store/actions/playlist'

export const MoviesList = ({ movies }) => {

	const dispatch = useDispatch();

	const handleAddMovieToPlayList = movie => {
		dispatch(addMovie(movie));
	}
	return (
		<section>
			<h2>Filmes</h2>
			<ul>
				{movies.map((movie) => (
					<li>
						<Link to={`/movies/detail/${movie.id}`} >{movie.title}</Link> &ensp;
						<Badge pill bg="primary" className="pointer" onClick={() => handleAddMovieToPlayList(movie)}>+</Badge>{' '}
					</li>
				))}
			</ul>
		</section>
	)
};
