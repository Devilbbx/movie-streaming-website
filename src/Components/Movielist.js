import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './Moviecard';

function Movielist() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
            setMovies(response.data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movielist;
