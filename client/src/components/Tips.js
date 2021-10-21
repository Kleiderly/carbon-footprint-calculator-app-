import React from 'react';
import './css/Tips.css';

function Tips(props) {
   return (
      <div className="tips-box">
         <img
            src={props.tipObj.image}
            alt={props.tipObj.image}
            className="tips-img"
         />
         <div className="tips-text">
            <span className="tips-title">Did you know?</span>
            {/* <p className="tips-info">Random tips text</p> */}
            <p className="tips-info">{props.tipObj.text}</p>
         </div>
      </div>
   );
}

export default Tips;
