import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ItemBox from './ItemBox';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import Tips from './Tips';
import './css/Logistics.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LogisticsOption1 = (props) => {
   const { itemTypeAdress1, setCountryCO2e1 } = useContext(Context);

   //For data from database
   const [countriesFrom, setCountriesFrom] = useState([]);

   //For selection by user through button click
   const [selectCountry1, setSelectCountry1] = useState(null);

   const [selected, setSelected] = useState(null);

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
      history.push('/calculate/fastenings');
   };

   const handleClick = () => {
      setCountryCO2e1(selectCountry1);
      //   setCountryCO2e2(selectCountry2);
   };

   const handleClickMappedItem = (item, i) => {
      setSelectCountry1(item.co2e);
      setSelected(i);
   };

   return (
      <div className="logistics-choice-container">
         <ProgressBar stage={3} previous="Fastenings" next="Results" />
         <div>
            <div>
               <p className="logistics-direction-text">
                  Where was it produced?
               </p>
               <div className="logistics-items-container ">
                  <div className="logistics-before-click-category">
                     <img
                        src={itemTypeAdress1}
                        alt={itemTypeAdress1}
                        className="logistics-img-cover"
                     />
                     <span className="logistics-small-text">Origin</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="logistics-big-container">
            <div className="logistics-container">
               {countriesFrom.map((item, i) => (
                  <div
                     onClick={() => handleClickMappedItem(item, i)}
                     key={item._id}
                  >
                     <ItemBox
                        name={item.productionLocation}
                        index={i}
                        selected={selected}
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="category-back-next-buttons">
            <button
               className="back-button"
               type="button"
               onClick={handleClickPreviousSection}
            >
               BACK
            </button>

            {selectCountry1 ? (
               <Link to="/calculate/results">
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
                  <div>Please make your selection!</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="logistics" />
         </div>
      </div>
   );
};

export default LogisticsOption1;
