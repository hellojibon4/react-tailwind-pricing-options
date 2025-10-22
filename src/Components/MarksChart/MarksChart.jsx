import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromis }) => {

    const MarksDataRes = use(marksPromis)
    const MarksData = MarksDataRes.data

    const MarksChatData = MarksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.math + student.chemistry) / 3
        student.avg = avg;
        return student
    })

    console.log(MarksChatData)
    return (
        <div>
            <BarChart width={900} height={300} data={MarksChatData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill="#8884d8" ></Bar>
                <Bar dataKey="chemistry" fill="#82ca9d" ></Bar>
                <Bar dataKey="physics" fill="#d98e26"></Bar>
                <Bar dataKey="math" fill="#26d9b8"></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;