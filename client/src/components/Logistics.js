import React, { useState, useEffect } from "react";
import axios from "axios";
import Tips from "./Tips";

function Logistics(props) {
  const [countriesFrom, setCountriesFrom] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/logistic`)
      .then((response) => setCountriesFrom(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
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

export default Logistics;
