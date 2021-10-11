import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import './css/Category.css';


const FasteningsOption2 = () => {
   const [selectFastening1, setSelectFastening1] = useState({
      plasticButton1: 0,
      metalButton1: 0,
      zip1: 0,
   });
   const [selectFastening2, setSelectFastening2] = useState({
      plasticButton2: 0,
      metalButton2: 0,
      zip2: 0,
   });

   const [plastic1, setPlastic1] = useState(0);
   const [metal1, setMetal1] = useState(0);
   const [zipper1, setZipper1] = useState(0);
   const [plastic2, setPlastic2] = useState(0);
   const [metal2, setMetal2] = useState(0);
   const [zipper2, setZipper2] = useState(0);

   const location = useLocation();
   const { adress1, adress2, material1, material2 } = location.state;

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/option-2');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSelectFastening1({
         ...selectFastening1,
         plasticButton1: Number(plastic1),
         metalButton1: Number(metal1),
         zip1: Number(zipper1),
      });
      setSelectFastening2({
         ...selectFastening2,
         plasticButton2: Number(plastic2),
         metalButton2: Number(metal2),
         zip2: Number(zipper2),
      });
   };
   console.log(selectFastening1);
   console.log(selectFastening2);

   return (
      <div>
         <form onSubmit={handleSubmit}>
            {/* <div> */}
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
            {/* </div>
            <div> */}
            <input
               type="number"
               placeholder=""
               onChange={(e) => setPlastic2(e.target.value)}
            />
            <input
               type="number"
               placeholder=""
               onChange={(e) => setMetal2(e.target.value)}
            />
            <input
               type="number"
               placeholder=""
               onChange={(e) => setZipper2(e.target.value)}
            />
            {/* </div> */}
            <button type="submit">Add</button>
         </form>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link
            // className={
            //    selectMaterial1 && selectMaterial2 ? null : 'disabled-link'
            // }
            to={{
               pathname: '/compare/logistics',
               state: {
                  adress1,
                  adress2,
                  material1,
                  material2,
                  fastening1: { selectFastening1 },
                  fastening2: { selectFastening2 },
               },
            }}
         >
            <button type="button">Next</button>
         </Link>
      </div>
   );
};

export default FasteningsOption2;
