import React, { useState, useEffect } from "react";
import axios from "axios";
import Tips from "./Tips";
import { useLocation } from "react-router";

import "./css/Materials.css";

function Materials(props) {
  const location = useLocation();
  const { adress1, adress2 } = location.state;

  const [materials, setMaterials] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/material`)
      .then((response) => setMaterials(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <div>
        <img src={adress1.selectType1} alt="fgh" />
        <img src={adress2.selectType2} alt="fgh" />
      </div>
      <p>{adress1.selectType1}</p>
      <p>{adress2.selectType2}</p>
      <div>
        <img src='./img/items-images/skirt.png' alt="fgh" />
      </div>{" "}
      ______
      <br />
      title
      <br />
      clothes choices pic
      <br />
      button selection
      <br />
      go back link
      <br />
      tips
      <Tips />
      <br />
      ______
    </div>
  );
}

export default Materials;
