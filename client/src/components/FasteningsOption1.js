import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../contexts/ContextApi';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './css/Fastenings.css';
import Tips from './Tips';
import { tipsList } from './data.js';
import './css/vivify.min.css';
import Select from 'react-select';

const FasteningsOption1 = (props) => {
   const { itemTypeAdress1, setFasteningCO2e1, fasteningCO2e1 } =
      useContext(Context);

   const [tip, setTip] = useState('');
   const [fastenings, setFastenings] = useState([]);

// Select options callback
   const runCallback = (cb) => {
      return cb();
   };


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

   useEffect(() => {
      const tips = tipsList.filter((tip) => tip.category === 'fastening');
      const tip = tips[Math.floor(Math.random() * tips.length)];
      setTip(tip);
   }, []);

   console.log('result Fastening: ', fasteningCO2e1);

   //To remove blue border on select focus
   const style = {
      control: base => ({
        ...base,
        boxShadow: 'none',
        border: 0
      })
    };

   return (
      <div className="fastenings-wrapper vivify fadeIn">
         <ProgressBar stage={2} previous="Material" next="Fabrication" />

         <p className="fastenings-title">Does it have fastenings?</p>

         <div className="fastenings-items-container light-accent-bg">
            <div className="fastenings-before-click">
               <img
                  src={itemTypeAdress1}
                  alt={itemTypeAdress1}
                  className="fastenings-img-cover"
               />
               <span className="fastenings-img-text light-accent-text">Fastenings</span>
            </div>

            <div className="fastenings-input-box">
               {listOfQuantities.length > 0 &&
                  fastenings.map((fastening, i) => {
                     return (
                        <div key={i}>
                           <p className="fastenings-option-text">
                              {fastening.name}
                           </p>
                           {/* <input
                              type="number"
                              min="0"
                              step="1"
                              className="light-pink"
                              value={listOfQuantities[i].quantity}
                              onChange={(e) => {
                                 copyOfQuantities[i].quantity = e.target.value;
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
                              styles={style}
                              menuPlacement="top"
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

         <div className="fastenings-back-next-buttons">
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
            <Tips category="fastenings" tipObj={tip} />
         </div>
      </div>
   );
};

export default FasteningsOption1;
