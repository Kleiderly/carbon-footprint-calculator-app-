import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Percentages.css';

const PercentagesOption1 = (props) => {
   const {
      itemTypeAdress1,

      materialCO2e1,

      fasteningCO2e1,

      countryCO2e1,

      totalCo2e1,
   } = useContext(Context);

   //    useEffect(() => {}, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/logistics');
   };

   return (
      <div className="percentages-wrapper">
         <div>
            <div>
               <p className="percentages-direction-text">Co2E Details</p>
               <div className="percentages-big-container">
                  <div className="percentages-container">
                     <div className="percentages-before-click-category">
                        <img src={itemTypeAdress1} alt={itemTypeAdress1} className="percentages-img-cover" />
                     </div>
                  </div>

                  <div className="percentages-container">
                     <div>
                        <div><b>Material:</b></div>
                        <div><b>Fastenings:</b></div>
                        <div><b>Logistics:</b></div>
                        <div><b>Total:</b></div>
                     </div>
                     <div>&nbsp;&nbsp;&nbsp;</div>
                     <div>
                        <div>{materialCO2e1}</div>
                        <div>{fasteningCO2e1}</div>
                        <div>{countryCO2e1}</div>
                        <div>{totalCo2e1}</div>
                     </div>
                  </div>

                  <p className="percentages-explanation">Text explaining the Co2E principles, etc.</p>
               </div>
            </div>

            <button type="button" onClick={handleClickPreviousSection}>
               BACK
            </button>
            <br />
            {/* <Link to="/calculate/details">
               <button type="button">Check Details</button>
            </Link> */}
            <Link to="/">
               <button type="button">COMPARE NEW ITEMS</button>
            </Link>
         </div>
      </div>
   );
};

export default PercentagesOption1;
