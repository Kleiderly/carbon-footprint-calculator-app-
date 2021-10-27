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

const LogisticsOption1 = (props) => {
   const { itemTypeAdress1, setCountryCO2e1 } = useContext(Context);

   //For data from database
   const [countriesFrom, setCountriesFrom] = useState([]);

   //For selection by user through button click
   const [selectCountry1, setSelectCountry1] = useState(null);

   const [selected, setSelected] = useState(null);

   const [tip, setTip] = useState('');

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
      history.push('/calculate/fastenings');
   };

   const handleClick = () => {
      setCountryCO2e1(selectCountry1);
      //   setCountryCO2e2(selectCountry2);
   };

   const handleClickMappedItem = (item, i) => {
      setSelectCountry1(item.co2e);
      setSelected(i);
   };
   console.log(itemTypeAdress1);
   return (
      <div className="logistics-wrapper vivify fadeIn">
         <ProgressBar stage={3} previous="Fastenings" next="Results" />

         <p className="logistics-title">Where was it produced?</p>

         <div className="logistics-items-container light-accent-bg">
            <div className="logistics-before-click light-accent-text">
               <img src={itemTypeAdress1} alt={itemTypeAdress1} className="logistics-img-cover" />
               <span className="logistic-img-text light-accent-text">Origin</span>
            </div>
               <div className="logistics-container1">
                  {countriesFrom.map((item, i) => (
                     <div
                        onClick={() => handleClickMappedItem(item, i)}
                        key={item._id}
                     >
                        <ItemBox
                           name={item.productionLocation}
                           index={i}
                           selected={selected}
                        />
                     </div>
                  ))}
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

            {selectCountry1 ? (
               <Link to="/calculate/results">
                  <button
                     className="next-button"
                     type="button"
                     onClick={handleClick}
                  >
                     NEXT
                  </button>
               </Link>
            ) : (
               <Popup
                  trigger={<button className="next-button"> NEXT</button>}
                  position="top center"
               >
                  <div className="pop-up-box">Please make a selection.</div>
               </Popup>
            )}
         </div>

         <div className="tips">
            <Tips category="logistics" tipObj={tip} />
         </div>
      </div>
   );
};

export default LogisticsOption1;
