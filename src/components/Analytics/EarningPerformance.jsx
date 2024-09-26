import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 10,
    pv: 50,
    amt: 30,
  },
  {
    name: "Feb",
    uv: 90,
    pv: 25,
    amt: 119,
  },
  {
    name: "Mar",
    uv: 5,
    pv: 65,
    amt: 105,
  },
  {
    name: "Apr",
    uv: 115,
    pv: 15,
    amt: 90,
  },
  {
    name: "May",
    uv: 110,
    pv: 48,
    amt: 81,
  },
  {
    name: "Jun",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Jul",
    uv: 50,
    pv: 100,
    amt: 10,
  },
  {
    name: "Aug",
    uv: 120,
    pv: 43,
    amt: 77,
  },
  {
    name: "Sep",
    uv: 89,
    pv: 39,
    amt: 20,
  },
  {
    name: "Oct",
    uv: 90,
    pv: 43,
    amt: 99,
  },
  {
    name: "Nov",
    uv: 90,
    pv: 57,
    amt: 117,
  },
  {
    name: "Dec",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

const EarningPerformance = () => {
  return (
    <div className="bg-white w-3/5 rounded-md shadow-sm">
      <h3 className="text-[15px] gray_text_color px-3 py-2">
        Earning Performance
      </h3>

      <div className="h-[400px] px-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            className="w-full"
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 300]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#A2D9D9"
              fill="#8BC1F7"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#A2D9D9"
              fill="#BDE2B9"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#A2D9D9"
              fill="#A2D9D9"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningPerformance;
