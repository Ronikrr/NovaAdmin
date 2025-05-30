import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

  import { datas } from '../../data/home.data';

const LineChartExample = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={datas} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Reference Line */}
                <ReferenceLine y={250} label="Target Enrollments" stroke="red" strokeDasharray="3 3" />

                {/* Lines */}
                <Line type="monotone" dataKey="enrollments" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="views" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="revenue" stroke="#ffc658" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartExample;
