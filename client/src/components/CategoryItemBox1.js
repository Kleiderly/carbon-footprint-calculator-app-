import React, { useState } from 'react';
import './css/Category.css';

const CategoryItemBox = ({ selected, index, type, adress }) => {
   return (
      <div className="typeOfItemContainer">
         <div className={selected === index ? 'selected' : 'deselected'}>
            <img className="imgCategoryItemBox" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;
