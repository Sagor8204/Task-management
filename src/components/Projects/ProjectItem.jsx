import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ data }) => {
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[\s/]+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <tr className="hover:bg-gray-100 project_wrap">
      <td className="cursor-pointer">
        <h3 className="text-sm pl-4 gray_text_color project_title transition-all duration-300">
          {data.title}
        </h3>
      </td>
      <td>
        <span className="font-medium text-sm">{data.startDate}</span>
      </td>
      <td>
        <span className="font-medium text-sm">{data.deadline}</span>
      </td>
      <td>
        <p className="text-sm leading-6 font-normal">
          {data.description.slice(0, 50)}...
        </p>
      </td>
      <td>
        <span
          className={`uppercase text-[13px] font-semibold ${
            data.status === "ongoing"
              ? "text-cyan-600"
              : data.status === "complete"
              ? "text-green-700"
              : data.status === "critical"
              ? "text-red-500"
              : "text-black"
          }`}
        >
          {data.status}
        </span>
      </td>
    </tr>
  );
};

export default ProjectItem;
