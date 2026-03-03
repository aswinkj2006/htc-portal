import React from 'react';
import './App.css';
import CircuitBackground from './components/CircuitBackground';
import CommandHeader from './components/CommandHeader';
import TacticalIntel from './components/TacticalIntel';
import EngagementRules from './components/EngagementRules';
import MissionFlow from './components/MissionFlow';
import HiddenPhase from './components/HiddenPhase';

function App() {
  return (
    <div className="app-container">
      <CircuitBackground />

      <main className="main-content">
        <CommandHeader />

        <div className="spacer lg"></div>
        <TacticalIntel />

        <div className="spacer xl"></div>
        <EngagementRules />

        <div className="spacer xl"></div>
        <MissionFlow />

        <div className="spacer xl"></div>
        <HiddenPhase />
      </main>
    </div>
  );
}

export default App;
