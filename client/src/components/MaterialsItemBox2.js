import React, { useState, useEffect } from 'react';
import './css/Materials.css';

const MaterialsItemBox2 = ({ type, adress, country, name }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(adress);
   };

   return (
      <div className="material-name-container">
         <div
            className={selectType ? 'selected-material' : 'deselected-material'}
            onClick={handleClick}
         >
            <p>{name}</p>
         </div>
      </div>
   );
};

export default MaterialsItemBox2;
