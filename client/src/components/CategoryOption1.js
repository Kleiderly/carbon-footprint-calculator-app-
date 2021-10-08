import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import './css/Cover.css';

import CategoryItemBox1 from './CategoryItemBox1';
import { itemList } from './data';
import Context from "../contexts/ContextApi";



  

const CategoryOption1 = (props) => {

   const {ItemTypeAdress1, setItemTypeAdress1} = useContext(Context);

   const [selected, setSelected] = useState('');
   const [selectType, setSelectType] = useState("../img/items-images/t-shirtW.png");
   console.log(selected)
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

   const mapOnItemClickImageClassHandler = (item, i) => {
      setSelectType(item.adress)
      setSelected(i)
   }

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">Choose Your Item</p>
               <br />

               <div className='beforeClickCategory'>
                  <img src={selectType} alt="" />
               </div>
            </div>
         </div>
         <div className="typeOfItemContainer">
            {itemList.map((item, i) => (
               <div onClick={() => mapOnItemClickImageClassHandler(item, i)} key={item.id} >
                  <CategoryItemBox1
                     index={i}
                     type={item.type}
                     adress={item.adress}
                     selected={selected}
                  />
               </div>
            ))}
         </div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/calculate/materials">
               <button type="button" onClick={()=> setItemTypeAdress1(selectType)}>Calculate</button>
            </Link>
         </div>
      </div>
   );
};

export default CategoryOption1;
