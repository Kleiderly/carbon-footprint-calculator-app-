import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import CategoryItemBox1 from './CategoryItemBox1';
import { itemList } from './data';
import ProgressBar from './ProgressBar';
import Context from '../contexts/ContextApi';

const CategoryOption1 = (props) => {
   const { setItemTypeAdress1 } = useContext(Context);

   const [selected, setSelected] = useState('');
   const [selectType, setSelectType] = useState(
      '../img/items-images/t-shirtW.png'
   );
   console.log(selected);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/');
   };

   const mapOnItemClickImageClassHandler = (item, i) => {
      setSelectType(item.adress);
      setSelected(i);
   };

   return (
      <div className="category-choice-container">
         <ProgressBar stage={0} previous="Start" next="Material" />
         <div>
            <div>
               <p className="category-direction-text">Choose your item</p>
               <div className="category-items-container">
                  <div className="category-before-click-category">
                     <img src={selectType} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className="category-type-of-item-container">
            {itemList.map((item, i) => (
               <div
                  onClick={() => mapOnItemClickImageClassHandler(item, i)}
                  key={item.id}
               >
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
            <button className="back-button" type="button" onClick={handleClickPreviousSection}>
               BACK
            </button>
               <Link to="/calculate/materials">
                  <button className="next-button"
                     type="button"
                     onClick={() => setItemTypeAdress1(selectType)}
                  >
                     NEXT
                  </button>
               </Link>
         </div>
      </div>
   );
};

export default CategoryOption1;
