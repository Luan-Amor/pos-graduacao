import Link from 'next/link';
import {MovieList} from '../styles'

export const MoviesList = ({ movies }) => (
	<MovieList>
		{movies.map(({ title, id }, index) => (
			<li key={index}>
				<Link href={`/movie/${id}`}>{title}</Link>
			</li>
		))}
	</MovieList>
);
