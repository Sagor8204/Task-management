import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ datas }) => {
  return (
    <>
      {datas?.map((data) => (
        <li key={data.text}>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "sidebar_item_active" : ""
              } px-3 py-[12px] flex items-center gap-2 cursor-pointer sidebar_item transition-all duration-300 ease-linear`
            }
            to={data.link}
          >
            {data.icon}
            <span className="text-sm font-semibold">{data.text}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default MenuItem;
