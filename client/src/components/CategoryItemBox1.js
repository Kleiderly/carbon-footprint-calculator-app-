import React from 'react';
import './css/Category.css';
import './css/vivify.min.css';

const CategoryItemBox = ({ selected, index, type, adress }) => {
   return (
      <div className="category-type-of-item-container">
         <div className={selected === index ? 'category-selected light-tone-bg fadeInLeft vivify delay-500' : 'category-deselected fadeInLeft vivify delay-500'}>
            <img className="category-img-category-item-box" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;
