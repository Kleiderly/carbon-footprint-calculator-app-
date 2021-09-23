   
import React from 'react';

const ButtonSelection =(props)=> {
    
    return (
        <div className="" id={props.key}>
            <button value={props.name} id={props.id} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default ButtonSelection