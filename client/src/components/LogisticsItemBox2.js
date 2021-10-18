import React, { useState, useEffect } from 'react';
import './css/Logistics.css';

const LogisticsItemBox2 = ({ type, adress, country, name }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(adress);
   };

   return (
      <div className="logistics-name-container">
         <div
            className={selectType ? 'logistics-deselected-material' : 'logistics-selected-material'}
            onClick={handleClick}
         >
            <p>{name}</p>
         </div>
      </div>
   );
};

export default LogisticsItemBox2;
