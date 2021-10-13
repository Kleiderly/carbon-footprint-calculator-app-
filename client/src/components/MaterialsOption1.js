import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import ItemBox from './ItemBox';
import './css/Category.css';
import './css/Materials.css';
import './css/ItemBox.css';

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
      <div className="choiceContainer">
         <br />
         <p className="directionText">Choose Your Material</p>
         <br />
         <div className="itemsContainer">
            <div className="beforeClick">
               <img
                  src={itemTypeAdress1}
                  alt="firstBoxImage"
                  className="imgCover"
               />
            </div>
         </div>

         <div className="materialContainer">
            {materials.map((item, i) => (
               <div
                  onClick={() => handleClickMappedItem(item, i)}
                  key={item._id}
               >
                  <ItemBox index={i} name={item.name} selected={selected} />
               </div>
            ))}
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/calculate/fastenings">
               <button
                  type="button"
                  onClick={() => setMaterialCO2e1(selectMaterial1)}
               >
                  Next
               </button>
            </Link>
         </div>
      </div>
   );
};

export default MaterialsOption1;
