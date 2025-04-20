import React from 'react';
import summary from '../data/summary_stats.json';  

const SummaryCards = () => {
  return (
    <div className="summary-cards">
      <div className="summary-card totalEVs">
        <h2>Total EVs</h2>
        <p>{summary.totalEVs}</p>
      </div>
      <div className="summary-card topBrand">
        <h2>Top EV Brand</h2>
        <p>{summary.topBrand}</p>
      </div>
      <div className="summary-card topType">
        <h2>Top EV Type</h2>
        <p>{summary.topType}</p>
      </div>
      <div className="summary-card totalModels">
        <h2>Total EV Models</h2>
        <p>{summary.totalModels}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
