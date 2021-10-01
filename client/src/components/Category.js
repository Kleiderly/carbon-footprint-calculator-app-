import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';

import { itemList } from './data';
import CategoryItemBox from './CategoryItemBox';

function Category({ browser, result, setResult }) {
   const [choice, setChoice] = useState('');
   const [selectType, setSelectType] = useState();

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
<<<<<<< HEAD
      console.log(setResult);
=======
      console.log(result)
>>>>>>> 4880ba0f88b60db42330d6c9b518147595548777
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };

   // const handleClickSaverAdress = () => {
      
   //    console.log(result)
   // }
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
                        <img src={result.itemTypeAdress1} alt="" />
                     </div>
                  </div>
               </div>
            )}
         </div>
<<<<<<< HEAD
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
=======
         <p>Click</p>
         <div
            className="typeOfItemContainer"
         >
            
            {itemList.map((item) => (
               <div onClick={()=>setResult({...result, itemTypeAdress1 : item.adress})} key={item.id}>
               <CategoryItemBox 
                  index={item.id}
                  type={item.type}
                  adress={item.adress}
               />
>>>>>>> 4880ba0f88b60db42330d6c9b518147595548777
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
<<<<<<< HEAD
            {result.itemTypeAdress1 ? 'Some Image' : null}
=======
            {result.itemTypeAdress1 ? <p>Hey adress changed</p> : null}
>>>>>>> 4880ba0f88b60db42330d6c9b518147595548777
         </div>
      </div>
   );
}

export default Category;
