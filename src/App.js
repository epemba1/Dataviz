import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart'; 

function App() {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    values: [12, 19, 3, 5],
  };

  const radarData = { 
    labels: ['Eat', 'Drink', 'Sleep', 'Design', 'Code', 'Bike riding', 'Running'],
    values: [65, 59, 90, 81, 56, 55, 40],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data visualization</h1>
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
