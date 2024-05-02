import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart'; 

function App() {
  const barData = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const lineData = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const pieData = {
    labels: ['Rouge', 'Bleu', 'Jaune', 'Vert'],
    values: [12, 19, 3, 5],
  };

  const radarData = { 
    labels: ['Manger', 'Boire', 'Dormir', 'Concevoir', 'Coder', 'Faire du vélo', 'Courir'],
    values: [65, 59, 90, 81, 56, 55, 40],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medl'In Dataviz</h1>
        <div className="chart-container">
          <div className="chart-item">
            <BarChart data={barData} />
          </div>
          <div className="chart-item">
            <LineChart data={lineData} />
          </div>
          <div className="chart-item">
            <PieChart data={pieData} />
          </div>
          <div className="chart-item">
            <RadarChart data={radarData} /> {/* Use RadarChart component */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
