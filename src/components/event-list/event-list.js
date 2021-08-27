import React, {useEffect, useState} from "react";
import './event-list.css';
import {Event} from "./components/event/event";
import {fetchEventList} from "../../services/event-call";
import {EventHeader} from "./components/event/components/header/event-header";
import {EventContents} from "./components/event/components/contents/event-contents";
import {Button} from "../../shared/components/button/button";


export const EventList = () => {

    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetchEventList()
            .then((list) => {
                setEventList(list)
            });
    }, []);

    const [openContentId, setOpenContentId] = useState(undefined);


    const toggleContents = (id) => {
        id === openContentId ? setOpenContentId(undefined) : setOpenContentId(id)
    };

    const displayContents = (id) => id === openContentId;

    return <div className="container">
        {eventList.map(({name, html, date, url, id}) => <Event key={id}>
            <EventHeader name={name} date={date} onclick={() => toggleContents(id)}/>
            <EventContents webview={html} display={displayContents(id)}>
                <Button text="Details" url={url}/>
            </EventContents>
        </Event>)}
    </div>
}