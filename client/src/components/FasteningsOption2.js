import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import './css/Fastenings.css';

const FasteningsOption2 = () => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setFasteningCO2e1,
      fasteningCO2e1,
      setFasteningCO2e2,
      fasteningCO2e2,
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
   const [listOfQuantities2, setlistOfQuantities2] = useState([]);

   const copyOfQuantities = [...listOfQuantities];
   const copyOfQuantities2 = [...listOfQuantities2];

   useEffect(() => {
      const temporalArray = [];
      const temporalArray2 = [];
      fastenings.forEach((fastening) => {
         temporalArray.push({ quantity: 0 });
         temporalArray2.push({ quantity: 0 });
      });
      setlistOfQuantities([...temporalArray]);
      setlistOfQuantities2([...temporalArray2]);
   }, [fastenings]);

   const addFastenings = () => {
      let result = 0;
      let result2 = 0;
      let resultObj = {};
      for (let i = 0; i < fastenings.length; i++) {
         result += listOfQuantities[i].quantity * fastenings[i].co2e;
         result2 += listOfQuantities2[i].quantity * fastenings[i].co2e;
      }
      setFasteningCO2e1(result);
      setFasteningCO2e2(result2);
   };

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
               {listOfQuantities2.length > 0 &&
                  fastenings.map((fastening, i) => {
                     return (
                        <div key={i}>
                           <h3>{fastening.name}</h3>
                           <input
                              type="number"
                              value={listOfQuantities2[i].quantity}
                              onChange={(e) => {
                                 copyOfQuantities2[i].quantity = e.target.value;
                                 setlistOfQuantities2([...copyOfQuantities2]);
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
            <Link to="/compare/logistics">
               <button type="button" onClick={addFastenings}>
                  Next
               </button>
            </Link>
         </div>
      </div>
   );
};

export default FasteningsOption2;
