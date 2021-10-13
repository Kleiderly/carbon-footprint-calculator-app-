import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';

const ResultsOption1 = (props) => {
   const { itemTypeAdress1, materialCO2e1, fasteningCO2e1, countryCO2e1 } =
      useContext(Context);

   //Calculation
   const [totalCo2e, setTotalCo2e] = useState();

   useEffect(() => {
      setTotalCo2e((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4));
   }, [materialCO2e1, fasteningCO2e1, countryCO2e1]);
   console.log(totalCo2e);
   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/logistics');
   };

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">Results</p>
               <br />
               <div className="itemsContainer">
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                  </div>
               </div>
            </div>
         </div>

         <div>Carbon Footprint: {totalCo2e}</div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/details">
            <button type="button">Check Details</button>
         </Link>
         <Link to="/">
            <button type="button">Calculate Another Item</button>
         </Link>
      </div>
   );
};

export default ResultsOption1;
