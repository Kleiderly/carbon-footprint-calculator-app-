import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import LogisticsItemBox2 from './MaterialsItemBox2';
import axios from 'axios';
import Tips from './Tips';

function Logistics(props) {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setMaterialCO2e1,
      setMaterialCO2e2,
      setFasteningCO2e1,
      setFasteningCO2e2,
      setCountryCO2e1,
      setCountryCO2e2,
   } = useContext(Context);

   //For data from database
   const [countriesFrom, setCountriesFrom] = useState([]);

   //For selection by user through button click
   const [selectCountry1, setSelectCountry1] = useState(null);
   const [selectCountry2, setSelectCountry2] = useState(null);

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/logistic`)
         .then((response) => setCountriesFrom(response.data))
         .catch((error) => {
            console.log(error);
         });
   }, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/fastenings');
   };

   const handleClick = () => {
      setCountryCO2e1(selectCountry1);
      setCountryCO2e2(selectCountry2);
   };

   //  console.log(itemTypeAdress1);
   //  console.log(itemTypeAdress2);
   //  console.log(selectMaterial1);
   //  console.log(selectMaterial2);

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">Where Is Your Product From?</p>
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
               {countriesFrom.map((item) => (
                  <div
                     onClick={() =>
                        selectCountry1
                           ? setSelectCountry2(item.co2e)
                           : setSelectCountry1(item.co2e)
                     }
                     key={item.id}
                  >
                     <LogisticsItemBox2 name={item.productionLocation} />
                  </div>
               ))}
            </div>
            <div className="materialContainer">
               {countriesFrom.map((item) => (
                  <div
                     onClick={() =>
                        selectCountry2
                           ? setSelectCountry2(item.co2e)
                           : setSelectCountry1(item.co2e)
                     }
                     key={item.id}
                  >
                     <LogisticsItemBox2 name={item.productionLocation} />
                  </div>
               ))}
            </div>
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/results">
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </Link>
      </div>
   );
}

export default Logistics;
