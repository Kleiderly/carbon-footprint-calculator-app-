import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import CategoryItemBox1 from './CategoryItemBox1';
import { itemList } from './data';
import ProgressBar from './ProgressBar';
import Context from '../contexts/ContextApi';
import './css/vivify.min.css';

const CategoryOption1 = (props) => {
   const { setItemTypeAdress1 } = useContext(Context);

   const [selected, setSelected] = useState('');
   const [selectType, setSelectType] = useState(
      '../img/items-images/t-shirtW.png'
   );
   console.log(selected);
   console.log(selectType);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

   const mapOnItemClickImageClassHandler = (item, i) => {
      setSelectType(item.adress);
      setSelected(i);
   };

   return (
      <div className="category-wrapper">
         <div className="swoopInTop vivify delay-100">
            <ProgressBar stage={0} previous="Start" next="Material" />
         </div>
         <div>
            <div>
               <p className="category-title">Choose your item</p>
               <div className="category-items-container fadeIn vivify">
                  <div className="category-before-click">
                     <img src={selectType} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className="category-type-of-item-container">
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
         <div className="category-back-next-buttons">
            <button className="back-button" type="button" onClick={handleClickPreviousSection} >
               BACK
            </button>
            <Link className={selectType ? null : 'disabled-link'} to="/calculate/materials" >
               <button className="next-button" type="button" onClick={() => setItemTypeAdress1(selectType)} >
                  NEXT
               </button>
            </Link>
         </div>
      </div>
   );
};

export default CategoryOption1;
