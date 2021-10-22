import React, { useEffect, useContext, useState } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Results.css';
import ButtonShareModal from './ButtonShareModal';
import './css/vivify.min.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

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

   //  ANIMATION STATES
   const [opacity, setOpacity] = useState(0.5);
   const { width, height } = useWindowSize();

   useEffect(() => {
      setTotalCo2e1(
         Number((materialCO2e1 + fasteningCO2e1 + countryCO2e1).toFixed(4))
      );
      setTotalCo2e2(
         Number((materialCO2e2 + fasteningCO2e2 + countryCO2e2).toFixed(4))
      );

      setPercentage(
         totalCo2e1 > totalCo2e2
            ? ((1 - totalCo2e2 / totalCo2e1) * 100).toFixed(2)
            : ((1 - totalCo2e1 / totalCo2e2) * 100).toFixed(2)
      );
   }, [
      materialCO2e1,
      fasteningCO2e1,
      countryCO2e1,
      materialCO2e2,
      fasteningCO2e2,
      countryCO2e2,
      totalCo2e2,
      totalCo2e1,
   ]);

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
   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/logistics');
   };

   const messageUneven = (
      <span className="results-message">
         The <b>{totalCo2e1 < totalCo2e2 ? 'first item' : 'second item'} </b>
         is <b>{percentage}%</b> more eco-responsible than the
         <b> {totalCo2e1 > totalCo2e2 ? 'first Item' : 'second Item'}</b>.
      </span>
   );

   const messageEven = <span className="results-message">It's a tie!</span>;

   return (
      <div className="results-wrapper vivify popIn delay-500">
         <Confetti
            width={width}
            height={height}
            colors={['#F7EBE8', '#0E2823']}
            opacity={opacity}
            gravity={0.05}
         />

         <p className="results-title">Results!</p>
         <div className="results-main-container">
            <div className="results-item-group">
               <div
                  className={
                     totalCo2e1 < totalCo2e2
                        ? 'results-before-click'
                        : 'results-after-click'
                  }
               >
                  <img
                     src={itemTypeAdress1}
                     alt={itemTypeAdress1}
                     className="results-img-cover"
                  />
                  <div>
                     First item
                     <p className="results-carbon-result vivify popIn delay-1000">
                        Total: {totalCo2e1}
                     </p>
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
               <ButtonShareModal />
            </div>

            <div className="results-item-group">
               <div
                  className={
                     totalCo2e1 > totalCo2e2
                        ? 'results-before-click'
                        : 'results-after-click'
                  }
               >
                  <img
                     src={itemTypeAdress2}
                     alt={itemTypeAdress2}
                     className="results-img-cover"
                  />
                  <div>
                     Second item
                     <p className="results-carbon-result vivify popIn delay-1000">
                        Total: {totalCo2e2}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {totalCo2e1 === totalCo2e2 ? messageEven : messageUneven}

         <Link to="/compare/percentages" className="results-details">
            SEE DETAILS
         </Link>
         <ButtonShareModal />
         <Link to="/">
            <button type="button">COMPARE NEW ITEMS</button>
         </Link>
      </div>
   );
};

export default ResultsOption2;
