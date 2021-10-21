import React from 'react';

function ButtonSelection(props) {
    
    return (
        <div className="" id={props.key}>
            <button className="buttonselection-button" id={props.id} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default ButtonSelection