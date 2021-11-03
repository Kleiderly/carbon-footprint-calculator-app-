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

// Select options callback
   const runCallback = (cb) => {
      return cb();
   };

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

   //To remove blue border on select focus
   const style = {
      control: base => ({
        ...base,
        boxShadow: 'none',
        border: 0
      }),
      container: base => ({
         ...base,
         width: 150
       })
    };

   return (
      <div className="fastenings-wrapper vivify fadeIn">
         <ProgressBar stage={2} previous="Material" next="Fabrication" />

         <p className="fastenings-title">Do they have fastenings?</p>

         <div className="fastenings-items-container2">
            <div className="fastenings-item-group light-accent-bg">
               <div className="fastenings-before-click">
                  <img src={itemTypeAdress1} alt={itemTypeAdress1} className="fastenings-img-cover" />
                  <span className="fastenings-img-text light-accent-text">1st Item</span>
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
                                 options={
                                    runCallback(()=> {
                                       let options = [];
                                       let a = 1
                                       for(a = 1; a < 21; a++){
                                          options.push({ value: a, label: a})
                                       };
                                       return options;
                                    })
                                 }
                                 className="fastenings-input"
                                 menuPlacement="top"
                                 styles={style}
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

            <div> </div>

            <div className="fastenings-item-group light-accent-bg">
               <div className="fastenings-before-click">
                  <img src={itemTypeAdress2} alt={itemTypeAdress2} className="fastenings-img-cover" />
                  <span className="fastenings-img-text light-accent-text">2nd Item</span>
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
                                 options={
                                    runCallback(()=> {
                                    let options = [];
                                    let a = 1
                                    for(a = 1; a < 21; a++){
                                       options.push({ value: a, label: a})
                                    };
                                    return options;
                                    })
                                 }
                                 styles={style}
                                 menuPlacement="top"
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