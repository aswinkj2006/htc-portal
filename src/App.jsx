import React from 'react';
import './App.css';
import CircuitBackground from './components/CircuitBackground';
import CommandHeader from './components/CommandHeader';
import TacticalIntel from './components/TacticalIntel';
import OperationRoles from './components/OperationRoles';
import EngagementRules from './components/EngagementRules';
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
        <OperationRoles />

        <div className="spacer xl"></div>
        <EngagementRules />

        <div className="spacer xl"></div>
        <HiddenPhase />
      </main>
    </div>
  );
}

export default App;
