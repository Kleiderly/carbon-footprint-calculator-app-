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
import { tipsList } from './data';
import './css/vivify.min.css';

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

   const [tip, setTip] = useState('');

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

   // GETTING RANDOM TIP(literal object) FROM tipsList FROM data.js FILTERED BY CATEGORY
   useEffect(() => {
      const tips = tipsList.filter((tip) => tip.category === 'material');
      const tip = tips[Math.floor(Math.random() * tips.length)];
      setTip(tip);
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
      <div className="material-wrapper vivify fadeIn">
         <ProgressBar stage={1} previous="Choice" next="Fastenings" />

         <p className="material-title">What material are they made from?</p>

         <div className="material-items-container2 fadeIn vivify">
            <div className="material-item-group light-accent-bg">
               <div className="material-before-click light-accent-text">
                  <img src={itemTypeAdress1} alt={itemTypeAdress1} className="material-img-cover" />
                  <span className="material-img-text light-accent-text">1st Item</span>
               </div>

               <div className="material-container">
                  {materials.map((item, i) => (
                     <div
                        onClick={() => handleClickMappedItem1(item, i)}
                        key={item._id}
                     >
                        <ItemBox
                           index={i}
                           name={item.name}
                           selected={selected1}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div> </div>

            <div className="material-item-group light-accent-bg">
               <div className="material-before-click light-accent-text">
                  <img src={itemTypeAdress2} alt={itemTypeAdress2} className="material-img-cover" />
                  <span className="material-img-text light-accent-text">2nd Item</span>
               </div>

               <div className="material-container">
                  {materials.map((item, i) => (
                     <div
                        onClick={() => handleClickMappedItem2(item, i)}
                        key={item._id}
                     >
                        <ItemBox
                           index={i}
                           name={item.name}
                           selected={selected2}
                        />
                     </div>
                  ))}
               </div>
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
               <Popup trigger={<button className="next-button"> NEXT</button>}>
                  <div>Please make a selection.</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="materials" tipObj={tip} />
         </div>
      </div>
   );
};

export default MaterialsOption2;
