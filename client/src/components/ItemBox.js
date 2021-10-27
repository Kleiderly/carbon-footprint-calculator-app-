import React from 'react';
import './css/ItemBox.css'
import './css/vivify.min.css';

const LogistictsItemBox1 = ({ selected, index, name }) => {

   return (
      <div className="popIn vivify">
         <button
            className={selected === index ? 'itembox-selected-item-box light-tone-bg' : 'itembox-deselected-item-box dark-tone-bg'}
         >
            {name}
         </button>
      </div>
   );
};

export default LogistictsItemBox1;