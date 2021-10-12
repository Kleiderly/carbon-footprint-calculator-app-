import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
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
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">Choose Your Items</p>
               <br />
               <div className="itemsContainer">
                  <div
                     className={
                        choice === true
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
                        choice === false
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
            <button type="button" onClick={handleClickPreviousSection}>
               Go Back
            </button>
            <div>
               <Link
                  // className={choice ? null : 'disabled-link'}
                  to="/compare/materials"
               >
                  <button type="button" onClick={handleClick3}>
                     Next
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CategoryOption2;
