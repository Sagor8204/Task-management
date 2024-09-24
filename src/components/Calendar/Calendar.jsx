import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarForDate = () => {
  const [date, setDate] = useState(new Date());

  const onDataChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="px-8 py-8">
      <h3 className="font-normal mb-1">Calendar</h3>
      <Calendar
        calendarType="gregory"
        onChange={onDataChange}
        value={date}
        tileContent={({ date, view }) =>
          view === "month" && date.getDate() === 15 ? <p>📅 Event</p> : null
        }
        selectRange={true}
      />
      {/* <p>Selected Date: {date.toDateString()}</p> */}
    </div>
  );
};

export default CalendarForDate;
