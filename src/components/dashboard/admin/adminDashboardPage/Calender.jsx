import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
const Calender = () => {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log(arg);
  };
  const events = [
    { title: "event is  hare", date: "2023-02-04" },
    { title: "Arfin foysal", date: "2023-02-04" },
  ];

  return (
    <div>
      <div className="py-5">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          eventContent={renderEventContent}
          //   weekends={false}
          //   initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          // initialView="dayGridMonth"
          weekends={true}
          nowIndicator={true}

          // select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          eventAdd={function () {  
  
       
        
          
           }}
          /* you can update a remote database when these fire:
          
        eventChange={function () { }}
        eventRemove={function () { }}
        */
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
  );
}

export default Calender;
