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
    <Link className="w-[49%]" to={`/project/details/${createSlug(data.title)}`}>
      <div className="bg-white py-4 px-5 rounded-md add_project transition-all duration-300 ease-in-out">
        <h3 className="mb-2">{data.title}</h3>
        <span className="mb-3 inline-block font-normal text-[15px]">
          {data.deadline}
        </span>
        <p className="text-sm leading-6 font-normal">
          {data.description.slice(0, 150)}...
        </p>
      </div>
    </Link>
  );
};

export default ProjectItem;
