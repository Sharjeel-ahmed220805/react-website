// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import ContactPage from './components/ContactPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ContactPage />
        </div>
    </Router>
  );
}

export default App;
