import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import Context from "../contexts/ContextApi";
// import Tips from './Tips';
import MaterialsItemBox from "./MaterialsItemBox";
import { itemList } from "./data";
import "./css/Category.css";
import "./css/Materials.css";

const MaterialsOption1 = (props) => {
   const {itemTypeAdress1} = useContext(Context);
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
    history.push("/option-2");
  };

  console.log(itemTypeAdress1);

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
        {materials.map((item) => (
          <div onClick={() => selectMaterial1(item.co2e)} key={item._id}>
            <MaterialsItemBox name={item.name} />
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

export default MaterialsOption1;
