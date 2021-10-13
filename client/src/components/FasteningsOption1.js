import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import { Link } from 'react-router-dom';

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
      <div className="choiceContainer">
         <br />
         <p className="directionText">How Many Fastenings Are there?</p>
         <br />
         <div className="itemsContainer">
            <div className="beforeClick">
               <img
                  src={itemTypeAdress1}
                  alt="firstBoxImage"
                  className="imgCover"
               />
            </div>
         </div>
         <div>
            {listOfQuantities.length > 0 &&
               fastenings.map((fastening, i) => {
                  return (
                     <div key={i}>
                        <h3>{fastening.name}</h3>
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

export default FasteningsOption1;
