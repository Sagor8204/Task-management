import React from "react";

const Statistics = () => {
  const datas = [
    {
      title: "Design Team",
      progress: "35",
    },
    {
      title: "Developer Team",
      progress: "45",
    },
    {
      title: "Management",
      progress: "85",
    },
    {
      title: "Marketing",
      progress: "25",
    },
    {
      title: "Other",
      progress: "13",
    },
  ];

  return (
    <div className="bg-white w-2/5 rounded-md shadow-sm">
      <h3 className="gray_text_color text-[15px] px-3 py-2">
        Project Statistics
      </h3>

      <div className="flex justify-around items-center px-5 py-[14px] border-b border-gray-200">
        <div className="">
          <h2 className="text-2xl">42</h2>
          <span className="text-sm">Total Project</span>
        </div>
        <div className="w-[2px] h-[85px] bg-gray-300 inline-block self-stretch" />
        <div className="">
          <h2 className="text-2xl">23</h2>
          <span className="text-sm">On Going</span>
        </div>
        <div className="w-[2px] h-[85px] bg-gray-300 inline-block" />
        <div className="">
          <h2 className="text-2xl">8</h2>
          <span className="text-sm">Pending</span>
        </div>
      </div>

      <div>
        <ul className="pl-10 pr-4 py-4" style={{ listStyleType: "circle" }}>
          {datas.map((data) => (
            <li key={data.title} className="py-2">
              <div className="flex items-center justify-between mb-[6px]">
                <h3 className="text-[15px] gray_text_color">{data.title}</h3>
                <span>{data.progress}%</span>
              </div>
              <div className="h-[2px] relative bg-gray-300">
                <div
                  style={{ width: `${data.progress}%` }}
                  className="progress"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
