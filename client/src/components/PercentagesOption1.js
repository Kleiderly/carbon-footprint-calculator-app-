import React, { useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Category.css';
import './css/Results.css';

const PercentagesOption1 = (props) => {
   const {
      itemTypeAdress1,

      materialCO2e1,

      fasteningCO2e1,

      countryCO2e1,

      totalCo2e1,
   } = useContext(Context);

   //    useEffect(() => {}, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/results');
   };

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <p className="directionText">Percentages</p>
               <div className="resultsBigContainer">
                  <div className="resultsContainer">
                     <div className="beforeClickCategory">
                        <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                     </div>
                  </div>

                  <div className="percentagesContainer">
                     <div>
                        <div>Material</div>
                        <div>Fastenings</div>
                        <div>Logistics</div>
                        <div>Total</div>
                     </div>
                     <div>
                        <div>{materialCO2e1.toFixed(2)}</div>
                        <div>{fasteningCO2e1.toFixed(2)}</div>
                        <div>{countryCO2e1.toFixed(2)}</div>
                        <div>{totalCo2e1.toFixed(2)}</div>
                     </div>
                  </div>

                  <h3>Text</h3>
               </div>
            </div>

            <button type="button" onClick={handleClickPreviousSection}>
               Go Back
            </button>
            <Link to="/calculate/details">
               <button type="button">Check Details</button>
            </Link>
            <Link to="/">
               <button type="button">Compare New Items</button>
            </Link>
         </div>
      </div>
   );
};

export default PercentagesOption1;
