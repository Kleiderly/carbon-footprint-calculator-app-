import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Context from "../contexts/ContextApi";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./css/Fastenings.css";
import Tips from "./Tips";
import { tipsList } from "./data.js";
import "./css/vivify.min.css";
import Select from "react-select";

const FasteningsOption1 = (props) => {
  const { itemTypeAdress1, setFasteningCO2e1, fasteningCO2e1 } =
    useContext(Context);

  const [tip, setTip] = useState("");
  const [fastenings, setFastenings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/fastening`)
      .then((response) => setFastenings(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [listOfQuantities, setlistOfQuantities] = useState([]);
  const copyOfQuantities = [...listOfQuantities];

  let history = useHistory();
  const handleClickPreviousSection = () => {
    history.push("/calculate/materials");
  };

  useEffect(() => {
    const temporalArray = [];
    fastenings.forEach((fastening) => {
      temporalArray.push({ quantity: 0 });
    });
    setlistOfQuantities([...temporalArray]);
  }, [fastenings]);

  const addFastenings = () => {
    let result = 0;
    for (let i = 0; i < fastenings.length; i++) {
      result += listOfQuantities[i].quantity * fastenings[i].co2e;
    }
    setFasteningCO2e1(result);
  };

  useEffect(() => {
    const tips = tipsList.filter((tip) => tip.category === "fastening");
    const tip = tips[Math.floor(Math.random() * tips.length)];
    setTip(tip);
  }, []);

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  console.log("result Fastening: ", fasteningCO2e1);

  return (
    <div className="fastenings-wrapper vivify fadeIn">
      <ProgressBar stage={2} previous="Material" next="Fabrication" />

      <p className="fastenings-direction-text">Does it have fastenings?</p>

      <div className="fastenings-items-container">
        <div className="fastenings-before-click">
          <img
            src={itemTypeAdress1}
            alt={itemTypeAdress1}
            className="fastenings-img-cover"
          />
          <span className="fastenings-small-text">Fastenings</span>
        </div>
      </div>

      <div>
        {listOfQuantities.length > 0 &&
          fastenings.map((fastening, i) => {
            return (
              <div key={i}>
                <p className="fastenings-option-text">{fastening.name}</p>
                <Select
                  defaultValue={listOfQuantities[i].quantity}
                  onChange={(e) => {
                     copyOfQuantities[i].quantity = e.value;
                     setlistOfQuantities([...copyOfQuantities]);
                  }}
                  options={options}
                />
              </div>
            );
          })}
      </div>

      <div className="fastenings-back-next-buttons">
        <button
          className="back-button"
          type="button"
          onClick={handleClickPreviousSection}
        >
          BACK
        </button>
        <Link to="/calculate/logistics">
          <button className="next-button" type="button" onClick={addFastenings}>
            NEXT
          </button>
        </Link>
      </div>

      <div className="tips">
        <Tips category="fastenings" tipObj={tip} />
      </div>
    </div>
  );
};

export default FasteningsOption1;
