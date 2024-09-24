import React from "react";
import TaskCard from "./TaskCard";
import TaskDone from "./TaskDone";
import Task from "./Task";

const Dashboard = () => {
  return (
    <div className="px-8 flex justify-between gap-10">
      <div className="w-full">
        <TaskCard />
        <TaskDone />
        <Task />
      </div>
      <div className="w-[390px] h-screen border border-gray-300"></div>
    </div>
  );
};

export default Dashboard;
