import React, { useState, useEffect, useContext } from 'react';
import Context from '../contexts/ContextApi';
import { Link, useHistory } from 'react-router-dom';
import ItemBox from './ItemBox';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import Tips from './Tips';
import './css/Logistics.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { tipsList } from './data';
import './css/vivify.min.css';

function Logistics(props) {
   const {
      itemTypeAdress1,
      itemTypeAdress2,
      setCountryCO2e1,
      setCountryCO2e2,
   } = useContext(Context);

   const [tip, setTip] = useState('');
   //For data from database
   const [countriesFrom, setCountriesFrom] = useState([]);

   //For selection by user through button click
   const [selectCountry1, setSelectCountry1] = useState(null);
   const [selectCountry2, setSelectCountry2] = useState(null);

   const [selected1, setSelected1] = useState('');
   const [selected2, setSelected2] = useState('');

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/logistic`)
         .then((response) => setCountriesFrom(response.data))
         .catch((error) => {
            console.log(error);
         });
   }, []);

   useEffect(() => {
      const tips = tipsList.filter((tip) => tip.category === 'logistics');
      const tip = tips[Math.floor(Math.random() * tips.length)];
      setTip(tip);
   }, []);

   //To Go Back
   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/compare/fastenings');
   };

   const handleClick = () => {
      setCountryCO2e1(selectCountry1);
      setCountryCO2e2(selectCountry2);
   };

   const handleClickMappedItem1 = (item, i) => {
      setSelectCountry1(item.co2e);
      setSelected1(i);
   };

   const handleClickMappedItem2 = (item, i) => {
      setSelectCountry2(item.co2e);
      setSelected2(i);
   };
   //  console.log(itemTypeAdress1);
   //  console.log(itemTypeAdress2);
   console.log(selectCountry1);
   console.log(selectCountry2);

   return (
      <div className="logistics-wrapper vivify fadeIn">
         <ProgressBar stage={3} previous="Fastenings" next="Results" />

         <p className="logistics-title">Where were they produced?</p>

         <div className="logistics-items-container2">
            <div className="logistics-item-group light-accent-bg">
               <div className="logistics-before-click  light-accent-text light-tone-bg">
                  <img src={itemTypeAdress1} alt={itemTypeAdress1} className="logistics-img-cover" />
                  <span className="logistics-img-text light-accent-text">1st Item</span>
               </div>
               <div className="logistics-container">
                  {countriesFrom.map((item, i) => (
                     <div
                        onClick={() => handleClickMappedItem1(item, i)}
                        key={item._id}
                     >
                        <ItemBox
                           name={item.productionLocation}
                           index={i}
                           selected={selected1}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div> </div>

            <div className="logistics-item-group light-accent-bg">
               <div className="logistics-before-click light-accent-text light-tone-bg">
                  <img src={itemTypeAdress2} alt={itemTypeAdress2} className="logistics-img-cover" />
                  <span className="logistics-img-text light-accent-text">2nd Item</span>
               </div>
               <div className="logistics-container">
                  {countriesFrom.map((item, i) => (
                     <div
                        onClick={() => handleClickMappedItem2(item, i)}
                        key={item._id}
                     >
                        <ItemBox
                           name={item.productionLocation}
                           index={i}
                           selected={selected2}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="category-back-next-buttons">
            <button
               className="back-button"
               type="button"
               onClick={handleClickPreviousSection}
            >
               BACK
            </button>

            {selectCountry1 && selectCountry2 ? (
               <Link to="/compare/results">
                  <button
                     className="next-button"
                     type="button"
                     onClick={handleClick}
                  >
                     NEXT
                  </button>
               </Link>
            ) : (
               <Popup trigger={<button className="next-button"> NEXT</button>}>
                  <div>Please make a selection.</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="logistics" tipObj={tip} />
         </div>
      </div>
   );
}

export default Logistics;
