import { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";

export const useMovieDetail = ({id}) => {

    const [movie, setMovie] = useState({});

    const requestMovie = async () => {
        const {data}  = await MovieService.getMovieDetail(id);
        setMovie(data);
    }

    useEffect(() => {
        requestMovie();
    }, []);

    return movie;

}