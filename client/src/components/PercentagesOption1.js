import React, { useContext } from 'react';
import Context from '../contexts/ContextApi';
import { itemListBlack } from './data';
import { Link, useHistory } from 'react-router-dom';
import './css/Percentages.css';
// import { divModeExecute } from 'tsparticles';
import './css/vivify.min.css';

const PercentagesOption1 = (props) => {
   const {
      itemTypeAdress1,

      materialCO2e1,

      fasteningCO2e1,

      countryCO2e1,

      totalCo2e1,
   } = useContext(Context);

// Switch image to black
  const imgName1 = itemTypeAdress1.substring(20,23)
  const itemTypeAdress1Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName1
    })
    .map((name)=> {
      return name.adress
  })

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/results');
   };

   return (
      <div className="percentages-wrapper vivify fadeIn">

         <p className="percentages-title">Co2E Details</p>
         <div className="percentages-main-container">
            <div className="percentages-item-group">
               <div className="percentages-after-click">
                  <img src={itemTypeAdress1Black} alt={itemTypeAdress1} className="percentages-img-cover1" />
               </div>
            </div>

            <div className="percentages-container2-1 vivify fadeIn delay-500">
               <div>
                  <div><b>Material:</b></div>
                  <div><b>Fastenings:</b></div>
                  <div><b>Logistics:</b></div>
                  <div>&nbsp;</div>
                  <div><b>TOTAL:</b></div>
               </div>
               <div>&nbsp;&nbsp;&nbsp;</div>
               <div>
                  <div>{materialCO2e1.toFixed(2)}</div>
                  <div>{fasteningCO2e1.toFixed(2)}</div>
                  <div>{countryCO2e1.toFixed(2)}</div>
                  <div>&nbsp;</div>
                  <div>{totalCo2e1.toFixed(2)}</div>
               </div>
            </div>
         </div>

         <p className="percentages-explanation">Text explaining the Co2E principles, etc.</p>
         
         <span className="percentages-go-back" onClick={handleClickPreviousSection}>
            GO BACK TO RESULTS
         </span>
         <br />

         <Link to="/">
            <button type="button">COMPARE NEW ITEMS</button>
         </Link>
      </div>
   );
};

export default PercentagesOption1;
