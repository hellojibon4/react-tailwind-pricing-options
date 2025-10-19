import React, { use } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultsChart = ({ ResultsData }) => {
    const StudentResultData = use(ResultsData);
    return (
        <div>
            {
                <LineChart
                    width={900} height={300} data={StudentResultData}>
                    <XAxis dataKey="name" ></XAxis>
                    <YAxis ></YAxis>
                    <Line dataKey="chemistry" stroke="#ffc658" />
                    <Line dataKey="physics" stroke="#82ca9d" />
                    <Line dataKey="math" stroke="#a6d926" />

                </LineChart>
            }

        </div>
    );
};

export default ResultsChart;