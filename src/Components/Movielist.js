import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './Moviecard';

function Movielist() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=4c5be949`);
            setMovies(response.data.Search || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Initial fetch of popular movies or a default query
        fetchMovies('movie');
    }, []);

    const handleSearch = () => {
        fetchMovies(searchQuery);
    };

    return (
        <div className="movie-list">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            )}
        </div>
    );
}

export default Movielist;
