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
               <div className="percentages-after-click light-accent-bg">
                  <img src={itemTypeAdress1Black} alt={itemTypeAdress1} className="percentages-img-cover1" />
               </div>
            </div>

            <div className="percentages-container2-1 light-accent-bg vivify fadeIn delay-500">
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

         <div className="percentages-explanation vivify fadeIn delay-1000">
            <span className="percentages-co2e-title">What is CO2e?</span>
            <p>
               “Carbon dioxide equivalent” or “CO2e” is a term for describing different 
               greenhouse gases in a common unit. It takes into account the quantity and 
               type of greenhouse gas, and it’s equivalent global warming impact. 
            </p>
            <ul className="percentages-table">
               <li><b>1kg CO2e</b> = emitted per year by charging 1 phone per day</li>
               <li><b>35 kg CO2e</b> = 100km drive using Petrol</li>
               <li><b>150 kg CO2e</b> = 1 way flight from Berlin to Munich</li>
               <li><b>400 kg CO2e</b> = 1 roundtrip flight from Berlin to London</li>
            </ul>
               For more information, read <b><a href="#" target="new">here</a></b>. 
         </div>
         
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
