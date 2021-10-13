import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import './css/Results.css';

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
      totalCo2e1,
      setTotalCo2e1,
      totalCo2e2,
      setTotalCo2e2,
      percentage,
      setPercentage,
   } = useContext(Context);

   //Calculation
   // const [totalCo2e1, setTotalCo2e1] = useState();
   // const [totalCo2e2, setTotalCo2e2] = useState();
   // const [percentage, setPercentage] = useState();

   useEffect(() => {
      setTotalCo2e1((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4));
      setTotalCo2e2((materialCO2e2 + fasteningCO2e2 + countryCO2e2).toFixed(4));
   }, [
      materialCO2e1,
      fasteningCO2e1,
      countryCO2e1,
      materialCO2e2,
      fasteningCO2e2,
      countryCO2e2,
   ]);
   console.log(totalCo2e1);

   useEffect(() => {
      setPercentage(
         (totalCo2e1 > totalCo2e2
            ? (1 - totalCo2e2 / totalCo2e1) * 100
            : (1 - totalCo2e1 / totalCo2e2) * 100
         ).toFixed(2)
      );
   }, [totalCo2e1, totalCo2e2]);

   console.log(percentage);
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
               <div className="resultsBigContainer">
                  <div className="resultsContainer">
                     <div className="beforeClickCategory">
                        <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                     </div>
                     <p>Carbon Footprint: {totalCo2e1}</p>
                  </div>
                  <div className="resultsContainer">
                     <div className="beforeClickCategory">
                        <img src={itemTypeAdress2} alt={itemTypeAdress2} />
                     </div>
                     <p>Carbon Footprint: {totalCo2e2}</p>
                  </div>
               </div>
               <h3>
                  The {totalCo2e1 < totalCo2e2 ? 'First Item' : 'Second Item'}{' '}
                  is better than the{' '}
                  {totalCo2e1 > totalCo2e2 ? 'First Item' : 'Second Item'} by{' '}
                  {percentage} percent
               </h3>
            </div>
         </div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link to="/compare/percentages">
            <button type="button">Check Summary</button>
         </Link>
         <Link to="/">
            <button type="button">Compare New Items</button>
         </Link>
      </div>
   );
};

export default ResultsOption2;
