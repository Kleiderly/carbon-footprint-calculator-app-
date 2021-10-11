import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
// import FasteningsItemBox from './FasteningsItemBox2';
import axios from 'axios';
import Tips from './Tips';

const FasteningsOption1 = (browser) => {
   const [fastenings, setFastenings] = useState([]);

   const [selectFastening1, setSelectFastening1] = useState({
      plasticButton1: 0,
      metalButton1: 0,
      zip1: 0,
   });
   const [plastic1, setPlastic1] = useState(0);
   const [metal1, setMetal1] = useState(0);
   const [zipper1, setZipper1] = useState(0);

   const handleSubmit = (e) => {
      e.preventDefault();
      setSelectFastening1({
         ...selectFastening1,
         plasticButton1: Number(plastic1),
         metalButton1: Number(metal1),
         zip1: Number(zipper1),
      });
   };
   const location = useLocation();
   // const { adress1, adress2, material1, material2 } = location.state;

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/option-2');
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
         {/* <div className="materialContainer">
            {fastenings.map((item) => (
               <div onClick={() => setFastenings(item.co2e)} key={item.id}>
                  <FasteningsItemBox name={item.name} co2e={item.co2e} />
                  <input
                     type="number"
                     value={inputValue}
                     // onChange={handleOnChange}
                  />
               </div>
            ))}
         </div> */}

         <form onSubmit={handleSubmit}>
            <div>
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setPlastic1(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setMetal1(e.target.value)}
               />
               <input
                  type="number"
                  placeholder=""
                  onChange={(e) => setZipper1(e.target.value)}
               />
            </div>
            <button type="submit">Add</button>
         </form>

         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         {/* <div>
            <Link to="/fastenings">
               <button type="button">Calculate</button>
            </Link>
         </div> */}
      </div>
   );
};

export default FasteningsOption1;
