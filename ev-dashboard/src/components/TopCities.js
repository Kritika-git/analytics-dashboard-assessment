import React from 'react';
import {
  ResponsiveContainer,
  BarChart, Bar,
  XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts';
import data from '../data/top_cities.json';

const TopCities = () => (
  <div className="chart-box">
    <h2 className="chart-title">Top 10 Cities by EV Count</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 60 }}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="city" angle={-45} textAnchor="end" interval={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TopCities;
