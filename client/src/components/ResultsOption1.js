import React, { useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ButtonShareModal from './ButtonShareModal';
import './css/Results.css';
import './css/vivify.min.css';

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
      <div className="results-wrapper vivify popIn delay-500">

         <p className="results-title">Result!</p>

         <div className="results-items-container">
            <div className="results-before-click">
               <img src={itemTypeAdress1} alt={itemTypeAdress1} className="results-img-cover1" />
               <div className="results-carbon-result vivify popIn delay-1000">
                  Total: {totalCo2e1}
               </div>
            </div>
         </div>
  
         <Link to="/calculate/percentages" className="results-details">
            SEE DETAILS
         </Link>
         <p className="results-explanation">Text explaining what this means.</p>

         <ButtonShareModal />
         
         <Link to="/">
            <button type="button">CALCULATE ANOTHER ITEM</button>
         </Link>
      </div>
   );
};

export default ResultsOption1;
