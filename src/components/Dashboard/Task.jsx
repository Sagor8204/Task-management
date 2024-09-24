import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { PiLinkSimple } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";

const Task = () => {
  const datas = [
    {
      title: "Start from",
      time: "9:00 am",
      desc: "Search Inspiration for project",
      link: "www.google.com",
      comments: 8,
      progress: 24,
      playIcon: <FaPlayCircle />,
      timeIcon: <IoTimeOutline />,
      linkIcon: <PiLinkSimple />,
      commentIcon: <FaRegComments />,
      alarmIcon: <MdAccessAlarm />,
      color: "#5453F6",
    },
    {
      title: "Start from",
      time: "9:00 am",
      desc: "Search Inspiration for project",
      link: "www.google.com",
      comments: 8,
      progress: 85,
      playIcon: <FaPlayCircle />,
      timeIcon: <IoTimeOutline />,
      linkIcon: <PiLinkSimple />,
      commentIcon: <FaRegComments />,
      alarmIcon: <MdAccessAlarm />,
      color: "#5051F9",
    },
  ];

  return (
    <div className="py-10 rounded-md">
      <h1 className="text-2xl mb-3">Task</h1>

      <div className="flex flex-col">
        {datas.map((data) => (
          <div
            className="flex items-center justify-between py-4 bg-white my-3 px-4"
            key={data.title}
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl text-blue-500">{data.playIcon}</div>
              <div>
                <h3 className="text-sm mb-[10px]">{data.title}</h3>
                <div className="flex gap-2 gray_text_color">
                  <span className="text-2xl -mt-[2px]">{data.timeIcon}</span>
                  <span>{data.time}</span>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="font-medium mb-[10px]">{data.desc}</h2>
              <div className="flex items-center justify-between gap-10">
                <div className="flex items-center gap-2">
                  <span className="text-lg gray_text_color">
                    {data.linkIcon}
                  </span>
                  <span className="text-[13px] link_color">{data.link}</span>
                </div>
                <div className="flex gap-[10px] gray_text_color">
                  <span className="text-lg mt-[1px]">{data.commentIcon}</span>
                  <span className="text-[13px]">{data.comments} comments</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2">{data.progress}% complete</h3>
              <div className="w-full h-1 bg-gray-400">
                <div
                  className="h-1"
                  style={{ width: data.progress, backgroundColor: data.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
