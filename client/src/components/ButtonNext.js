import React from 'react';

function ButtonNext(props) {
    
    return (
        <div className="" id={props.key}>
            <button value={props.name} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default ButtonNext