import React from 'react';
import {
  ResponsiveContainer,
  PieChart, Pie, Cell,
  Tooltip, Legend
} from 'recharts';
import data from '../data/ev_types.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const EVTypes = () => (
  <div className="chart-box">
    <h2 className="chart-title">EV Types Distribution</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="type"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default EVTypes;
