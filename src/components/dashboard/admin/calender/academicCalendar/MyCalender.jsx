import React from "react";
import PageTopHeader from "./../../../../common/PageTopHeader";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { useMyCalenderLsitQuery } from "../../../../../services/calenderApi";
import Loader from './../../../../common/Loader';
const MyCalender = () => {
  const res = useMyCalenderLsitQuery();

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
      <PageTopHeader title="Academic Calendar" />
      <div className="card shadow mb-4">
        <div className="card-header py-3 n">
          <div>
            <h6 className="m-0 font-weight-bold text-primary">
              Academic Calendar
            </h6>
          </div>
        </div>

        {res.isFetching && <Loader />}

        <div className="card-body">
          <div className="py-2 text-right mr-1">
            <div className="d-flex justify-content-end">
              <div className="mt-1"></div>
            </div>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={calender}
            editable={true}
            selectable={true}
            height={500}
            eventTextColor="black"
            handleWindowResize={true}
          />
        </div>
      </div>
    </>
  );
};

export default MyCalender;
