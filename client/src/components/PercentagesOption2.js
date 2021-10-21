import React, { useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Percentages.css';

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

   //    useEffect(() => {}, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/results');
   };

   return (
      <div className="percentages-wrapper">

         <p className="percentages-title">Co2E Details</p>
         <div className="percentages-main-container2">
               <div className="percentages-item-group">
                  <div className={totalCo2e1 > totalCo2e2 ? "percentages-before-click" : "percentages-after-click"}>
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} className="percentages-img-cover" />
                     <div>
                        First item
                        <p className="percentages-carbon-result">Total: {totalCo2e1.toFixed(2)}</p>
                     </div>
                  </div>
               </div>

               <div className="percentages-item-group">
                  <div className={totalCo2e1 < totalCo2e2 ? "percentages-before-click" : "percentages-after-click"}>
                     <img src={itemTypeAdress2} alt={itemTypeAdress2} className="percentages-img-cover" />
                     <div>
                        Second item
                        <p className="percentages-carbon-result">Total: {totalCo2e2.toFixed(2)}</p>
                     </div>
                  </div>
               </div>
         </div>

         <div className="percentages-container2">
            <div className="percentages-totals">
               <div className="percentages-detail">{materialCO2e1.toFixed(2)}</div>
               <div className="percentages-detail">{fasteningCO2e1.toFixed(2)}</div>
               <div className="percentages-detail">{countryCO2e1.toFixed(2)}</div>
               <div>&nbsp;</div>
               <div className="percentages-detail">{totalCo2e1.toFixed(2)}</div>
            </div>
            <div className="percentages-categories">
               <div className="percentages-detail"><b>Material</b></div>
               <div className="percentages-detail"><b>Fastenings</b></div>
               <div className="percentages-detail"><b>Logistics</b></div>
               <div>&nbsp;</div>
               <div className="percentages-detail"><b>TOTAL</b></div>
            </div>
            <div className="percentages-totals">
               <div className="percentages-detail">{materialCO2e2.toFixed(2)}</div>
               <div className="percentages-detail">{fasteningCO2e2.toFixed(2)}</div>
               <div className="percentages-detail">{countryCO2e2.toFixed(2)}</div>
               <div>&nbsp;</div>
               <div className="percentages-detail">{totalCo2e2.toFixed(2)}</div>
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

export default PercentagesOption2;
