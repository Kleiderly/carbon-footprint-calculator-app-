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
   const [choice, setChoice] = useState('');
   const [selectType1, setSelectType1] = useState(null);
   const [selectType2, setSelectType2] = useState(null);

   //To Go Back
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

   const handleClick3 = () => {
      setItemTypeAdress1(selectType1);
      setItemTypeAdress2(selectType2);
   };

   console.log(selectType1);
   console.log(selectType2);

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
                        selectType1
                           ? setSelectType2(item.adress)
                           : setSelectType1(item.adress)
                     }
                     key={item.id}
                  >
                     <CategoryItemBox2
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
