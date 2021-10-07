import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
// import Tips from './Tips';
import MaterialsItemBox from './MaterialsItemBox';
import { itemList } from './data';
import './css/Category.css';
import './css/Materials.css';

function MaterialsOption2({ browser, match, result, setResult }) {
   // console.log(result);
   const location = useLocation();
   const { adress1, adress2 } = location.state;

   const [materials, setMaterials] = useState([]);

   const [choice, setChoice] = useState('');
   const [selectMaterial1, setSelectMaterial1] = useState(null);
   const [selectMaterial2, setSelectMaterial2] = useState(null);

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/material`)
         .then((response) => {
            console.log(response.data);
            setMaterials(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   let history = useHistory();
   const handleClickPreviousSection = () => {
      history.push('/option-2');
   };

   const handleClick1 = () => {
      console.log('click2');
      setChoice('1');
   };

   const handleClick2 = () => {
      console.log('click2');
      setChoice('2');
   };

   return (
      <div className="choiceContainer">
         <p>Clothes</p>
         <div>
            {browser.match.params.choice === 'option-1' ? (
               <div>
                  <br />
                  <p className="directionText">Choose Your Material</p>
                  <br />
                  <div
                     className={choice === '1' ? 'afterClick' : 'beforeClick'}
                     //  onClick={handleClick1}
                     value={choice}
                  >
                     <img
                        src="./img/items-images/skirt.png"
                        alt="firstBoxImage"
                     />
                  </div>
               </div>
            ) : (
               <div>
                  <br />
                  <p className="directionText">Choose Your Materials</p>
                  <br />
                  <div className="itemsContainer">
                     <div
                        className={
                           choice === '1' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick1}
                        value={choice}
                     >
                        <img src={adress1} alt="firstBoxImage" />
                     </div>
                     <div
                        className={
                           choice === '2' ? 'afterClick' : 'beforeClick'
                        }
                        onClick={handleClick2}
                        value={choice}
                     >
                        <img
                           src="./img/items-images/skirt.png"
                           alt="secondBoxImage"
                        />
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="materialBigContainer">
            <div className="materialContainer">
               {materials.map((item) => (
                  <div
                     onClick={() =>
                        selectMaterial1
                           ? setSelectMaterial2(item.co2e)
                           : setSelectMaterial1(item.co2e)
                     }
                     key={item.id}
                  >
                     <MaterialsItemBox name={item.name} />
                  </div>
               ))}
            </div>
            <div className="materialContainer">
               {materials.map((item) => (
                  <div
                     onClick={() =>
                        selectMaterial1
                           ? setSelectMaterial2(item.co2e)
                           : setSelectMaterial1(item.co2e)
                     }
                     key={item.id}
                  >
                     <MaterialsItemBox name={item.name} />
                  </div>
               ))}
            </div>
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link
            className={
               selectMaterial2 && selectMaterial2 ? null : 'disabled-link'
            }
            to={{
               pathname: `/${browser.match.params.choice}/fastenings`,
               state: {
                  adress1,
                  adress2,
                  material1: { selectMaterial1 },
                  material2: { selectMaterial2 },
               },
            }}
         >
            <button type="button">Compare</button>
         </Link>
         <div>
            <button type="button" onClick={handleClickPreviousSection}>
               Go Back
            </button>
            <div>
               <Link to="/materials">
                  <button type="button">Calculate</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default MaterialsOption2;
