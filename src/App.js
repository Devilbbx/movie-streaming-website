import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import MoviePage from './Pages/Moviepage';
import './App.css'; // Create your custom CSS for styling

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movie/:id" component={MoviePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
