import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';

import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

function Category({ browser, result, setResult }) {
   const [choice, setChoice] = useState('');
   const [selectType, setSelectType] = useState();

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
      console.log(setResult);
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };
   // const handleClick3 = () => {
   //    console.log('click3');
   // };
   // const setTypeOfClo1 = () => setResult(...result, itemTypeAdress1:'belt')

   return (
      <div className="choiceContainer">
         <div>
            {browser.match.params.choice === 'option-1' ? (
               <div>
                  <br />
                  <p className="directionText">Choose Your Item</p>
                  <br />
                  <div
                     // className="beforeClick"
                     className={choice === '1' ? 'afterClick' : 'beforeClick'}
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src={result.itemTypeAdress1} alt="firstBoxImage" />
                  </div>
               </div>
            ) : (
               <div>
                  <br />
                  <p className="directionText">Choose Your Items</p>
                  <br />
                  <div className="itemsContainer">
                     <div
                        className={
                           choice === '1' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick1}
                        value={choice}
                     >
                        <img src={result.itemTypeAdress1} alt="" />
                     </div>
                     <div
                        className={
                           choice === '2' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick2}
                        value={choice}
                     >
                        <img src={selectType} alt="" />
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="typeOfItemContainer">
            {itemList.map((item) => (
               <div
                  onClick={() =>
                     setResult({ ...result, itemTypeAdress1: item.adress })
                  }
                  key={item.id}
               >
                  <CategoryItemBox
                     index={item.id}
                     type={item.type}
                     adress={item.adress}
                  />
               </div>
            ))}
         </div>
         <div>
            {/* {choice === '1' ? (
               <Link to="/1/materials">
                  <button type="button">Compare</button>
               </Link>
            ) : (
               <Link to="/2/materials">
                  <button type="button">Compare</button>
               </Link>
            )} */}
            <Link to={`/${choice}`} className={choice ? null : 'disabled-link'}>
               <button type="button">Compare</button>
            </Link>
            {result.itemTypeAdress1 ? 'Some Image' : null}
         </div>
      </div>
   );
}

export default Category;
