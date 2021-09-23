   
import React from 'react';

const ButtonSelection =(props)=> {
    
    return (
        <div className="" id={props.key}>
            <button value={props.selectLogistic} id={props._id} onClick={props.handleClick}>{props.selectLogistic}</button>
        </div>
    )
}

export default ButtonSelection