import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Jan",
//     uv: 0,
//     pv: 0,
//     amt: 0,
//   },
//   {
//     name: "Feb",
//     uv: 50,
//     pv: 50,
//     amt: 50,
//   },
//   {
//     name: "Mar",
//     uv: 100,
//     pv: 100,
//     amt: 100,
//   },
//   {
//     name: "Apr",
//     uv: 150,
//     pv: 150,
//     amt: 150,
//   },
//   {
//     name: "May",
//     uv: 200,
//     pv: 200,
//     amt: 200,
//   },
//   {
//     name: "Jun",
//     uv: 250,
//     pv: 250,
//     amt: 250,
//   },
//   {
//     name: "Jul",
//     uv: 280,
//     pv: 280,
//     amt: 280,
//   },
//   {
//     name: "Aug",
//     uv: 300,
//     pv: 300,
//     amt: 300,
//   },
//   {
//     name: "Sep",
//     uv: 320,
//     pv: 320,
//     amt: 320,
//   },
//   {
//     name: "Oct",
//     uv: 360,
//     pv: 360,
//     amt: 360,
//   },
//   {
//     name: "Nov",
//     uv: 380,
//     pv: 380,
//     amt: 380,
//   },
//   {
//     name: "Dec",
//     uv: 400,
//     pv: 400,
//     amt: 400,
//   },
// ];

const monthlyData = [
  { name: "Jan", tasksDone: 40, tasksIncomplete: 10 },
  { name: "Feb", tasksDone: 30, tasksIncomplete: 20 },
  { name: "Mar", tasksDone: 20, tasksIncomplete: 30 },
  { name: "Apr", tasksDone: 50, tasksIncomplete: 15 },
  { name: "May", tasksDone: 60, tasksIncomplete: 10 },
  { name: "Jun", tasksDone: 70, tasksIncomplete: 5 },
  { name: "Jul", tasksDone: 100, tasksIncomplete: 2 },
  { name: "Aug", tasksDone: 90, tasksIncomplete: 8 },
  { name: "Sep", tasksDone: 80, tasksIncomplete: 12 },
  { name: "Oct", tasksDone: 60, tasksIncomplete: 20 },
  { name: "Nov", tasksDone: 50, tasksIncomplete: 25 },
  { name: "Dec", tasksDone: 30, tasksIncomplete: 40 },
];

const weeklyData = [
  { name: "Week 1", tasksDone: 20, tasksIncomplete: 5 },
  { name: "Week 2", tasksDone: 30, tasksIncomplete: 10 },
  { name: "Week 3", tasksDone: 40, tasksIncomplete: 8 },
  { name: "Week 4", tasksDone: 50, tasksIncomplete: 7 },
];

// Example Daily Data (You should replace this with actual daily data)
const dailyData = [
  { name: "Day 1", tasksDone: 5, tasksIncomplete: 1 },
  { name: "Day 2", tasksDone: 10, tasksIncomplete: 2 },
  { name: "Day 3", tasksDone: 15, tasksIncomplete: 3 },
  { name: "Day 4", tasksDone: 20, tasksIncomplete: 2 },
  { name: "Day 5", tasksDone: 25, tasksIncomplete: 1 },
  { name: "Day 6", tasksDone: 30, tasksIncomplete: 4 },
  { name: "Day 7", tasksDone: 35, tasksIncomplete: 5 },
];

const TaskDone = () => {
  const [data, setData] = useState(monthlyData);
  return (
    <div style={{ width: "100%", height: 400 }} className="bg-white p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl mb-5">Task Done</h1>
        <div>
          <button
            className="px-5 gray_text_color"
            onClick={() => setData(dailyData)}
          >
            Daily
          </button>
          <button
            className="px-5 gray_text_color"
            onClick={() => setData(weeklyData)}
          >
            Weekly
          </button>
          <button
            className="px-5 gray_text_color"
            onClick={() => setData(monthlyData)}
          >
            Monthly
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 400]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tasksDone"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Tasks Completed"
          />
          <Line
            type="monotone"
            dataKey="tasksIncomplete"
            stroke="#ff7300"
            strokeWidth={2}
            name="Tasks Incomplete"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskDone;
