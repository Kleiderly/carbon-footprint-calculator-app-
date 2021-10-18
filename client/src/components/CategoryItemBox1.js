import React from 'react';
import './css/Category.css';

const CategoryItemBox = ({ selected, index, type, adress }) => {
   return (
      <div className="category-type-of-item-container">
         <div className={selected === index ? 'category-selected' : 'category-deselected'}>
            <img className="category-img-category-item-box" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;
