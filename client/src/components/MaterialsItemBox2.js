import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';
import './css/Materials.css';
import './css/ItemBox.css';

const MaterialsItemBox2 = ({ type, adress, country, name }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(adress);
   };

   return (
      <div className="materialNameContainer">
         <div
            className={selectType ? 'selectedMaterial' : 'deselectedMaterial'}
            onClick={handleClick}
         >
            <p>{name}</p>
         </div>
      </div>
   );
};

export default MaterialsItemBox2;
