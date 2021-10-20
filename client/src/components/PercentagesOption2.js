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
      history.push('/calculate/logistics');
   };

   return (
      <div className="percentages-wrapper">
         <div>
            <div>
               <p className="percentages-direction-text">Co2E Details</p>
               <div className="percentages-big-container2">
                  <div className="percentages-container">
                     <div className={totalCo2e1 < totalCo2e2 ? "percentages-before-click-category" : "percentages-after-click-category"}>
                        <img src={itemTypeAdress1} alt={itemTypeAdress1} className="percentages-img-cover2" />
                        <div>
                           First item
                           <p className="percentages-carbon-result">Total: {totalCo2e1}</p>
                        </div>
                     </div>
                  </div>

                  <div className="percentages-container">
                     <div className={totalCo2e1 > totalCo2e2 ? "percentages-before-click-category" : "percentages-after-click-category"}>
                        <img src={itemTypeAdress2} alt={itemTypeAdress2} className="percentages-img-cover2" />
                        <div>
                           Second item
                           <p className="percentages-carbon-result">Total: {totalCo2e2}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="percentages-container2">
                  <div className="percentages-totals">
                     <div className="percentages-detail">{materialCO2e1}</div>
                     <div className="percentages-detail">{fasteningCO2e1}</div>
                     <div className="percentages-detail">{countryCO2e1}</div>
                     <div>&nbsp;</div>
                     <div className="percentages-detail light-pink">{totalCo2e1}</div>
                  </div>
                  <div className="percentages-categories">
                     <div className="percentages-detail"><b>Material</b></div>
                     <div className="percentages-detail"><b>Fastenings</b></div>
                     <div className="percentages-detail"><b>Logistics</b></div>
                     <div>&nbsp;</div>
                     <div className="percentages-detail light-pink"><b>TOTAL</b></div>
                  </div>
                  <div className="percentages-totals">
                     <div className="percentages-detail">{materialCO2e2}</div>
                     <div className="percentages-detail">{fasteningCO2e2}</div>
                     <div className="percentages-detail">{countryCO2e2}</div>
                     <div>&nbsp;</div>
                     <div className="percentages-detail light-pink">{totalCo2e2}</div>
                  </div>
               </div>

               <p className="percentages-explanation">Text explaining the Co2E principles, etc.</p>
            </div>
         </div>

         <span className="percentages-go-back" onClick={handleClickPreviousSection}>
               GO BACK TO RESULTS
         </span>
         {/* <Link to="/compare/details">
            <button type="button">Check Details</button>
         </Link> */}
         <Link to="/">
            <button type="button">COMPARE NEW ITEMS</button>
         </Link>
      </div>
   );
};

export default PercentagesOption2;
