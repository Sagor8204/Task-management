import React from "react";

const General = () => {
  return (
    <div className="bg-white py-4 px-3 rounded-md max-w-[1100px] mx-auto shadow-sm">
      <span className="text-[15px] gray_text_color mb-2 inline-block">
        Update your account details
      </span>

      <div>
        <div className="mb-4 flex gap-4">
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="number"
            placeholder="Enter phone"
          />
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="number"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="text"
            placeholder="Facebook profile link"
          />
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="number"
            placeholder="Instagram profile link"
          />
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full"
            type="number"
            placeholder="Linkedin profile link"
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="search_input general_input py-2 px-3 rounded-md w-full text-sm"
            type="file"
          />
        </div>
        <div>
          <textarea
            placeholder="Enter bio"
            className="resize-none w-full h-[120px] search_input general_input rounded-md py-2 px-3 mb-4"
          ></textarea>
        </div>

        <div className="flex gap-5">
          <button className="add_project  rounded-md px-5 py-2 text-sm transition-all duration-300">
            Update Details
          </button>
          <button className="add_project  rounded-md px-5 py-2 text-sm transition-all duration-300 hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default General;
