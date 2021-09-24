import React from 'react';

const Header =(props)=> {
    
    return (
        <div className="">
            <button value={props.name} onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}

export default Header