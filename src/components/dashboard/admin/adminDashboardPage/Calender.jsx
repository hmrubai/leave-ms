import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import "./Calender.css";
const Calender = ({ res }) => {
  const calender = res?.data?.data?.weekend_holiday?.map((item) => {
    let title;
    if (item.day_note) {
      title = `${item.day_type_title} (${item.day_note})`;
    } else {
      title = item.day_type_title;
    }

    return {
      title: title,
      start: item.date,
      color: item.day_type_title === "Weekend" ? "orange" : "info",
    };
  });

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calender}
        editable={true}
        selectable={true}
        eventTextColor="black"
        handleWindowResize={true}
      />
    </>
  );
};

export default Calender;
