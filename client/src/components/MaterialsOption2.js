import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router';
import axios from 'axios';
import Context from '../contexts/ContextApi';
// import Tips from './Tips';
import MaterialsItemBox2 from './MaterialsItemBox2';
import { itemList } from './data';
import './css/Category.css';
import './css/Materials.css';

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

   console.log(itemTypeAdress1);
   console.log(itemTypeAdress2);
   console.log(selectMaterial1);
   console.log(selectMaterial2);

   return (
      <div className="choiceContainer">
         <p>Clothes</p>
         <div>
            <div>
               <br />
               <p className="directionText">Choose Your Materials</p>
               <br />
               <div className="itemsContainer">
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                  </div>
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress2} alt={itemTypeAdress2} />
                  </div>
               </div>
            </div>
         </div>
         <div className="materialBigContainer">
            <div className="materialContainer">
               {materials.map((item) => (
                  <div
                     onClick={() =>
                        selectMaterial1
                           ? setSelectMaterial2(item.co2e)
                           : setSelectMaterial1(item.co2e)
                     }
                     key={item.id}
                  >
                     <MaterialsItemBox2 name={item.name} />
                  </div>
               ))}
            </div>
            <div className="materialContainer">
               {materials.map((item) => (
                  <div
                     onClick={() =>
                        selectMaterial1
                           ? setSelectMaterial2(item.co2e)
                           : setSelectMaterial1(item.co2e)
                     }
                     key={item.id}
                  >
                     <MaterialsItemBox2 name={item.name} />
                  </div>
               ))}
            </div>
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/fastenings">
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </Link>
      </div>
   );
};

export default MaterialsOption2;
