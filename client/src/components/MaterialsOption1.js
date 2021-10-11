<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Context from "../contexts/ContextApi";
import MaterialsItemBox1 from "./MaterialsItemBox1";
import "./css/Category.css";
import "./css/Materials.css";

const MaterialsOption1 = (props) => {
  
  const {itemTypeAdress1, setMaterialCO2e1} = useContext(Context);

  const [selected, setSelected] = useState('');
  const [materials, setMaterials] = useState([]);
  const [selectMaterial1, setSelectMaterial1] = useState(null);


  console.log(itemTypeAdress1)

  const mapOnItemClickImageClassHandler = (item, i) => {
    setSelectMaterial1(item.co2e)
    setSelected(i)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/material`)
      .then((response) => {
        setMaterials(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/category");
  };

  return (
    <div className="choiceContainer">
      <div>
        <br />
        <p className="directionText">Choose Your Material</p>
        <br />
        <div className="beforeClick">
          <img src={itemTypeAdress1} alt="firstBoxImage" className='imgCover'/>
        </div>
      </div>
      <div className="materialContainer">
        {materials.map((item, i) => (
          <div onClick={() => mapOnItemClickImageClassHandler(item, i)} key={item._id}>
            <MaterialsItemBox1 
              index={i}
              name={item.name}
              selected={selected} 
            />
          </div>
        ))}
      </div>
      <button type="button" onClick={handleClickPreviousSection}>
        Go Back
      </button>
      <div>
        <Link to="/calculate/fastenings">
          <button type="button"onClick={() => setMaterialCO2e1(selectMaterial1)}>Calculate</button>
        </Link>
      </div>
    </div>
  );
=======
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
import Context from '../contexts/ContextApi';
// import Tips from './Tips';
import MaterialsItemBox1 from './MaterialsItemBox1';
import { itemList } from './data';
import './css/Category.css';
import './css/Materials.css';

const MaterialsOption1 = (props) => {
   const { itemTypeAdress1 } = useContext(Context);
   const [materials, setMaterials] = useState([]);
   const [selectMaterial1, setSelectMaterial1] = useState(null);

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/material`)
         .then((response) => {
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

   console.log(itemTypeAdress1);

   return (
      <div className="choiceContainer">
         <div>
            <br />
            <p className="directionText">Choose Your Material</p>
            <br />
            <div className="beforeClick">
               <img
                  src={itemTypeAdress1}
                  alt="firstBoxImage"
                  className="imgCover"
               />
            </div>
         </div>
         <div className="materialContainer">
            {materials.map((item) => (
               <div onClick={() => selectMaterial1(item.co2e)} key={item._id}>
                  <MaterialsItemBox1 name={item.name} />
               </div>
            ))}
         </div>
         <button type="button" onClick={handleClickPreviousSection}>
            Go Back
         </button>
         <Link
            // className={
            //    selectMaterial1 && selectMaterial2 ? null : 'disabled-link'
            // }
            to={{
               pathname: '/calculate/fastenings',
               state: {
                  // adress1,
                  // adress2,
                  // material1: { selectMaterial1 },
               },
            }}
         >
            <button type="button">Calculate</button>
         </Link>
      </div>
   );
>>>>>>> e9df48e9a9a5d3456fb6813701cd5c95c6ea3c42
};

export default MaterialsOption1;
