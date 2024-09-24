import React from "react";

const TaskItem = ({ data }) => {
  return (
    <div className="w-[235px] h-fit bg-white rounded-lg p-3">
      <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-[13px] inline-block font-normal mb-4">
        {data.category}
      </span>
      {data.image && (
        <div>
          <img className="rounded-xl mb-3" src={data.image} alt="task_image" />
        </div>
      )}
      <div>
        <h3 className="text-[15px] mb-1">{data.title}</h3>
        <p className="text-[13px] gray_text_color">{data.text}</p>
        <span className="my-5 inline-block text-[14px]">{data.dealLine}</span>

        <div className="flex justify-between relative">
          <div className="flex">
            <img className="rounded-full" src={data.avatar1} alt="avatar1" />
            <img
              className="rounded-full border border-white absolute top-0 left-[14px]"
              src={data.avatar2}
              alt="avatar2"
            />
            <img
              className="rounded-full border border-white absolute top-0 left-[30px]"
              src={data.avatar3}
              alt="avatar3"
            />
          </div>
          <div className="flex items-center gap-2 gray_text_color">
            <span className="text-xl">{data.checkIcon}</span>
            <span className="text-[15px]">{data.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
