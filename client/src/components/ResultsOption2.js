import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';

const ResultsOption2 = (props) => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      materialCO2e1,
      materialCO2e2,
      fasteningCO2e1,
      fasteningCO2e2,
      countryCO2e1,
      countryCO2e2,
   } = useContext(Context);

   //Calculation
   const [totalCo2e, setTotalCo2e] = useState();
   const [totalCo2e2, setTotalCo2e2] = useState();

   useEffect(() => {
      setTotalCo2e((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4));
      setTotalCo2e2((materialCO2e2 + fasteningCO2e2 + countryCO2e2).toFixed(4));
   }, [
      materialCO2e1,
      fasteningCO2e1,
      countryCO2e1,
      materialCO2e2,
      fasteningCO2e2,
      countryCO2e2,
   ]);
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
                  <div>
                     The total carbon footprint of your item is {totalCo2e}
                  </div>
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                  </div>
                  <div>
                     The total carbon footprint of your item is {totalCo2e2}
                  </div>
               </div>
            </div>
         </div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/details">
            <button type="button">Check Details</button>
         </Link>
         {/* <Link to="/calculate/category">
        <button type="button">Calculate Another Item</button>
      </Link> */}
      </div>
   );
};

export default ResultsOption2;
