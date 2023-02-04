import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" 
const Calender = () => {


   const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
      const events = [
        { title: 'event 1', date: '2023-02-04' },
        { title: 'event 2', date: '2023-02-04' },
        { title: 'event 3', date: '2023-02-04' },
        { title: 'event 4', date: '2023-02-04' }
      ]
    
  return (
    <div>
      <div className="py-5">
              <FullCalendar
                   plugins={[ dayGridPlugin, interactionPlugin ]}
                  initialView="dayGridMonth"
                  dateClick={handleDateClick}
                  events={events}
                  eventContent={renderEventContent}
                //   weekends={false}
             
              />
      </div>
    </div>
  );
};
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }


export default Calender;
