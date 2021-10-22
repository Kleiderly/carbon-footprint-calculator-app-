import React, { useEffect, useContext, useState } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ButtonShareModal from './ButtonShareModal';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
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

  //  ANIMATION STATES
  const [opacity, setOpacity] = useState(0.5);
  const { width, height } = useWindowSize();

  // ANIMATION useEffect
  useEffect(() => {
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 5000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 7000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 9000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.1);
    }, 11000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 13000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 13500);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 14000);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 14500);
    setTimeout(() => {
      setOpacity((opacity) => opacity - 0.02);
    }, 15000);
  }, []);
  
   //Calculation
   useEffect(() => {
      setTotalCo2e1(
         Number((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4))
      );
   }, [materialCO2e1, fasteningCO2e1, countryCO2e1]);
   console.log(totalCo2e1);
   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/logistics');
   };

   return (
<<<<<<< HEAD
      <div className="results-choice-container">
         <div>
            <div>
               <p className="results-direction-text">Results!</p>
               <div className="results-items-container">
                  <div className="results-before-click-category">
                     <img
                        src={itemTypeAdress1}
                        alt={itemTypeAdress1}
                        className="results-img-cover"
                     />
                  </div>
               </div>
            </div>
         </div>

         <div>Carbon Footprint: {totalCo2e1}</div>

         <span
            className="results-back-link"
            onClick={handleClickPreviousSection}
         >
            Go Back
         </span>
         <Link to="/calculate/percentages">
            <button type="button">Check Details</button>
=======
      <div className="results-wrapper vivify popIn delay-500">
        <Confetti
        width={width}
        height={height}
        colors={["#F7EBE8", "#0E2823"]}
        opacity={opacity}
        gravity={0.05}
        />

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
>>>>>>> a11e4b11673d8ee8d8b738a80b3b9b7f8de248e5
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
