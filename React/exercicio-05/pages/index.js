import axios from "axios";
import { MoviesList } from "../components/MoviesList";
import {Container } from '../styles';

function Home({ movies }) {
	return (
		<Container>
			<h1>Home</h1>
			<MoviesList movies={movies}></MoviesList>
		</Container>
	);
}

Home.getInitialProps = async (context) => {
	const { data: { results } } = await axios("http://localhost:3000/api/movies");

	return { movies: results };
};

export default Home;
