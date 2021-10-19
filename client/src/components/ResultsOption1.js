import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ButtonShareModal from './ButtonShareModal';
import Leaves from './Leaves';
import './css/Results.css';

const ResultsOption1 = (props) => {
   const {
      itemTypeAdress1,
      materialCO2e1,
      fasteningCO2e1,
      countryCO2e1,
      totalCo2e1,
      setTotalCo2e1,
   } = useContext(Context);

   //Calculation
   useEffect(() => {
      setTotalCo2e1(Number((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4)));
   }, [materialCO2e1, fasteningCO2e1, countryCO2e1]);
   console.log(totalCo2e1);
   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/logistics');
   };

   return (
      <div className="results-choice-container">
      {/* <Leaves /> */}
         <div>
            <div>
               <p className="results-direction-text">Results!</p>
               <div className="results-items-container">
                  <div className="results-before-click-category">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} className="results-img-cover" />
                     <div className="results-carbon-result">
                        Total: {totalCo2e1}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className="results-explanation">Text explaining what this means.</p>

         {/* <span className="results-back-link" onClick={handleClickPreviousSection}>
            Go Back
         </span> */}
         <Link to="/calculate/percentages" className="results-details">
            SEE DETAILS
         </Link>

         <ButtonShareModal />
         
         <Link to="/">
            <button type="button">CALCULATE ANOTHER ITEM</button>
         </Link>
      </div>
   );
};

export default ResultsOption1;
