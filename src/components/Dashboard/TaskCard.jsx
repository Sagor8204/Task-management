import React from "react";
import { tasksProjects } from "./data.jsx";

const TaskCard = () => {
  return (
    <div className="flex justify-between py-8">
      {tasksProjects.map((data) => (
        <div
          key={data.title}
          className="bg-white p-4 rounded-md  task_card_item shadow-md w-[274px]"
        >
          <div className="flex items-center justify-between mb-12 font-semibold">
            <div className="flex gap-3 items-center">
              {data.icon}
              <h3 className="card_text text-[15px]">{data.title}</h3>
            </div>
            <h2 className="text-lg">{data.quantity}</h2>
          </div>
          <div className="flex items-center">
            <div>
              <img src={data.img} alt="icon" />
            </div>
            <div className="gray_text_color text-[15px]">
              <span className="card_more_num">{data.more}+</span>{" "}
              <span>more</span>
              <p>{data.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
