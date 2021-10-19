import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import Tips from './Tips';
import ProgressBar from './ProgressBar';
import ItemBox from './ItemBox';
import './css/Materials.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MaterialsOption2 = (props) => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setMaterialCO2e1,
      setMaterialCO2e2,
   } = useContext(Context);

   //For data from database
   const [materials, setMaterials] = useState([]);

   //For selection by user through button click
   const [selectMaterial1, setSelectMaterial1] = useState(null);
   const [selectMaterial2, setSelectMaterial2] = useState(null);

   const [selected1, setSelected1] = useState('');
   const [selected2, setSelected2] = useState('');

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/material`)
         .then((response) => {
            console.log(response.data);
            setMaterials(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/category');
   };

   const handleClick = () => {
      setMaterialCO2e1(selectMaterial1);
      setMaterialCO2e2(selectMaterial2);
   };

   const handleClickMappedItem1 = (item, i) => {
      setSelectMaterial1(item.co2e);
      setSelected1(i);
   };

   const handleClickMappedItem2 = (item, i) => {
      setSelectMaterial2(item.co2e);
      setSelected2(i);
   };

   console.log(itemTypeAdress1);
   console.log(itemTypeAdress2);
   console.log(selectMaterial1);
   console.log(selectMaterial2);

   return (
      <div className="material-choice-container">
         <ProgressBar stage={1} previous="Choice" next="Fastenings" />
         <div>
            <div>
               <p className="material-direction-text">
                  What material are they made of?
               </p>
               <div className="material-items-container">
                  <div className="material-before-click">
                     <img
                        src={itemTypeAdress1}
                        alt={itemTypeAdress1}
                        className="material-img-cover"
                     />
                     <span>1st Item</span>
                  </div>
                  <div className="material-before-click-category">
                     <img src={itemTypeAdress2} alt={itemTypeAdress2} className="material-img-cover" />
                     <span>2nd Item</span>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="material-big-container">
            <div className="material-container">
               {materials.map((item, i) => (
                  <div
                     onClick={() => handleClickMappedItem1(item, i)}
                     key={item._id}
                  >
                     <ItemBox index={i} name={item.name} selected={selected1} />
                  </div>
               ))}
            </div>
            <div className="material-container">
               {materials.map((item, i) => (
                  <div
                     onClick={() => handleClickMappedItem2(item, i)}
                     key={item._id}
                  >
                     <ItemBox index={i} name={item.name} selected={selected2} />
                  </div>
               ))}
            </div>
         </div>

         <div className="material-back-next-buttons">
            <button
               className="back-button"
               type="button"
               onClick={handleClickPreviousSection}
            >
               BACK
            </button>

            {selectMaterial1 && selectMaterial2 ? (
               <Link to="/compare/fastenings">
                  <button
                     className="next-button"
                     type="button"
                     onClick={handleClick}
                  >
                     NEXT
                  </button>
               </Link>
            ) : (
               <Popup
                  trigger={<button className="next-button"> NEXT</button>}
                  position="top center"
               >
                  <div>Please make your selections!</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="materials" />
         </div>
      </div>
   );
};

export default MaterialsOption2;
