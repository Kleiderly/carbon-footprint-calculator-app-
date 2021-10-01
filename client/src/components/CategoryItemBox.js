import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';

const CategoryItemBox = ({ type, adress }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(adress);
   };

   return (
      <div className="typeOfItemContainer">
         <div
            className={selectType ? 'selected' : 'deselected'}
            onClick={handleClick}
         >
            <img src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;
