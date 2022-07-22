import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Details } from './pages/Details';
import { Home } from './pages/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;
