import React from 'react';

function ButtonSelection(props) {
    
    return (
        <div className="" id={props.key}>
            <button value={props.co2} id={props.id} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default ButtonSelection