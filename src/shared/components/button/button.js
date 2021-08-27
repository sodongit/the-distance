import React from 'react';
import './button.css';
export const Button = React.memo(({text = "",url = '#'}) => {
    console.log("render");
    return <div className="button-container">
        <a className="example_d" href={url} target="_blank" rel="nofollow noopener noreferrer" draggable="false">{text}</a>
    </div>;
});
