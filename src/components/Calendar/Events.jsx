import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Events = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting with Team",
      start: new Date(2024, 8, 25, 9, 0), // September 25, 9:00 AM
      end: new Date(2024, 8, 25, 10, 0), // September 25, 10:00 AM
    },
    {
      title: "Lunch with Client",
      start: new Date(2024, 8, 28, 12, 0),
      end: new Date(2024, 8, 28, 13, 0),
    },
    {
      title: "Code Review",
      start: new Date(2024, 7, 25, 15, 0),
      end: new Date(2024, 7, 25, 16, 0),
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New event name!");
    if (title) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  const handleSelectEvent = (event) => {
    const confirmDelete = window.confirm(
      `Do you want to delete the event ${event.title}`
    );
    if (confirmDelete) {
      setEvents((prevEvent) => prevEvent.filter((e) => e !== event));
    }
  };

  return (
    <div className="bg-white w-full">
      {/* <Calendar calendarType="gregory" onChange={onChangeDate} value={date} /> */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "85vh" }}
        selectable
        onSelectSlot={handleSelectSlot}
        views={["month", "week", "day"]}
        popup
        longPressThreshold={10}
        onSelectEvent={handleSelectEvent}
      />
      {/* <p>Selected Date: {date.toDateString()}</p> */}
    </div>
  );
};

export default Events;
