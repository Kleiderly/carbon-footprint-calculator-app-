import React from 'react';
import './css/Tips.css';
import './css/vivify.min.css';

function Tips(props) {
   return (
      <div className="tips-box unfold vivify delay-1000">
         <img
            src={props.tipObj.image}
            alt={props.tipObj.image}
            className="tips-img"
         />
         <div className="tips-text">
            <span className="tips-title">Did you know?</span>
            <p className="tips-info">{props.tipObj.text}</p>
         </div>
      </div>
   );
}

export default Tips;
