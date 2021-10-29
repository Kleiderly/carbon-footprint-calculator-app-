import React, { useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import { itemListBlack } from './data';
import './css/Percentages.css';
import './css/vivify.min.css';

const PercentagesOption2 = (props) => {
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
      totalCo2e2,
   } = useContext(Context);

  // Switch image to black
  const imgName1 = itemTypeAdress1.substring(20,23)
  const itemTypeAdress1Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName1
    })
    .map((name)=> {
      return name.adress
  })
  const imgName2 = itemTypeAdress2.substring(20,23)
  const itemTypeAdress2Black = itemListBlack.filter((item)=> {
    return item.adress.substring(20,23) === imgName2
    })
    .map((name)=> {
      return name.adress
  })

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/results');
   };

   return (
      <div className="percentages-wrapper vivify fadeIn">

         <p className="percentages-title">Co2E Details</p>
         <div className="percentages-main-container2">
               <div className="percentages-item-group">
                  <div className={totalCo2e1 > totalCo2e2 ? "percentages-before-click" : "percentages-after-click light-accent-bg"}>
                     <img src={totalCo2e1 > totalCo2e2 ? itemTypeAdress1 : itemTypeAdress1Black} alt={itemTypeAdress1} className="percentages-img-cover" />
                     <div className={totalCo2e1 > totalCo2e2 ? "percentages-img-text light-accent-text" : "light-accent-bg"}>
                        First item
                        <p className={totalCo2e1 > totalCo2e2 ? "percentages-carbon-result vivify popIn delay-1000 light-accent-text" : "percentages-carbon-result vivify popIn delay-1000"}>Total: {totalCo2e1}</p>
                     </div>
                  </div>
               </div>

               <div className="percentages-item-group">
                     <div className={totalCo2e1 < totalCo2e2 ? "percentages-before-click" : "percentages-after-click light-accent-bg"}>
                        <img src={totalCo2e1 < totalCo2e2 ? itemTypeAdress2 : itemTypeAdress2Black} alt={itemTypeAdress2} className="percentages-img-cover" />
                        <div className={totalCo2e1 < totalCo2e2 ? "percentages-img-text light-accent-text" : "light-accent-bg"}>
                           Second item
                           <p className={totalCo2e1 < totalCo2e2 ? "percentages-carbon-result vivify popIn delay-1000 light-accent-text" : "percentages-carbon-result vivify popIn delay-1000"}>Total: {totalCo2e2}</p>
                     </div>
                  </div>
               </div>
         </div>

         <div className="percentages-container2 light-accent-bg vivify fadeIn delay-500">
            <div className="percentages-totals">
               <div className="percentages-detail"><b>First item</b></div>
               <div className="percentages-detail">{materialCO2e1.toFixed(2)}</div>
               <div className="percentages-detail">{fasteningCO2e1.toFixed(2)}</div>
               <div className="percentages-detail">{countryCO2e1.toFixed(2)}</div>
               <div className="percentages-detail">&nbsp;</div>
               <div className="percentages-detail">{totalCo2e1.toFixed(2)}</div>
            </div>
            <div className="percentages-categories">
               <div className="percentages-detail">&nbsp;</div>
               <div className="percentages-detail"><b>Material</b></div>
               <div className="percentages-detail"><b>Fastenings</b></div>
               <div className="percentages-detail"><b>Logistics</b></div>
               <div className="percentages-detail">&nbsp;</div>
               <div className="percentages-detail"><b>TOTAL</b></div>
            </div>
            <div className="percentages-totals">
               <div className="percentages-detail"><b>Second item</b></div>
               <div className="percentages-detail">{materialCO2e2.toFixed(2)}</div>
               <div className="percentages-detail">{fasteningCO2e2.toFixed(2)}</div>
               <div className="percentages-detail">{countryCO2e2.toFixed(2)}</div>
               <div className="percentages-detail">&nbsp;</div>
               <div className="percentages-detail">{totalCo2e2.toFixed(2)}</div>
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

export default PercentagesOption2;
