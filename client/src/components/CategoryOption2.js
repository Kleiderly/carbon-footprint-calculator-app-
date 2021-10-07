import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import CategoryItemBox from './CategoryItemBox';
import { itemList } from './data';

const CategoryOption2 = ({ browser }) => {
   const [choice, setChoice] = useState('');
   const [selectType1, setSelectType1] = useState(null);
   const [selectType2, setSelectType2] = useState(null);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

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
            <div>
               <br />
               <p className="directionText">Choose Your Items</p>
               <br />
               <div className="itemsContainer">
                  <div
                     className={
                        choice === '1'
                           ? 'afterClickCategory'
                           : 'beforeClickCategory'
                     }
                     onClick={handleClick1}
                     value={choice}
                  >
                     <img src={selectType1} alt={selectType1} />
                  </div>
                  <div
                     className={
                        choice === '2'
                           ? 'afterClickCategory'
                           : 'beforeClickCategory'
                     }
                     onClick={handleClick2}
                     value={choice}
                  >
                     <img src={selectType2} alt={selectType2} />
                  </div>
               </div>
            </div>
            <div className="typeOfItemContainer">
               {itemList.map((item) => (
                  <div
                     onClick={() =>
                        setSelectType1
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
            <button type="button" onClick={handleClickPreviousSection}>
               Go Back
            </button>
            <div>
               <Link
                  className={choice ? null : 'disabled-link'}
                  to="/materials"
               >
                  <button type="button">Compare</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CategoryOption2;
