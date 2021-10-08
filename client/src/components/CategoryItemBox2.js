import React, { useState } from 'react';
import './css/Category.css';
import './css/CategoryItemBox.css';

const CategoryItemBox = ({ type, adress }) => {
   const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
      setSelectType(!selectType);
   };

   return (
      <div className="typeOfItemContainer">
         <div
            className={selectType ? 'selected' : 'deselected'}
            onClick={handleClick}
         >
            <img className="imgCategoryItemBox" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox;