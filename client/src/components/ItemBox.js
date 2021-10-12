import React from 'react';
import './css/ItemBox.css'

const LogistictsItemBox1 = ({ selected, index, name }) => {

   return (
      <div>
         <button
            className={selected === index ? 'selectedItemBox' : 'deselectedItemBox'}
         >
            <p>{name}</p>
         </button>
      </div>
   );
};

export default LogistictsItemBox1;