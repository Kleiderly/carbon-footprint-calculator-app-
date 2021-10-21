import React, { useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import './css/Results.css';
import ButtonShareModal from './ButtonShareModal';
import './css/vivify.min.css';

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

   console.log(`${totalCo2e1} TRUE OR FALSE ${totalCo2e1 < totalCo2e2}`);

   console.log(totalCo2e1 < totalCo2e2 ? ' YES ITS TRUE' : 'IT IS FALSE');
   console.log(typeof totalCo2e1);
   console.log(typeof totalCo2e2);
   //Calculation
   // const [totalCo2e1, setTotalCo2e1] = useState();
   // const [totalCo2e2, setTotalCo2e2] = useState();
   // const [percentage, setPercentage] = useState();

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

   console.log(totalCo2e1);
   console.log(totalCo2e2);

  console.log(percentage);
  //To Go Back
  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/logistics");
  };

   const messageUneven =
      <span className="results-message">
         The <b>{totalCo2e1 < totalCo2e2 ? 'first item' : 'second item'} </b> 
         is <b>{percentage}%</b> more eco-responsible than the
         <b> {totalCo2e1 > totalCo2e2 ? 'first Item' : 'second Item'}</b>.
      </span>;

   const messageEven = 
      <span className="results-message">
         It's a tie!
      </span>;


return (
   <div className="results-wrapper vivify popIn delay-500">

      <p className="results-title">Results!</p>
      <div className="results-main-container">

         <div className="results-item-group">
            <div className={totalCo2e1 < totalCo2e2 ? "results-before-click" : "results-after-click"}>
               <img src={itemTypeAdress1} alt={itemTypeAdress1} className="results-img-cover" />
               <div>
                  First item
                  <p className="results-carbon-result vivify popIn delay-1000">Total: {totalCo2e1}</p>
               </div>
            </div>
         </div>

         <div className="results-item-group">
            <div className={totalCo2e1 > totalCo2e2 ? "results-before-click" : "results-after-click"}>
               <img src={itemTypeAdress2} alt={itemTypeAdress2} className="results-img-cover" />
               <div>
                  Second item
                  <p className="results-carbon-result vivify popIn delay-1000">Total: {totalCo2e2}</p>
               </div>
            </div>
         </div>
         
      </div>

      {totalCo2e1 === totalCo2e2 ? messageEven : messageUneven }

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
