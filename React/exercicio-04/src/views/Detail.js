import { Container, Row, Col, Image  } from "react-bootstrap"; 
import { useParams  } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

export const Detail = () => {
    const id = useParams();

    const movie = useMovieDetail(id);

    return (
        <Container>
            <h2>{movie.title}</h2>
            {console.log(movie)}
            <Row>
                <Col>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></Image>
                </Col>
                <Col>
                    <h2> Descrição</h2>
                    <div>
                        <p><strong>Descrição</strong>: {movie.overview}</p>
                        <p><strong>Nota</strong>: {movie?.vote_average}</p>
                        <p><strong>Produtora</strong>: {movie?.production_companies?.map(({name}) => `${name}, `)}</p>
                        <p><strong>País</strong>: {movie?.production_countries?.map(({name}) => name)}</p>
                        <p><strong>Duração</strong>: {movie.runtime}</p>
                        <p><strong>Lançado em</strong>: {movie.release_date}</p>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}