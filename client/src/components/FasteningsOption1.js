import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './css/Fastenings.css';
import Tips from './Tips';

const FasteningsOption1 = (props) => {
   const { itemTypeAdress1, setFasteningCO2e1, fasteningCO2e1 } =
      useContext(Context);

   const [fastenings, setFastenings] = useState([]);

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/fastening`)
         .then((response) => setFastenings(response.data))
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const [listOfQuantities, setlistOfQuantities] = useState([]);
   const copyOfQuantities = [...listOfQuantities];

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/calculate/materials');
   };

   useEffect(() => {
      const temporalArray = [];
      fastenings.forEach((fastening) => {
         temporalArray.push({ quantity: 0 });
      });
      setlistOfQuantities([...temporalArray]);
   }, [fastenings]);

   const addFastenings = () => {
      let result = 0;
      for (let i = 0; i < fastenings.length; i++) {
         result += listOfQuantities[i].quantity * fastenings[i].co2e;
      }
      setFasteningCO2e1(result);
   };

   console.log('result Fastening: ', fasteningCO2e1);

   return (
      <div className="fastening-choice-container">
         <ProgressBar stage={2} previous="Material" next="Fabrication" />
         <p className="fastening-direction-text">Does it have fastenings?</p>
         <div className="fastening-items-container">
            <div className="fastening-before-click">
               <img
                  src={itemTypeAdress1}
                  alt={itemTypeAdress1}
                  className="fastening-img-cover"
               />
               <span className="fastening-small-text">Fastenings</span>
            </div>
         </div>
         <div>
            {listOfQuantities.length > 0 &&
               fastenings.map((fastening, i) => {
                  return (
                     <div key={i}>
                        <h3 className="fastenings-option-text">
                           {fastening.name}
                        </h3>
                        <input
                           type="number"
                           min="0"
                           step="1"
                           value={listOfQuantities[i].quantity}
                           onChange={(e) => {
                              copyOfQuantities[i].quantity = e.target.value;
                              setlistOfQuantities([...copyOfQuantities]);
                           }}
                        />
                     </div>
                  );
               })}
         </div>
         <div className="fastening-back-next-buttons">
            <button
               className="back-button"
               type="button"
               onClick={handleClickPreviousSection}
            >
               BACK
            </button>
            <Link to="/calculate/logistics">
               <button
                  className="next-button"
                  type="button"
                  onClick={addFastenings}
               >
                  NEXT
               </button>
            </Link>
         </div>

         <div className="tips">
            <Tips category="fastenings" />
         </div>
      </div>
   );
};

export default FasteningsOption1;
