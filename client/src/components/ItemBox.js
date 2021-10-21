import React from 'react';
import './css/ItemBox.css'
import './css/vivify.min.css';

const LogistictsItemBox1 = ({ selected, index, name }) => {

   return (
      <div className="popIn vivify">
         <button
            className={selected === index ? 'itembox-selected-item-box' : 'itembox-deselected-item-box'}
         >
            {name}
         </button>
      </div>
   );
};

export default LogistictsItemBox1;