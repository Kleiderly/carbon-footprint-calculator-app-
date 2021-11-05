import React, { useEffect, useContext, useState } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import { itemListBlack } from './data';
import ButtonShareModal from './ButtonShareModal';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
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

  // Switch image to black
  const imgName1 = itemTypeAdress1.substring(20,23)
  const itemTypeAdress1Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName1
    })
    .map((name)=> {
      return name.adress
  })

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
      <div className="results-wrapper vivify popIn delay-500">
         <Confetti
            width={width}
            height={height}
            colors={['#F7EBE8', '#0E2823']}
            opacity={opacity}
            gravity={0.05}
         />

         <p className="results-title">Result!</p>

         <div className="results-items-container">
            <div className="results-after-click light-accent-bg">
               <img src={itemTypeAdress1Black} alt={itemTypeAdress1} className="results-img-cover1" />
               <div className="results-carbon-result vivify popIn delay-1000">
                  Co2E: {totalCo2e1}
               </div>
            </div>
         </div>
         
         <div className="results-explanation">
            <span className="results-thanks-text">
               Thank you for being a conscious consumer.
            </span>
            <p>
               Taking the time to calculate your 
               fashion footprint is an important step.
            </p>
            <p>
               Want to reduce your impact? Read our 
               tips <b><a href="https://kleiderly.com/blogs/kleiderly-magazine" target="new">here</a></b>.
            </p>
         </div>

         <Link to="/calculate/percentages" className="results-details">
            SEE DETAILS
         </Link>

         <div className="results-explanation">
            Thank you for comparing your items purchases with us. It's important to use data to make 
            more sustainable decisions, and we hope we helped you with this process. Please take a 
            screenshot of your results and share with your friends and family. The more consumers we 
            have tracking their carbon footprint, the more aware we become collectively and can understand 
            how to reduce it.
         </div>
         <ButtonShareModal />

         <br />
         <Link to="/">
            <button type="button">CALCULATE ANOTHER ITEM</button>
         </Link>
      </div>
   );
};

export default ResultsOption1;
