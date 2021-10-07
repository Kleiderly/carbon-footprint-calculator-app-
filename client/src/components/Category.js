import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Category.css';

import { itemList } from './data';
import CategoryItemBox from './CategoryItemBox';

function Category({ browser, result, setResult }) {
   const [choice, setChoice] = useState('');
   const [selectType1, setSelectType1] = useState(null);
   const [selectType2, setSelectType2] = useState(null);


   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
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
                     // className="beforeClick"
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
                        <img src={selectType1} alt="" />
                     </div>
                     <div
                        className={
                           choice === '2' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick2}
                        value={choice}
                     >
                        <img src={selectType2} alt="" />
                     </div>
                  </div>
               </div>
            )}
         </div>
         <p>Click</p>
         <div
            className="typeOfItemContainer"
         >
            
            {itemList.map((item) => (
                <div onClick={()=> selectType1 ? setSelectType2(item.adress) : setSelectType1(item.adress)} key={item.id}>
               <CategoryItemBox 
                  index={item.id}
                  type={item.type}
                  adress={item.adress}
               />
               </div>
            ))}
            
         </div>
         <div>
            <Link 
            // className={choice ? null : 'disabled-link'} 
                  to={{
                     pathname:`/${browser.match.params.choice}/materials`,
                     state: {adress1: {selectType1},
                             adress2: {selectType2}
                     }
                  }} 
            >
               <button type="button">Compare</button>
            </Link>
            {selectType1 || selectType2 ? <p>Hey adress changed</p> : null}
         </div>
      </div>
   );
}

export default Category;
