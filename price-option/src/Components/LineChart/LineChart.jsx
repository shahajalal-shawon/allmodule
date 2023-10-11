import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        {id: 1, name: "Student 1", Physics:90, chemistry:94, marks: 85},
        {id: 2, name: "Student 2", Physics:86, chemistry:79, marks: 78},
        {id: 3, name: "Student 3", Physics:78, chemistry:89, marks: 92},
        {id: 4, name: "Student 4", Physics:75, chemistry:88, marks: 88},
        {id: 5, name: "Student 5", Physics:83, chemistry:87, marks: 76},
        {id: 6, name: "Student 6", Physics:87, chemistry:91, marks: 95},
        {id: 7, name: "Student 7", Physics:77, chemistry:90, marks: 84},
        {id: 8, name: "Student 8", Physics:88, chemistry:80, marks: 91},
        {id: 9, name: "Student 9", Physics:79, chemistry:78, marks: 89},
        {id: 10, name: "Student 10", Physics:82, chemistry:82, marks: 79}

    ]


    return (
        <div>
            <LChart width={1000} height={400} data={mathMarksData}>
                <XAxis  dataKey="name" />
                <YAxis></YAxis>
            <Line dataKey="marks" stroke='red'></Line>
            <Line dataKey='Physics' stroke='yellow'></Line>
            </LChart>

        </div>
    );
};

export default LineChart;