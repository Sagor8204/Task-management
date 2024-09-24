import React from "react";
import { MdClose } from "react-icons/md";

const AddProjet = ({ open, setOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`${
        open && "show_modal"
      } modal_overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
    >
      <div className="modal_content w-[400px] bg-white rounded-md py-3 px-4 relative">
        <MdClose
          onClick={() => setOpen(false)}
          className="absolute -right-6 -top-9 text-white text-3xl cursor-pointer"
        />
        <h3 className="text-center py-3 text-2xl">Add Project</h3>

        <div>
          <label className="block mb-1" htmlFor="title">
            Title:
          </label>
          <input
            className="add_project_input outline-none bg-transparent p-2 rounded-md w-full mb-3"
            type="text"
            placeholder="Enter your project title..."
          />
          <label className="block mb-1" htmlFor="description">
            Description:
          </label>
          <input
            className="add_project_input outline-none bg-transparent p-2 rounded-md w-full mb-3"
            type="text"
            placeholder="Enter your project title..."
          />

          <button className="mt-2 add_project px-8 py-2 rounded-md text-sm transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjet;
