import React from 'react';
import EVsByYear from './components/EVsbyYear';
import TopEVBrands from './components/TopEVBrands';
import EVTypes from './components/EVTypes';
import TopCities from './components/TopCities';
import TopModels from './components/TopModels';
import SummaryCards from './components/SummaryCards';

import './App.css';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Electric Vehicle Dashboard</h1>

      
      <SummaryCards />

      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <EVsByYear />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <TopEVBrands />
        </div>
      </div>

      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <EVTypes />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <TopCities />
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <TopModels />
        </div>
      </div>
    </div>
  );
}

export default App;
