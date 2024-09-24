import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const TopBar = () => {
  const datas = [
    {
      title: "Backlog",
      dotIcon: <HiOutlineDotsHorizontal />,
      plusIcon: <FiPlus />,
    },
    {
      title: "ToDo",
      dotIcon: <HiOutlineDotsHorizontal />,
      plusIcon: <FiPlus />,
    },
    {
      title: "In Progress",
      dotIcon: <HiOutlineDotsHorizontal />,
      plusIcon: <FiPlus />,
    },
    {
      title: "Review",
      dotIcon: <HiOutlineDotsHorizontal />,
      plusIcon: <FiPlus />,
    },
  ];
  return (
    <div className="flex items-center justify-between py-8">
      {datas.map((data) => (
        <div
          className="flex items-center w-[233px] justify-between bg-white p-3 rounded-md"
          key={data.title}
        >
          <h2 className="text-[17px] whitespace-nowrap">{data.title}</h2>
          <div className="flex items-center gap-2">
            <button className="text-2xl p-1 rounded-full gray_text_color transition-all duration-300 ease-in-out topBar_dots_icon">
              {data.dotIcon}
            </button>
            <button className="topBar_plus_icon p-2 rounded-full">
              {data.plusIcon}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBar;
