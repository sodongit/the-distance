import React from "react";
import './event.css';


export const Event = ({children}) => {

    return <div className="event-container">
        {children}
    </div>
}