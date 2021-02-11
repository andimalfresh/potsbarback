import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import image from "../../../assets/Twea.jpg";
// Styles
import "./Events.scss";
// Routes
import { Routes } from "../../../constants";

import { EventsProps } from "../../Auth/interfaces/eventsTypes";

const dummyData = [
  {
    id: 0,
    first_name: "Andrew",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 1,
    active_shift: true,
    check_out: {
      cash_sales: 476.98,
      credit_sales: 9889.0,
      credit_tips: 976.89,
      is_closed: false,
      is_verified: false,
      is_recieved: false,
      cost_center: 0,
      starting_cash: 250.0,
    },
  },
];

const Events: (props: EventsProps) => JSX.Element = (props: EventsProps) => {
  const [value, onChange] = useState<Date | Date[]>(new Date());
  // const [date, _date] = useState(Date())
  return (
    <div className="card px-4 py-4">
      <div className="title">Events</div>
      <div className="columns">
        <div className="column is-half">
          <span className="subtitle">
            Choose a date to display daily events
          </span>
          <div className="is-justify-content-center is-flex my-6">
          <Calendar onChange={onChange} value={value} />
          </div>
          <div className="panel is-black">
            <p className="panel-heading">Tuesdays TWEA[event.title]</p>
            <p className="panel-tabs">
              <a className="is-active">EXTRALinks</a>
            </p>
            <a className="panel-block is-active is-flex">
              <span className="column is-half">doors</span>
              <span className="column is-half">doors</span>
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon">
               asdfs
              </span>
              marksheet
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              minireset.css
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a>
          </div>
        </div>
        <div className="column is-flex is-justify-content-center">
          <img src={image} style={{ height: "auto", width: "100" }} />
        </div>
       
      </div>
    </div>
  );
};

export default Events;
