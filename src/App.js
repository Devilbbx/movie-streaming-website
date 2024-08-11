import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import MoviePage from './Pages/Moviepage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
