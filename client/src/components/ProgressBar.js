import React from 'react';
import './css/ProgressBar.css';

function ProgressBar(props) {
    
    return (
        <div className="progressbar-wrapper">
            <div className="progressbar-category">{props.previous} &nbsp;</div>
            <div className="progressbar">
                <div className="progressbar-start">&nbsp;</div>
                <div className={props.stage >= 1 ? "progressbar-full" : "progressbar-empty"}>&nbsp;</div>
                <div className={props.stage >= 2 ? "progressbar-full" : "progressbar-empty"}>&nbsp;</div>
                <div className={props.stage >= 3 ? "progressbar-full" : "progressbar-empty"}>&nbsp;</div>
            </div>
            <div className="progressbar-category">&nbsp;{props.next}</div>
        </div>
    )
}

export default ProgressBar