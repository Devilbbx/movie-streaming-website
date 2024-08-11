import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=4c5be949`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <p>Release Date: {movie.Released}</p>
        </div>
    );
}

export default MovieDetails;
