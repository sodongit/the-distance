import React, {useEffect, useState} from "react";
import './event-contents.css';


export const EventContents = ({webview, display, children}) => {

    const [contentClass, setContentClass] = useState('');
    useEffect(() => {
        setContentClass(display ? "event-content display-content" : "event-content");
    }, [display])

    return <React.Fragment>
        <div className={contentClass} >
            <div dangerouslySetInnerHTML={webview}/>
            {children}
        </div>
    </React.Fragment>
}