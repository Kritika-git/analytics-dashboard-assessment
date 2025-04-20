import React from 'react';
import {
  ResponsiveContainer,
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts';
import data from '../data/ev_by_year.json';

const EVsByYear = () => (
  <div className="chart-box">
    <h2 className="chart-title">EV Registrations Over Years</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    <p className="chart-note">
        *Note: 2024 data is incomplete and may not reflect the full year's registrations.
      </p>
  </div>
);

export default EVsByYear;
