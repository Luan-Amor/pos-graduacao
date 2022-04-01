import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => (
	<ul>
		{movies.map(({ title, id }) => (
			<li><Link to={`/movies/detail/${id}`} >{title}</Link></li>
		))}
	</ul>
);
