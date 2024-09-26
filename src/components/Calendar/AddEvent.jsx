import React from "react";
import { RxCross2 } from "react-icons/rx";

const AddEvent = ({ open, setOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`modal_overlay fixed inset-0 flex justify-center items-center ${
        open && "show_modal"
      }`}
    >
      <div className="bg-white py-3 px-4 rounded-lg modal_content">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[20px]">Add Event</h3>
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <form>
          <div className="mb-3">
            <label className="text-sm mb-1 inline-block" htmlFor="enent-name">
              Event Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 outline-none add_project_input rounded-md"
            />
          </div>
          <div className="mb-3">
            <label className="text-sm mb-1 inline-block" htmlFor="enent-images">
              Event Images
            </label>
            <input
              type="file"
              className="w-full px-3 py-2 outline-none add_project_input rounded-md"
            />
          </div>
          <div className="mb-3 flex gap-4">
            <div>
              <labe
                className="text-sm mb-1 inline-block"
                htmlFor="enent-start-date"
              >
                Event Start Date
              </labe>
              <input
                type="date"
                className="w-full px-3 py-2 outline-none add_project_input rounded-md"
              />
            </div>
            <div>
              <labe
                className="text-sm mb-1 inline-block"
                htmlFor="enent-End-date"
              >
                Event End Date
              </labe>
              <input
                type="date"
                className="w-full px-3 py-2 outline-none add_project_input rounded-md"
              />
            </div>
          </div>
          <div className="mb-3">
            <labe
              className="text-sm mb-1 inline-block"
              htmlFor="event-description"
            >
              Event Description (optional)
            </labe>
            <textarea
              className="w-full resize-none outline-none add_project_input rounded-md h-[100px] px-3 py-2"
              placeholder="add any extra details about the request"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="add_project px-5 py-2 rounded-md text-sm">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
