import React from 'react';
import './css/ItemBox.css'

const LogistictsItemBox1 = ({ selected, index, name }) => {

   return (
      <div>
         <button
            className={selected === index ? 'itembox-selected-item-box' : 'itembox-deselected-item-box'}
         >
            {name}
         </button>
      </div>
   );
};

export default LogistictsItemBox1;