import React from 'react';
import MovieList from '../Components/Movielist';

function Home() {
    return (
        <div className="home">
            <h2>Popular Movies</h2>
            <MovieList />
        </div>
    );
}

export default Home;
