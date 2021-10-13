import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ItemBox from './ItemBox';
import axios from 'axios';
import Tips from './Tips';

function Logistics(props) {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setCountryCO2e1,
      setCountryCO2e2,
   } = useContext(Context);

   //For data from database
   const [countriesFrom, setCountriesFrom] = useState([]);

   //For selection by user through button click
   const [selectCountry1, setSelectCountry1] = useState(null);
   const [selectCountry2, setSelectCountry2] = useState(null);

   const [selected1, setSelected1] = useState('');
   const [selected2, setSelected2] = useState('');

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

   const handleClickMappedItem1 = (item, i) => {
      setSelectCountry1(item.co2e);
      setSelected1(i);
   };

   const handleClickMappedItem2 = (item, i) => {
      setSelectCountry2(item.co2e);
      setSelected2(i);
   };
   //  console.log(itemTypeAdress1);
   //  console.log(itemTypeAdress2);
   console.log(selectCountry1);
   console.log(selectCountry2);

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
               {countriesFrom.map((item, i) => (
                  <div
                     onClick={() => handleClickMappedItem1(item, i)}
                     key={item._id}
                  >
                     <ItemBox
                        name={item.productionLocation}
                        index={i}
                        selected={selected1}
                     />
                  </div>
               ))}
            </div>
            <div className="materialContainer">
               {countriesFrom.map((item, i) => (
                  <div
                     onClick={() => handleClickMappedItem2(item, i)}
                     key={item._id}
                  >
                     <ItemBox
                        name={item.productionLocation}
                        index={i}
                        selected={selected2}
                     />
                  </div>
               ))}
            </div>
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/results" className={selectCountry1 && selectCountry2 ? null : 'disabled-link'}>
            <button type="button" onClick={handleClick}>
               Next
            </button>
         </Link>
      </div>
   );
}

export default Logistics;
