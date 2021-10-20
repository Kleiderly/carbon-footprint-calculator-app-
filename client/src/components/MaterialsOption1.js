import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import ItemBox from './ItemBox';
import ProgressBar from './ProgressBar';
import Tips from './Tips';
import './css/Materials.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MaterialsOption1 = (props) => {
   const { itemTypeAdress1, setMaterialCO2e1 } = useContext(Context);

   const [selected, setSelected] = useState('');
   const [materials, setMaterials] = useState([]);
   const [selectMaterial1, setSelectMaterial1] = useState(null);

   console.log(itemTypeAdress1);

   const handleClickMappedItem = (item, i) => {
      setSelectMaterial1(item.co2e);
      setSelected(i);
   };

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/material`)
         .then((response) => {
            setMaterials(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/category');
   };

   return (
      <div className="material-wrapper">
         <ProgressBar stage={1} previous="Choice" next="Fastenings" />
         <p className="title">What material is it made of?</p>
         <div className="material-items-container">
            <div className="material-before-click">
               <img
                  src={itemTypeAdress1}
                  alt={itemTypeAdress1}
                  className="material-img-cover"
               />
               <span className="material-small-text">Material</span>
            </div>
         </div>

         <div className="material-container1">
            {materials.map((item, i) => (
               <div onClick={() => handleClickMappedItem(item, i)} key={item._id} >
                  <ItemBox index={i} name={item.name} selected={selected} />
               </div>
            ))}
         </div>

         <div className="category-back-next-buttons">
            <button className="back-button" type="button" onClick={handleClickPreviousSection} >
               BACK
            </button>

            {selectMaterial1 ? (
               <Link to="/calculate/fastenings">
                  <button
                     className="next-button" type="button" onClick={() => setMaterialCO2e1(selectMaterial1)} >
                     NEXT
                  </button>
               </Link>
            ) : (
               <Popup trigger={<button className="next-button"> NEXT</button>} position="top center" >
                  <div className="pop-up-box">Please make a selection.</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="materials" />
         </div>
      </div>
   );
};

export default MaterialsOption1;
