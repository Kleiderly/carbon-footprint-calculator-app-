import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
// import Tips from './Tips';
import MaterialsItemBox from './MaterialsItemBox';
import { itemList } from './data';
import './css/Category.css';
import './css/Materials.css';

const MaterialsOption1 = ({ browser }) => {
   const [choice, setChoice] = useState('');
   const [materials, setMaterials] = useState([]);
   const [selectMaterial1, setSelectMaterial1] = useState(null);

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
      history.push('/option-2');
   };

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };

   return (
      <div className="choiceContainer">
         <div>
            <br />
            <p className="directionText">Choose Your Material</p>
            <br />
            <div
               className={choice === '1' ? 'afterClick' : 'beforeClick'}
               //  onClick={handleClick1}
               value={choice}
            >
               <img src="./img/items-images/skirt.png" alt="firstBoxImage" />
            </div>
         </div>
         <div className="materialContainer">
            {materials.map((item) => (
               <div onClick={() => selectMaterial1(item.co2e)} key={item.id}>
                  <MaterialsItemBox name={item.name} />
               </div>
            ))}
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/fastenings">
               <button type="button">Calculate</button>
            </Link>
         </div>
      </div>
   );
};

export default MaterialsOption1;
