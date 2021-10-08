<<<<<<< HEAD
import React, { useState } from 'react';
import './css/Category.css';
import './css/CategoryItemBox.css';

const CategoryItemBox = ({ type, adress, selectType, setSelectType }) => {
   // const [selectType, setSelectType] = useState(false);

   const handleClick = () => {
      console.log('click');
<<<<<<<< HEAD:client/src/components/CategoryItemBox2.js
      setSelectType(!selectType);
========
      setSelectType(adress);
      // setSelectType(!selectType);
>>>>>>>> 06846d2c7bea3a857c734cb85b023db414e52cf2:client/src/components/CategoryItemBox.js
   };

   return (
      <div className="typeOfItemContainer">
         <div
            className={selectType ? 'deselected' : 'selected'}
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';
import './css/CategoryItemBox.css';

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
      <div className="typeOfItemContainer">
         <div
            className={selectType1 ? 'selected' : 'deselected'}
>>>>>>> 06846d2c7bea3a857c734cb85b023db414e52cf2
            onClick={handleClick}
         >
            <img className="imgCategoryItemBox" src={adress} alt={type} />
         </div>
      </div>
   );
};

<<<<<<< HEAD
export default CategoryItemBox;
=======
export default CategoryItemBox2;
>>>>>>> 06846d2c7bea3a857c734cb85b023db414e52cf2
