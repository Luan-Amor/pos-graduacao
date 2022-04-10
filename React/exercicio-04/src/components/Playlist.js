
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovie } from "../store/actions/playlist";

export const Playlist = () => {

	const dispatch = useDispatch();
	const { items } = useSelector(({playlist}) => playlist)

	const handleRemoveMovie = id => (
		dispatch(removeMovie(id))
	)

	return (
		<section>
			<h2>Playlist</h2>
			<ul>
				{items.map((movie) => (
					<li key={movie.id}>
						<Link to={`/movies/detail/${movie.id}`} >{movie.title}</Link> &ensp;
						<Badge pill bg="danger" className="pointer" onClick={() => handleRemoveMovie(movie.id)}>-</Badge>{' '}
					</li>
				))}
			</ul>
		</section>
	);

}