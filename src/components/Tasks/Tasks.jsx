import React from "react";
import TopBar from "./TopBar";
import TaskItem from "./TaskItem";
import { datas } from "./data";

const Tasks = () => {
  return (
    <div className="px-8 flex justify-between gap-10">
      <div className="w-[80%]">
        <TopBar />
        {/* all task in the below */}
        <div className="grid task_grid gap-10 grid-flow-dense">
          {datas.map((data, i) => (
            <TaskItem key={i} data={data} />
          ))}
        </div>
      </div>
      <div className="w-[20%] h-screen border border-gray-300"></div>
    </div>
  );
};

export default Tasks;
