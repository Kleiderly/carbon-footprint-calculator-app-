import React, { useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ButtonShareModal from './ButtonShareModal';
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
         <div>
            <div>
               <p className="results-direction-text">Results!</p>
               <div className="results-items-container">
                  <div className="results-before-click-category">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} className="results-img-cover" />
                  </div>
               </div>
            </div>
         </div>

         <div>Carbon Footprint: {totalCo2e1}</div>

         <span className="results-back-link" onClick={handleClickPreviousSection}>
            Go Back
         </span>
         <Link to="/calculate/percentages">
            <button type="button">Check Details</button>
         </Link>
         <Link to="/">
            <button type="button">Calculate Another Item</button>
         </Link>
         <ButtonShareModal />
      </div>
   );
};

export default ResultsOption1;
