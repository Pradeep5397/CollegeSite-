import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admissions from './pages/Admissions';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">Engineering College</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/admissions">Admissions</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 