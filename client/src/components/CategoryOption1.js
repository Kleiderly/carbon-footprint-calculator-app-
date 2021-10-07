import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import './css/Cover.css';

import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

const CategoryOption1 = (browser) => {
   const [choice, setChoice] = useState('');
   const [selectType, setSelectType] = useState(null);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

   const handleClick1 = () => {
      console.log('click1');
      setChoice('1');
   };

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">Choose Your Item</p>
               <br />

               <div
                  className={
                     choice === '1'
                        ? 'afterClickCategory'
                        : 'beforeClickCategory'
                  }
                  onClick={handleClick1}
                  value={choice}
               >
                  <img src="../img/items-images/t-shirtW.png" alt="" />
               </div>
            </div>
         </div>
         <div className="typeOfItemContainer">
            {itemList.map((item) => (
               <div onClick={() => setSelectType(item.adress)} key={item.id}>
                  <CategoryItemBox
                     index={item.id}
                     type={item.type}
                     adress={item.adress}
                  />
               </div>
            ))}
         </div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/materials">
               <button type="button">Calculate</button>
            </Link>
         </div>
      </div>
   );
};

export default CategoryOption1;
