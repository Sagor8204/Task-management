import React from "react";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    {
      icon: <FaHome />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <FaTasks />,
      text: "Tasks",
      link: "/tasks",
    },
    {
      icon: <GoProjectSymlink />,
      text: "Projects",
      link: "/projects",
    },
    {
      icon: <FaCalendarAlt />,
      text: "Calendar",
      link: "/calendar",
    },
    {
      icon: <IoAnalyticsSharp />,
      text: "Analytics",
      link: "/analytics",
    },
    {
      icon: <IoMdNotificationsOutline />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      icon: <IoMdSettings />,
      text: "Settings",
      link: "/settings",
    },
    {
      icon: <RxAvatar />,
      text: "Profile",
      link: "/profile",
    },
  ];

  return (
    <div className="sidebar min-w-[200px] h-screen sticky top-0 left-0 bottom-0">
      <div className="py-[15px] logo text-center font-semibold">
        <Link to={`/`}>
          <h1 className="text-lg cursor-pointer">Task Manager</h1>
        </Link>
      </div>
      <div>
        <ul>
          <MenuItem datas={navLinks} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
