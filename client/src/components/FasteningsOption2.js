import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import './css/Fastenings.css';
import FasteningsItemBox2 from './FasteningsItemBox2';

const FasteningsOption2 = () => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setFasteningCO2e1,
      fasteningCO2e1,
   } = useContext(Context);

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

   useEffect(() => {
      const temporalArray = [];
      fastenings.forEach((fastening) => {
         temporalArray.push({ quantity: 0 });
      });
      setlistOfQuantities([...temporalArray]);
   }, [fastenings]);

   const [totalFasteningCo2e, setTotalFasteningCo2e] = useState(0);

   const addFastenings = () => {
      let result = 0;
      let resultObj = {};
      for (let i = 0; i < fastenings.length; i++) {
         result += listOfQuantities[i].quantity * fastenings[i].co2e;
         resultObj[fastenings[i].name] = `${
            listOfQuantities[i].quantity * fastenings[i].co2e
         }`;
      }
      setTotalFasteningCo2e(result);
      setFasteningCO2e1(resultObj);
   };

   console.log('result Fastening: ', fasteningCO2e1);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/materials');
   };

   return (
      <div className="choiceContainer">
         <div>
            <div>
               <br />
               <p className="directionText">How Many Fatenings Are There?</p>
               <br />
               <div className="itemsContainer">
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress1} alt={itemTypeAdress1} />
                  </div>
                  <div className="beforeClickCategory">
                     <img src={itemTypeAdress2} alt={itemTypeAdress2} />
                  </div>
               </div>
            </div>
         </div>
         <div className="materialBigContainer">
            <div className="materialContainer">
               {listOfQuantities.length > 0 &&
                  fastenings.map((fastening, i) => {
                     return (
                        <div key={i}>
                           <h3>{fastening.name}</h3>
                           <input
                              type="number"
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
            <div className="materialContainer">
               {listOfQuantities.length > 0 &&
                  fastenings.map((fastening, i) => {
                     return (
                        <div key={i}>
                           <h3>{fastening.name}</h3>
                           <input
                              type="number"
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
         </div>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/calculate/logistics">
               <button type="button" onClick={addFastenings}>
                  Next
               </button>
            </Link>
         </div>
      </div>
   );
};

export default FasteningsOption2;
