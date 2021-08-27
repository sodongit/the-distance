import {toDateString} from "../shared/helpers";

export async function getEventList () {
    return  await fetch('./eventbrite.json')
        .then((item) => item.json());
}

export async function fetchEventList() {
    const eventJson = await getEventList();

    return eventJson.events.map((event) => {
        const {
            name: {text},
            description: {html},
            start: {local},
            id,
            url
        } = event;

        return {
            name: text,
            html: {__html: html},
            date: toDateString(local),
            id,
            url
        };
    });
}