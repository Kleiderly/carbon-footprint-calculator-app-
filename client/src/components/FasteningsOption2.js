import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './css/Fastenings.css';
import Tips from './Tips';
import { tipsList } from './data.js';
import './css/vivify.min.css';
import Select from 'react-select';

const FasteningsOption2 = () => {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setFasteningCO2e1,

      setFasteningCO2e2,
   } = useContext(Context);

   const [tip, setTip] = useState('');
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

   const options = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
      { value: 9, label: '9' },
      { value: 10, label: '10' },
   ];

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
      for (let i = 0; i < fastenings.length; i++) {
         result += listOfQuantities[i].quantity * fastenings[i].co2e;
         result2 += listOfQuantities2[i].quantity * fastenings[i].co2e;
      }
      setFasteningCO2e1(result);
      setFasteningCO2e2(result2);
   };

   useEffect(() => {
      const tips = tipsList.filter((tip) => tip.category === 'fastening');
      const tip = tips[Math.floor(Math.random() * tips.length)];
      setTip(tip);
   }, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/materials');
   };

   return (
      <div className="fastenings-wrapper vivify fadeIn">
         <ProgressBar stage={2} previous="Material" next="Fabrication" />

         <p className="fastenings-direction-text">Do they have fastenings?</p>

         <div className="fastenings-items-container">
            <div className="fastenings-item-group">
               <div className="fastenings-before-click">
                  <img
                     src={itemTypeAdress1}
                     alt={itemTypeAdress1}
                     className="fastenings-img-cover"
                  />
                  <span>1st Item</span>
               </div>
               <div className="fastenings-container">
                  {listOfQuantities.length > 0 &&
                     fastenings.map((fastening, i) => {
                        return (
                           <div key={i} className="fastenings-item">
                              <span className="fastenings-name">
                                 {fastening.name}
                              </span>
                              <br />
                              {/* <input
                                 type="number"
                                 className="fastenings-input"
                                 min="0"
                                 step="1"
                                 value={listOfQuantities[i].quantity}
                                 onChange={(e) => {
                                    copyOfQuantities[i].quantity =
                                       e.target.value;
                                    setlistOfQuantities([...copyOfQuantities]);
                                 }}
                              /> */}
                              <Select
                                 options={options}
                                 className="fastenings-input"
                                 defaultValue={listOfQuantities[i].quantity}
                                 onChange={(e) => {
                                    copyOfQuantities[i].quantity = e.value;
                                    setlistOfQuantities([...copyOfQuantities]);
                                 }}
                              />
                           </div>
                        );
                     })}
               </div>
            </div>

            <div>&nbsp;&nbsp;</div>

            <div className="fastenings-item-group">
               <div className="fastenings-before-click">
                  <img
                     src={itemTypeAdress2}
                     alt={itemTypeAdress2}
                     className="fastenings-img-cover"
                  />
                  <span>2nd Item</span>
               </div>
               <div className="fastenings-container">
                  {listOfQuantities2.length > 0 &&
                     fastenings.map((fastening, i) => {
                        return (
                           <div key={i} className="fastenings-item">
                              <span className="fastenings-name">
                                 {fastening.name}
                              </span>
                              <br />
                              {/* <input
                                 type="number"
                                 className="fastenings-input"
                                 min="0"
                                 step="1"
                                 value={listOfQuantities2[i].quantity}
                                 onChange={(e) => {
                                    copyOfQuantities2[i].quantity =
                                       e.target.value;
                                    setlistOfQuantities2([
                                       ...copyOfQuantities2,
                                    ]);
                                 }}
                              /> */}
                              <Select
                                 options={options}
                                 className="fastenings-input"
                                 defaultValue={listOfQuantities2[i].quantity}
                                 onChange={(e) => {
                                    copyOfQuantities2[i].quantity = e.value;
                                    setlistOfQuantities2([
                                       ...copyOfQuantities2,
                                    ]);
                                 }}
                              />
                           </div>
                        );
                     })}
               </div>
            </div>
         </div>

         <div className="fastenings-back-next-buttons">
            <button
               className="back-button"
               type="button"
               onClick={handleClickPreviousSection}
            >
               BACK
            </button>
            <Link to="/compare/logistics">
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
            <Tips category="fastenings" tipObj={tip} />
         </div>
      </div>
   );
};

export default FasteningsOption2;
