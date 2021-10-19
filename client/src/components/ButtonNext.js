import React from 'react';

function ButtonNext(props) {
   return (
      <>
         <button className="buttonnext-button" type="button">
            {props.name}
         </button>
      </>
   );
}

export default ButtonNext;
