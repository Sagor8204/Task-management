import React, { useState } from "react";
import Events from "./Events";
import { FiPlus } from "react-icons/fi";
import AddEvent from "./AddEvent";

const Calendar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 py-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">Calendar</h3>
        <button
          onClick={() => setOpen(true)}
          className="add_project px-5 py-[10px] text-sm rounded-md flex items-center gap-3"
        >
          Add Event <FiPlus />
        </button>
      </div>

      <Events />

      <AddEvent open={open} setOpen={setOpen} />
    </div>
  );
};

export default Calendar;
