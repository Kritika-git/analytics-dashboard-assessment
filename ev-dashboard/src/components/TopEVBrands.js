import React from 'react';
import {
  ResponsiveContainer,
  BarChart, Bar,
  XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts';
import data from '../data/top_brands.json';

const TopEVBrands = () => (
  <div className="chart-box">
    <h2 className="chart-title">Top 10 EV Brands</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 60 }}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="make" angle={-45} textAnchor="end" interval={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TopEVBrands;
