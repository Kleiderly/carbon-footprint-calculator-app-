import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import ProgressBar from './ProgressBar';
import CategoryItemBox2 from './CategoryItemBox2';
import { itemList } from './data';
import Context from '../contexts/ContextApi';

const CategoryOption2 = (props) => {
   const {
      itemTypeAdress1,
      setItemTypeAdress1,
      itemTypeAdress2,
      setItemTypeAdress2,
   } = useContext(Context);
   const [choice, setChoice] = useState(true);
   const [selectType1, setSelectType1] = useState(null);
   const [selectType2, setSelectType2] = useState(null);
   const [toggle, setToggle] = useState(true);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

   const handleClick1 = () => {
      console.log('click2');
      setChoice(true);
      setToggle(true);
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice(false);
      setToggle(false);
   };

   const handleClick3 = () => {
      setItemTypeAdress1(selectType1);
      setItemTypeAdress2(selectType2);
   };

   console.log(selectType1);
   console.log(selectType2);

   const handleClickTypes = (item) => {
      setChoice(!choice);
      setToggle(!toggle);
      toggle ? setSelectType1(item.adress) : setSelectType2(item.adress);
   };

   return (
      <div className="category-choice-container">
      <ProgressBar stage={0} previous="Start" next="Material" />
         <div>
            <div>
               <p className="category-direction-text">Choose your items</p>
               <div className="category-items-container">
                  <div
                     className={
                        choice === true
                           ? 'category-after-click-category'
                           : 'category-before-click-category'
                     }
                     onClick={handleClick1}
                     value={choice}
                     >
                     <img src={selectType1} alt={selectType1} />
                     <span>1st Item</span>
                  </div>
                  <div
                     className={
                        choice === false
                           ? 'category-after-click-category'
                           : 'category-before-click-category'
                     }
                     onClick={handleClick2}
                     value={choice}
                     >
                     <img src={selectType2} alt={selectType2} />
                     <span>2nd Item</span>
                  </div>
               </div>
            </div>

            <div className="category-type-of-item-container">
               {itemList.map((item, i) => (
                  <div onClick={() => handleClickTypes(item)} key={item._id}>
                     <CategoryItemBox2
                        index={item._id}
                        type={item.type}
                        adress={item.adress}
                     />
                  </div>
               ))}
            </div>

            <div className="category-container">
               <div className="category-back-next-buttons">
                     <button className="back-button" type="button" onClick={handleClickPreviousSection}>
                        BACK
                     </button>
                        <Link
                           className={selectType1 && selectType2 ? null : 'cover-disabled-link'}
                           to="/compare/materials"
                        >
                           <button className="next-button" type="button" onClick={handleClick3}>
                              NEXT
                           </button>
                        </Link>
               </div>
            </div>

         </div>
      </div>
   );
};

export default CategoryOption2;
