import React from "react";
import './event-header.css';


export const EventHeader = ({name, date, onclick}) => {
    return <div className="event-header" onClick={onclick}>
        <div className="header-name">Event: <span>{name}</span></div>
        <div className="header-date"><span>Date: {date}</span></div>
    </div>
}