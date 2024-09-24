import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ data }) => {
  return (
    <div className="todo_item mb-3 px-2 py-1 rounded-md flex items-center justify-between">
      <h3 className="text-white">{data.title}</h3>

      <div className="flex items-center gap-2">
        <button className="text-red-500 text-xl hover:text-white">
          <MdEdit />
        </button>
        <button className="text-red-500 text-xl hover:text-white">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
