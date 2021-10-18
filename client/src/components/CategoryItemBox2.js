import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';

const CategoryItemBox2 = ({ type, adress }) => {
   const [selectType1, setSelectType1] = useState(false);
   const [selectType2, setSelectType2] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType1(adress);
   };

   const handleClick2 = () => {
      console.log('click');
      setSelectType2(adress);
   };
   return (
      <div className="category-type-of-item-container">
         <div
            className={selectType1 ? 'category-selected' : 'category-deselected'}
            onClick={handleClick}
         >
            <img className="category-img-category-item-box" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox2;
