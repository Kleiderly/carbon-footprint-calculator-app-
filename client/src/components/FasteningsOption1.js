import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import FasteningsItemBox from './FasteningsItemBox';
import axios from 'axios';
import Tips from './Tips';

const FasteningsOption1 = (browser) => {
   const [fastenings, setFastenings] = useState([]);

   const [inputValue, setInputValue] = useState([]);

   // const [inputPlasticButton, setInputPlasticButton] = useState(0)
   // const [inputMetalButton, setInputMetalButton] = useState(0)
   // const [inputZipper, setinputZipper] = useState(0)

   const location = useLocation();
   const { adress1, adress2, material1, material2 } = location.state;
   console.log(adress1, adress2, material1, material2);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/option-2');
   };

   const handleOnChange = (e) => {
      setInputValue(e.target.value);
      setInputValue([...inputValue]);
   };

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/fastening`)
         .then((response) => setFastenings(response.data))
         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <div className="choiceContainer">
         <div>
            <br />
            <p className="directionText">How Many Fanstenings Are there?</p>
            <br />
            <div
               className="beforeClick"
               //  onClick={handleClick1}
            >
               <img src="./img/items-images/skirt.png" alt="firstBoxImage" />
            </div>
         </div>
         <div className="materialContainer">
            {fastenings.map((item) => (
               <div onClick={() => setFastenings(item.co2e)} key={item.id}>
                  <FasteningsItemBox name={item.name} co2e={item.co2e} />
                  <input
                     type="number"
                     value={inputValue}
                     onChange={handleOnChange}
                  />
               </div>
            ))}
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <div>
            <Link to="/fastenings">
               <button type="button">Calculate</button>
            </Link>
         </div>
      </div>
   );
};

export default FasteningsOption1;
