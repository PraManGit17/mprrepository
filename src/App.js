import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerPerformance from './components/PlayerPerformance';
import MatchOutcome from './components/MatchOutcome';
import TeamStrategy from './components/TeamStrategy';
import Navbar from './components/Navbar';
import './components/styles.css';  


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to Sports Analytics</h1>} />
            <Route path="/player-performance" element={<PlayerPerformance />} />
            <Route path="/match-outcome" element={<MatchOutcome />} />
            <Route path="/team-strategy" element={<TeamStrategy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

