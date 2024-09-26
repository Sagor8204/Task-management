import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { IoMdArrowDropup } from "react-icons/io";
import Statistics from "./Statistics";
import EarningPerformance from "./EarningPerformance";

const Analytics = () => {
  const datas = [
    {
      title: "Tasks In Progress",
      quantity: "14",
      week: "2.0",
      dropUpIcon: <IoMdArrowDropup />,
    },
    {
      title: "Task Completed",
      quantity: "108",
      week: "2.0",
      dropUpIcon: <IoMdArrowDropup />,
    },
    {
      title: "Team Performance",
      month: "7.5",
      dropUpIcon: <IoMdArrowDropup />,
    },
    {
      title: "Tasks Summary",
      percentes: "1.25",
      week: "2.0",
      dropUpIcon: <IoMdArrowDropup />,
    },
  ];

  return (
    <div className="flex justify-between gap-10 px-8 py-8">
      <div className="w-[80%]">
        <h2 className="gray_text_color text-xl mb-2">Project analytics</h2>

        <div className="flex items-center justify-between mb-3">
          {datas.map((data) => (
            <AnalyticsCard key={data.title} data={data} />
          ))}
        </div>

        <div className="flex gap-10">
          <Statistics />
          <EarningPerformance />
        </div>
      </div>

      <div className="w-[20%] h-screen border border-gray-300"></div>
    </div>
  );
};

export default Analytics;
