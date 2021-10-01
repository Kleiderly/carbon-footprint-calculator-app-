import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';

import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

function Category({ browser, result, setResult, match }) {
   const [choice, setChoice] = useState('');
   const [selectType1, setSelectType1] = useState(null);
   const [selectType2, setSelectType2] = useState(null);

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
      console.log(setResult);
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };
   const handleImageSelection = () => {
      console.log('click compare');
      setResult({ ...result, itemTypeAdress2: selectType2 });
      setResult({ ...result, itemTypeAdress1: selectType1 });
      console.log(result);
   };
   return (
      <div className="choiceContainer">
         <div>
            {browser.match.params.choice === 'option-1' ? (
               <div>
                  <br />
                  <p className="directionText">Choose Your Item</p>
                  <br />
                  <div
                     className={choice === '1' ? 'afterClick' : 'beforeClick'}
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src={selectType1} alt="firstBoxImage" />
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
                        <img src={selectType1} alt="firstBoxImage" />
                     </div>
                     <div
                        className={
                           choice === '2' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick2}
                        value={choice}
                     >
                        <img src={selectType2} alt="secondBoxImage" />
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="typeOfItemContainer">
            {itemList.map((item) => (
               <div
                  onClick={() =>
                     selectType1
                        ? setSelectType2(item.adress)
                        : setSelectType1(item.adress)
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
            {/* <Link to={`/${browser.match.params.choice}/materials`}> */}
            <button
               type="button"
               onClick={() => {
                  console.log(setSelectType1);
                  console.log(setSelectType2);
                  setResult({ ...result, itemTypeAdress2: selectType2 });
                  setResult({ ...result, itemTypeAdress1: selectType1 });
                  console.log(result);
               }}
            >
               Compare
            </button>
            {/* </Link> */}
         </div>
      </div>
   );
}

export default Category;

//o
