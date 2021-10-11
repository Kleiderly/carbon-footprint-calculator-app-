import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import './css/Category.css';
import FasteningsItemBox2 from './FasteningsItemBox2';

const FasteningsOption2 = () => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setMaterialCO2e1,
      setMaterialCO2e2,
      setFasteningCO2e1,
      setFasteningCO2e2,
   } = useContext(Context);

   //For data from database
   const [fastenings, setFastenings] = useState([]);

   const [selectFastening1, setSelectFastening1] = useState({
      plasticButton1: 0,
      metalButton1: 0,
      zip1: 0,
   });
   const [selectFastening2, setSelectFastening2] = useState({
      plasticButton2: 0,
      metalButton2: 0,
      zip2: 0,
   });

   const [plastic1, setPlastic1] = useState(0);
   const [metal1, setMetal1] = useState(0);
   const [zipper1, setZipper1] = useState(0);
   const [plastic2, setPlastic2] = useState(0);
   const [metal2, setMetal2] = useState(0);
   const [zipper2, setZipper2] = useState(0);

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/fastening`)
         .then((response) => {
            console.log(response.data);
            setFastenings(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      setSelectFastening1({
         ...selectFastening1,
         plasticButton1: Number(plastic1),
         metalButton1: Number(metal1),
         zip1: Number(zipper1),
      });
      setSelectFastening2({
         ...selectFastening2,
         plasticButton2: Number(plastic2),
         metalButton2: Number(metal2),
         zip2: Number(zipper2),
      });
   };
   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/materials');
   };
   const handleClick = () => {
      console.log('handleClick');
      setFasteningCO2e1(selectFastening1);
      setFasteningCO2e2(selectFastening2);
   };
   console.log(selectFastening1);
   console.log(selectFastening2);

   return (
      <div>
         <div>
            <div>
               <br />
               <p className="directionText">Choose Your Fastenings</p>
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

         {/* <div className="materialBigContainer">
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
                     <FasteningsItemBox2 name={item.name} />
                  </div>
               ))}
            </div>
            <div className="materialContainer">
               {fastenings.map((item) => (
                  <div
                     onClick={() =>
                        selectMaterial1
                           ? setSelectMaterial2(item.co2e)
                           : setSelectMaterial1(item.co2e)
                     }
                     key={item.id}
                  >
                     <FasteningsItemBox2 name={item.name} />
                  </div>
               ))}
            </div>
         </div> */}

         <form onSubmit={handleSubmit}>
            <div>
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setPlastic1(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setMetal1(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setZipper1(e.target.value)}
               />
            </div>
            <div>
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setPlastic2(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setMetal2(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setZipper2(e.target.value)}
               />
            </div>
            <button type="submit">Add</button>
         </form>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/logistics">
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </Link>
      </div>
   );
};

export default FasteningsOption2;
