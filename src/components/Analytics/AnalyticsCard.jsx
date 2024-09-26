import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const barChartData = [
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const barChartLargeData = [
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const AnalyticsCard = ({ data }) => {
  return (
    <>
      {data.title === "Team Performance" ? (
        <div className="w-[24%] bg-white p-3 rounded-md shadow-sm">
          <h3>{data.title}</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">Current Month</span>

            <div className="flex items-center">
              <span>{data.dropUpIcon}</span>
              <span>{data.month}%</span>
            </div>
          </div>
          <BarChart
            width={250}
            height={60}
            data={barChartLargeData}
            barSize={10}
            className="mx-auto"
          >
            <Bar dataKey="uv" fill="#007bff" />
          </BarChart>
        </div>
      ) : data.title === "Tasks Summary" ? (
        <div className="w-[24%] bg-white p-3 rounded-md shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="mb-2">{data.title}</h3>
              <h1 className="text-3xl">{data.percentes}%</h1>
            </div>
            <BarChart width={70} height={60} data={barChartData}>
              <Bar dataKey="uv" fill="#007bff" />
            </BarChart>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Current Week</span>

            <div className="flex items-center">
              <span>{data.dropUpIcon}</span>
              <span>{data.week}%</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[24%] bg-white p-3 rounded-md shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="mb-2">{data.title}</h3>
              <h1 className="text-3xl">{data.quantity}</h1>
            </div>
            <BarChart width={70} height={60} data={barChartData}>
              <Bar dataKey="uv" fill="#007bff" />
            </BarChart>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Current Week</span>

            <div className="flex items-center">
              <span>{data.dropUpIcon}</span>
              <span>{data.week}%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnalyticsCard;
