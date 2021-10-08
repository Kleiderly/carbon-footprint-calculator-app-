import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';

const CategoryItemBox = ({ type, adress, selectType, setSelectType }) => {
   // const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(adress);
      // setSelectType(!selectType);
   };

   return (
      <div className="typeOfItemContainer">
         <div
            className={selectType ? 'deselected' : 'selected'}
            onClick={handleClick}
         >
            <img className="imgCategoryItemBox" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;
