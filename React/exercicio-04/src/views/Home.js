import { MoviesList } from "../components/MoviesList";
import { Playlist } from "../components/Playlist";
import { useMovies } from "../hooks/useMovies";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
	const movies = useMovies();

	return (
		<>	
			<Container>
				<section>
					<h1>Home page</h1>
					<Row>
						<Col>
							<MoviesList movies={movies} />
						</Col>
						<Col>
							<Playlist></Playlist>
						</Col>
					</Row>
				</section>
			</Container>
		</>
	);
};
